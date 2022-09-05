import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
    if (items.length === 0) return null
  return (
    <View className="absolute bottom-10 w-full z-50 ">
      <TouchableOpacity onPress={()=> navigation.navigate('BasketScreen')} className="bg-[#00ccbb] flex-row mx-5 p-4 rounded-lg items-center justify-between">
        <Text className='text-white bg-[#01A296] py-1 px-2 text-lg font-extrabold'>{items.length}</Text>
        <Text className='text-lg flex-1 text-center font-extrabold text-white'>Basket View</Text>
        <Text className='text-lg font-extrabold text-white'>${basketTotal}</Text>   
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
