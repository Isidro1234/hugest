import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Image } from 'expo-image'
import Logo from '@/assets/images/logo.png'
import { router } from 'expo-router'

const Index = () => {
  return (
    <View className='p-5 bg-white h-full w-full '>
      <View className='w-full flex-1'>
        <Image style={{width:'100%', height:'100%'}} source={Logo}/>
      </View>
      <View className='flex-[0.4] mt-[-70]'>
        <Text className='text-[22px] p-4 text-[#6C463E] text-center'>Get access to all the resources Houston, provides to our lovely mothers</Text>
        <Button onPress={()=>{router.push('/(auth)/login')}}   className='rounded-full bg-[#6C463E] mt-3 ml-5 mr-5'><Text className='color-white p-3 rounded-3xl text-[19px]'>Get Started Now</Text></Button>
      </View>
      
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})