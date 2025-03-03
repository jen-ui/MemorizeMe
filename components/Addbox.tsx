import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import decks from '@/data/decks'
import cards from '@/data/cards'

type AddboxProps = {
  deckID: number;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  add: boolean;
};

const Addbox = ({
  deckID,setAdd,add
}: AddboxProps) => {

  const [form, setForm] = useState({
    word: "",
    meaning: "",
  });
  
  const [error, setError] = useState({
    word: "",
    meaning: "",
  });

  const {word,meaning}=form
 

  const handleChange = (value:string, name: string) => {
    setForm({ ...form, [name]: value });
  };



  const handleSubmit = ()=>{
    if (form.word == "" || form.meaning=="") {
      let tempError=error
      if (!form.word) tempError = {...error,["word"]:"Add the word"}
      if (!form.meaning) setError({...tempError, ["meaning"]:"Add the meaning"})
    }
    else {
      console.log("word:",word,"meaning:",meaning,deckID)
      decks[deckID].cards.push({
        id: 10,
        word: word,
        meaning: meaning,
      });
      cards.push({
        id: 10,
        word: form.word,
        meaning: form.meaning,
      });
      setAdd(!add);
    }
    
    


  }
  return (
    <View className="absolute top-48 left-20 border-2  w-64 z-10 flex rounded-xl bg-gray-50 shadow-slate-500">
      <View className="flex items-end ">
        <View className="flex mt-2 mr-2 ">
          <Button title="X" color="gray" onPress={() => setAdd(!add)} />
        </View>
      </View>
      <View className=" gap-2 items-center justify-center p-4">
        <View className="w-full">
          <TextInput
            className="w-full h-12 rounded-md border bg-white"
            onChangeText={(value) => handleChange(value, "word")} 
            value={form.word}
            placeholder="word"
          />
          {error.word && (
            <Text className="text-sm text-red-400">{error.word}</Text>
          )}
        </View>

        <View className="w-full">
          <TextInput
            className="w-full h-12 rounded-md border bg-white"
            onChangeText={(value) => handleChange(value, "meaning")}
            value={form.meaning}
            placeholder="meaning"
          />
          {error.meaning && (
            <Text className="text-sm text-red-400">{error.meaning}</Text>
          )}
        </View>

        <Button title="Add" color="green" onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};

export default Addbox

const styles = StyleSheet.create({})