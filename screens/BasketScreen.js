import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../features/restaurantSlice';
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../features/basketSlice';
import {useState} from 'react';
import {useMemo} from 'react';
import {useEffect} from 'react';
import * as Icon from 'react-native-feather';
import {urlFor} from '../sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  console.log('f', groupedItemsInBasket);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="border-b border-[#00ccbb] p-5 bg-white shadow-xl">
          <View>
            <Text className="text-lg font-bold text-black text-center">
              Basket
            </Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute right-5 top-4">
            <Icon.XCircle
              stroke="white"
              fill="#00ccbb"
              width={40}
              height={40}
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center px-4 space-x-4 py-3 bg-white my-5">
          <Image
            source={{uri: 'https://links.papareact.com/wru'}}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-70 min</Text>
          <Text className="text-[#00ccbb]">Change</Text>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {/* {console.log('groupedItemsInBasket',groupedItemsInBasket)} */}
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00ccbb]">{items.length} x</Text>
              <Image
                source={{uri: urlFor(items[0]?.image).url()}}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">{items[0]?.price}</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00ccbb] text-xs"
                  onPress={() => dispatch(removeFromBasket({id: key}))}>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">${basketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$5.99</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-black">Order Total</Text>
            <Text className="font-extrabold text-black">
              ${basketTotal + 5.99}
            </Text>
          </View>
          <TouchableOpacity className='rounded-lg bg-[#00ccbb] p-4'>
            <Text className='text-center text-white font-bold text-lg'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
