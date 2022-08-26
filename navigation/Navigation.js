import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main/Main';
import Auth from './Auth/Auth';

const Navigation = () => {
    const [isSplash,setIsSplash] = useState(false);
    return (
    <NavigationContainer>
        {isSplash?<Auth/>:<Main/>}
    </NavigationContainer>
  )
}

export default Navigation