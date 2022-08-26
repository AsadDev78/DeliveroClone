import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
// import { PhoneIncoming } from 'react-native-feather';
// import * as Icon from 'react-native-feather';

const Header = () => {
  return (
    <SafeAreaView>
      <Text>
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text>Current Location
              {/* <Icon.ChevronDown color='#000' fill='none' /> */}
            </Text>
        </View>
        
      </View>
      </Text>
    </SafeAreaView>
  );
};

export default Header;
