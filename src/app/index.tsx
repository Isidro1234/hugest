import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@/components/ui/button'

const Index = () => {
  return (
    <View className='m-5'>
      <Text>Hello world</Text>
      <Button className='rounded-full'><Text className='color-white p-5 rounded-3xl'>Start now</Text></Button>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})