import { StyleSheet, Text, View,Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import DeckComponent from '@/components/deck'
import { Link, usePathname } from 'expo-router'
import decks from '@/data/decks'

import { icons } from '@/constants'

const Home = () => {
  const [addDeck,setAddDeck]=useState(false)
  return (
    <View className='relative'>
      {
        decks.map((deck, id) => {
          return <DeckComponent key={id} title={deck.title} id={id} />;
        })
      }
      <Pressable className='text-black font-psemibold text-2xl border-black border-2 p-4 m-4'
      onPress={()=>setAddDeck(!addDeck)}>
       <Image
                source={icons.add}
                style={{ width: 40, height: 40 }}
                tintColor="black"
              />
      </Pressable>
      {addDeck &&
        <View className='absolute Z-10'><TextInput
        placeholder='Deck name'
      ></TextInput></View>}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})