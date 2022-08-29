import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './Common/CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgURL = 'https://links.papareact.com/gn7' title='testing 1'/>
      <CategoryCard imgURL = 'https://links.papareact.com/gn7' title='testing 1'/>
      <CategoryCard imgURL = 'https://links.papareact.com/gn7' title='testing 1'/>
      <CategoryCard imgURL = 'https://links.papareact.com/gn7' title='testing 1'/>
      <CategoryCard imgURL = 'https://links.papareact.com/gn7' title='testing 1'/>
    </ScrollView>
  )
}

export default Categories