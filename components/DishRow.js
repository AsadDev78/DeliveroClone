import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {urlFor} from '../sanity';
import * as Icon from 'react-native-feather';
import {addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId} from '../features/basketSlice';
import {useSelector, useDispatch} from 'react-redux';

const DishRow = ({id, name, description, price, image}) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state)=> selectBasketItemsWithId(state,id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}));
  };

  const removeItemFromBasket = () => {
    if(!items.length > 0) return;
    dispatch(removeFromBasket({id}))
  }
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}>
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
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <Icon.MinusCircle
                stroke="white"
                fill={items.length > 0 ?"#00ccbb": "gray"}
                width={40}
                height={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <Icon.PlusCircle
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
