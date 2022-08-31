import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import sanityClient from '../sanity';
const HomeScreen = () => {
  const [featuredCategories,setFeaturedCategories] = useState([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() =>{
    sanityClient.fetch(`
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
    ).then((data) =>{
      setFeaturedCategories(data);
    })
  },[])
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

        {/* Featured Row */}
        {featuredCategories?.map(category => (

        <FeatureRow key={category._id} id={category._id} title={category.name} discription={category.short_description} />
        ))}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
