import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import RestaurantScreen from '../../screens/RestaurantScreen';
import BasketScreen from '../../screens/BasketScreen';
const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen name="BasketScreen" component={BasketScreen} 
        options={{presentation:'modal',headerShown:false}}
        />
      </Stack.Navigator>
  )
}

export default Main