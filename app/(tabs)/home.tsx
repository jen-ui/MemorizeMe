import { StyleSheet, Text, View,Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import DeckComponent from '@/components/deck'
import { Link, usePathname } from 'expo-router'
import decks from '@/data/decks'

import { icons } from '@/constants'
import Addbox from '@/components/Addbox'

const Home = () => {
  const [addDeck,setAddDeck]=useState(false)
  return (
    <View className='relative'>
      {
        decks.map((deck, i) => {
          return <DeckComponent key={i} title={deck.title} id={i} cards={deck.cards} />;
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
        <Addbox deckID={decks.length} setAdd={setAddDeck} add={addDeck} card={false}  />
        }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})