import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import decks from "@/data/decks";
import cards from "@/data/cards";
import Card from "@/components/card";

const CardScreen = () => {
  const { id } = useLocalSearchParams();

  let cardID = Number(id);

  let card = cards.find(c => c.id === cardID)
  
  const [flip,setFlip]= useState(false)
  return (
    <View className="flex-1">
      <View className=" flex-1 items-center justify-center border m-8 bg-yellow-100 rounded-3xl">
        <Text className="font-pbold text-3xl">{card?.word}</Text>
        {flip && (
          <>
            <View className="h-0 border bg-gray-800 w-2/3"></View>
            <Text className="font-pbold text-3xl">{card?.meaning}</Text>
          </>
        )}
      </View>
      <View className="flex items-center bg-gray-700 h-16 justify-center">
        <Text className="font-psemibold text-2xl text-white">
          {!flip && (
            <Pressable onPress={() => setFlip(!flip)} className="flex w-full items-center ">
              <Text className="font-psemibold text-2xl text-white ">Flip</Text>
            </Pressable>
          )}
          {flip && (
            <View className="flex flex-row  h-full">
              <Pressable className="bg-green-300 flex-1 items-center justify-center h-full ">
                <Text className=" text-2xl font-psemibold ">Easy</Text>
              </Pressable>
              <Pressable className="bg-yellow-200 flex-1 items-center justify-center h-full">
                <Text className="text-2xl font-psemibold ">Good</Text>
              </Pressable>  
              <Pressable className="bg-red-400 flex-1 items-center justify-center h-full">
                <Text className="text-2xl font-psemibold">Hard</Text>
              </Pressable>
            </View>
          )}
        </Text>
      </View>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({});
