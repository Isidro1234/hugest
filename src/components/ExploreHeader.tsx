import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AvatarCustom from './AvatarCustom'
import { Input, InputField } from './ui/input'
import { Button } from './ui/button'
import SearchIcon from "@/assets/images/search.svg"

const ExploreHeader = () => {
  return (
    <View className='h-50 p-10 pt-15  gap-5'>
        <View className='flex-row items-center w-full'>
            <View className='flex-1'>
               <Text className='text-[19px] text-[#6C463E]'>Helen</Text> 
               <Text className='text-[#6C463E]'>Welcome back!</Text> 
            </View>
            
                <AvatarCustom name='isidro' image={null}/>
        </View>
        <View className='flex-row items-center pr-18 gap-2'>
          <Input   className='rounded-full p-4 border-[#C3B1AD] focus:border-[#a08c88]'>
        <InputField placeholderTextColor={'#C3B1AD'} placeholder='what do you have in mind today?'/>
        </Input>  
        <Button className='rounded-full bg-[#6C463E] p-4'><SearchIcon color={'white'} height={25} width={25}/></Button>
        </View>
        
      
    </View>
  )
}

export default ExploreHeader

const styles = StyleSheet.create({})