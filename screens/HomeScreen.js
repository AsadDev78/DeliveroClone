import {View, Text, ScrollView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <Header />
      <ScrollView 
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom:100
        }}
        showsVerticalScrollIndicator={false}
        >
        <Categories />
        <FeatureRow title='Featured' discription='Lorem iqamren sod oert dfioor dfi' />
        <FeatureRow title='Featured' discription='Lorem iqamren sod oert dfioor dfi' />
        <FeatureRow title='Featured' discription='Lorem iqamren sod oert dfioor dfi'   />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
