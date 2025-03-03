import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import { CardProps } from '@/types/types'


const Card = ({word,meaning,id}:CardProps) => {
  return (
    <View className="flex-1 min-h-32 max-w-32 min-w-24 rounded-md items-center justify-center bg-amber-300 p-2 border-2 ">
    
        <Text className="font-psemibold text-xl text-center">{word}</Text>
        <View className="h-[px] border border-gray-600 bg-gray-600 w-3/4  "></View>
        <Text className="text-xl text-center">{meaning}</Text>
        <Text className="text-xl text-center">{id}</Text>

      
    </View>
  );
}

export default Card

const styles = StyleSheet.create({})