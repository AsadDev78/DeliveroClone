import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {urlFor} from '../sanity';
import * as Icon from 'react-native-feather';

const DishRow = ({id, name, description, price, image}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
        <View className="flex-row ">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1 text-black">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">${price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#f3f3f4',
              }}
              source={{uri: urlFor(image).url()}}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className='bg-white px-4'>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity>
              <Icon.PlusCircle
                stroke="white"
                fill="#00ccbb"
                width={40}
                height={40}
              />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <Icon.MinusCircle
                stroke="white"
                fill="#00ccbb"
                width={40}
                height={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
