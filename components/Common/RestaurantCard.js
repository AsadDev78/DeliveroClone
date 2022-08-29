import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3">
      <Image source={{uri: imgUrl}} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg text-black pt-2">{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <Icon.Star
            stroke="green"
            fill="none"
            height={22}
            width={22}
            opacity={0.5}
          />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating} </Text>. {genre}
          </Text>
        </View>

        {/* Location */}
        <View className='flex-row items-center space-x-1'>
          <Icon.MapPin
            stroke="gray"
            fill="none"
            height={22}
            width={22}
            opacity={0.5}
          />
          <Text className='text-xs text-gray-500'>
            Nearby . {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
