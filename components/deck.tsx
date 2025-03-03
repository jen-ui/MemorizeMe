import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link, router, usePathname } from 'expo-router'

type DeckComponentProps = {
  title: string
  id:number
}

const DeckComponent = ({ title,id }: DeckComponentProps) => {
  
  return (
    <View className='text-black font-psemibold text-2xl border-black border-2 p-4 m-4'>
      <Link  href={{
          pathname: '/deck/[query]',
          params: { query: id },
        }}>
        <Text>{ title}</Text>
      </Link>
    </View>
    
  )
}

export default DeckComponent

const styles = StyleSheet.create({})