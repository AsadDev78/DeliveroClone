import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();

   useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
   },[]);
  return (
    <>
      <Header/>
    </>
  )
}

export default HomeScreen