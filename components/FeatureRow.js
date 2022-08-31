import {View, Text, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-native-feather';
import RestaurantCard from './Common/RestaurantCard';
import sanityClient from '../sanity'
const FeatureRow = ({id, title, discription}) => {

  const [restaurants,setRestaurants] = useState([])
  useEffect(() =>{
    sanityClient.fetch(
      `
        *[_type == "featured" && _id == $id]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]
      `,{id}
    ).then(data =>{
      setRestaurants(data?.restaurants)
    })
  },[])
  return (
    <View>
      <View className="flex-row items-center mt-4 justify-between px-4">
        <Text className="text-lg font-bold text-black">{title}</Text>
        <Icon.ArrowRight stroke="#00ccbb" fill="none" />
      </View>
      <Text className="px-4 text-gray-500 text-xs">{discription}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">

          {restaurants?.map(restaurant =>(

          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_desc={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
          ))}
        
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
