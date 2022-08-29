import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CategoryCard = ({imgURL, title}) => {
  return (
    <TouchableOpacity className='relative mr-2 '>
      <Image source={{uri:imgURL}}
      className='h-20 w-20 rounded'
      />
      <Text
      className='font-bold text-white bottom-1 left-1 absolute'
      >{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
