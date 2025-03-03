import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import decks from '@/data/decks'
import cards from '@/data/cards'
import { AddboxProps } from '@/types/types'


const Addbox = ({
  deckID,setAdd,add,card
}: AddboxProps) => {

  const [CardForm, setCardForm] = useState({
    word: "",
    meaning: "",
  });

  const [DeckForm, setDeckForm] = useState({
    deckName: ""
  });
  
  const [cardError, setCardError] = useState({
    word: "",
    meaning: "",
  });

  const [deckError, setDeckError] = useState({
    deckName: ""
  });

  const { word, meaning } = CardForm
  const {deckName} = DeckForm
 

  const handleChange = (value:string, name: string,card:boolean) => {
    card && setCardForm({ ...CardForm, [name]: value });
    !card && setDeckForm({...DeckForm,[name]:value})
  };



  const handleSubmitCard = ()=>{
    if (CardForm.word == "" || CardForm.meaning=="") {
      let tempError=cardError
      if (!CardForm.word) tempError = {...cardError,["word"]:"Word is required"}
      if (!CardForm.meaning) setCardError({...tempError, ["meaning"]:"Meaning is required"})
    }
    else {
      console.log("word:",word,"meaning:",meaning,deckID)
      decks[deckID].cards.push({
        id: decks[deckID].cards.length,
        word: word,
        meaning: meaning,
      });
      cards.push({
        id: decks[deckID].cards.length,
        word: word,
        meaning:meaning,
      });
      setAdd(!add);
    }
  }

  const handleSubmitDeck = () => {
    if (DeckForm.deckName == "" ) {
  
        setDeckError({ ...deckError, ["deckName"]: "Deck Title is required" });
    } else {
      console.log("Deck Name",deckName ,deckID);
      decks.push({
        id:decks.length,
        title: deckName,
        cards:[]
      });
      setAdd(!add);
    }
  };

  
  return (
    <View className="absolute top-48 left-20 border-2  w-64 z-10 flex rounded-xl bg-gray-50 shadow-slate-500">
      <View className="flex items-end ">
        <View className="flex mt-2 mr-2 ">
          <Button title="X" color="gray" onPress={() => setAdd(!add)} />
        </View>
      </View>
      {card && (
        <View className=" gap-2 items-center justify-center p-4">
          <View className="w-full">
            <TextInput
              className="w-full h-12 rounded-md border bg-white"
              onChangeText={(value) => handleChange(value, "word", true)}
              value={CardForm.word}
              placeholder="word"
            />
            {cardError.word && (
              <Text className="text-sm text-red-400">{cardError.word}</Text>
            )}
          </View>

          <View className="w-full">
            <TextInput
              className="w-full h-12 rounded-md border bg-white"
              onChangeText={(value) => handleChange(value, "meaning", true)}
              value={CardForm.meaning}
              placeholder="meaning"
            />
            {cardError.meaning && (
              <Text className="text-sm text-red-400">{cardError.meaning}</Text>
            )}
          </View>

          <Button
            title="Add"
            color="green"
            onPress={() => handleSubmitCard()}
          />
        </View>
      )}

      {!card && (
        <View className=" gap-2 items-center justify-center p-4">
          <View className="w-full">
            <TextInput
              className="w-full h-12 rounded-md border bg-white"
              onChangeText={(value) => handleChange(value, "deckName", false)}
              value={DeckForm.deckName}
              placeholder="Title of the Deck"
            />
            {deckError.deckName && (
              <Text className="text-sm text-red-400">{deckError.deckName}</Text>
            )}
          </View>

          <Button
            title="Add"
            color="green"
            onPress={() => {
              card && handleSubmitCard()
              !card && handleSubmitDeck()
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Addbox

const styles = StyleSheet.create({})