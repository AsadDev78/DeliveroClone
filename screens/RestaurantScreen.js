import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {urlFor} from '../sanity';
import * as Icon from 'react-native-feather';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const {
    params: {
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
    },
  } = useRoute();
  useEffect(()=>{
    dispatch(
      setRestaurant({
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
      })
    )
  },[])
  return (
    <>
    <BasketIcon/>
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="bg-gray-100 p-2 rounded-full absolute top-5 left-5">
            <Icon.ArrowLeft
              stroke="#00ccbb"
              fill="none"
              width={20}
              height={20}
            />
          </TouchableOpacity>
        </View>
        {/* Title */}
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold text-black">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Icon.Star
                  stroke="green"
                  fill="none"
                  height={22}
                  width={22}
                  opacity={0.5}
                />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating} </Text>. {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Icon.MapPin
                  stroke="gray"
                  fill="none"
                  height={22}
                  width={22}
                  opacity={0.5}
                />
                <Text className="text-xs text-gray-500 w-48">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_desc}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <Icon.HelpCircle
              stroke="gray"
              opacity={0.5}
              fill="none"
              width={22}
              height={22}
            />
            <Text className="font-bold text-black flex-1 pl-2 text-md">
              Have a food allergy?
            </Text>
            <Icon.ChevronRight
              stroke="#00ccbb"
              fill="none"
              width={22}
              height={22}
            />
          </TouchableOpacity>
        </View>

        {/* Dishes Row */}

        <View>
          <Text className="text-black text-xl font-bold pt-6 mb-3 px-4">
            Menu
          </Text>
          <View className='pb-36'>
            {dishes?.map(dish => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
