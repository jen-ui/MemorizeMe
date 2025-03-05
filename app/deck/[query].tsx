import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import decks from "@/data/decks";
import cards from "@/data/cards";
import Card from "@/components/card";
import { icons } from "../../constants";
import Addbox from "@/components/Addbox";
import generateRandomIndex from "@/utilities/randomIndexGen";

const Deck = () => {
  let sessionLength = 10
  

  const [add, setAdd] = useState(false);
 
  const { query } = useLocalSearchParams();

  let deckID = Number(query);
   const [numOfCards, setNumOfCards] = useState(decks[deckID].cards.length);

  let cardsList = Array.from( generateRandomIndex(numOfCards,sessionLength)
  );

  console.log(cardsList);

  

  return (
    <View className="relative flex  p-8 gap-2 ">
      <Text className="flex-1 items-center justify-center  text-2xl text-center text-yellow-950 bg-gray-400 h-12">
        {decks[deckID]?.title}
      </Text>

      <View className="flex flex-row gap-2  flex-wrap ">
        {decks[deckID]?.cards?.map((card, i) => {
          return (
            <Card
              key={i}
              word={card.word}
              meaning={card.meaning}
              id={card.id}
            />
          );
        })}
      </View>
      <Pressable
        className="flex-1 min-h-32 w-28 rounded-md items-center justify-center bg-gray-400 p-2 border-2"
        onPress={() => setAdd(!add)}
      >
        <Image
          source={icons.add}
          style={{ width: 40, height: 40 }}
          tintColor="black"
        />
      </Pressable>
      <Link
        href={{
          pathname: "/cardScreen/[id]",
          params: { id: 1 },
        }}
      >
        Review
      </Link>
      {add && <Addbox deckID={deckID} setAdd={setAdd} add={add} card={ true} numOfCards={numOfCards} setNumOfCards={setNumOfCards} />}
    </View>
  );
};

export default Deck;

const styles = StyleSheet.create({});
