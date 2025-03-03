import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "../global.css";
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pmedium'>Yo Baby!!</Text>
      <Text className='text-4xl font-pbold text-red-500'>Let's do this</Text>
      <StatusBar style='auto' />
      <Link href="/home">Go to Home</Link>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems:"flex-start",
        justifyContent:'center',
    }
})