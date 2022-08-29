import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import RestaurantCard from './Common/RestaurantCard';

const FeatureRow = ({id, title, discription}) => {
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
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Testing Title"
          rating={4.6}
          genre="Pakistan"
          address="123 Main street Ali town"
          short_desc="Testing one"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Testing Title"
          rating={4.6}
          genre="Pakistan"
          address="123 Main street Ali town"
          short_desc="Testing one"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Testing Title"
          rating={4.6}
          genre="Pakistan"
          address="123 Main street Ali town"
          short_desc="Testing one"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
