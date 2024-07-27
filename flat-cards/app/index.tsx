import {SafeAreaView,ScrollView} from 'react-native'

import React from 'react'
import FlatCards from '@/components/FlatCards'
import ElevatedCards from '@/components/ElevatedCards'
import FancyCard from '@/components/FancyCard'

const Index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Index

