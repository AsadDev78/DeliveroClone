import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';
// import { PhoneIncoming } from 'react-native-feather';
import * as Icon from 'react-native-feather';

const Header = () => {
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl text-black">
            Current Location
            <Icon.ChevronDown
              stroke="#00ccbb"
              fill="none"
              width={20}
              height={20}
            />
          </Text>
        </View>

        <Icon.User stroke="#00ccbb" fill="none" width={25} height={25} />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200">
          <Icon.Search
            className="ml-2"
            stroke="gray"
            fill="none"
            width={20}
            height={20}
          />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <Icon.AlignJustify
          stroke="#00ccbb"
          fill="none"
          width={20}
          height={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
