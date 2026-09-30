import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input, InputField } from './ui/input'
import { Button } from './ui/button'
import Search from "@/assets/images/search.svg"
const ResourceHeader = () => {
  return (
    <View className='bg-white w-full pt-20 p-4'>
    <Text className='text-[20px] text-[#6B4226] font-bold text-center pb-4'>Resources</Text>
    <View className='flex-row w-full gap-3'>
        <Input className='p-4 rounded-full flex-1'>
            <InputField  placeholder='which resources are you looking for?'/>
        </Input>
      <Button className='rounded-full bg-[#6C463E]'><Search color={'white'} height={20} width={20}/></Button>
    </View>
   
    </View>
  )
}

export default ResourceHeader

const styles = StyleSheet.create({})