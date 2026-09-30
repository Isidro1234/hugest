import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AvatarCustom from './AvatarCustom'
import { Input, InputField, InputIcon } from './ui/input'
import { Button } from './ui/button'
import SearchIcon from "@/assets/images/search.svg"
import TagList from './TagList'
import { Ionicons } from '@expo/vector-icons'

const ExploreHeader = () => {
  return (
    <View className='  p-0 pb-5 pt-15   gap-5 border-b-1 border-b-[#e6e6e6] bg-[#9b6c5b]'>
        <View className='flex-row items-center w-full pl-5 pr-5'>
            <View className='flex-1'>
               <Text   className='text-[49px] text-[#fefefe] font-bold font-[AlexBrush]'>Hugest</Text> 

            </View>
            
                <AvatarCustom name='isidro' image={null}/>
        </View>
        <View className='flex-row items-center gap-3 pl-5 pr-5'>
          <Input   className='rounded-full bg-[#f6f6f6] p-4 focus:border-[#a08c88] flex-1'> 
          <SearchIcon  color={'#C3B1AD'} height={20} width={20}/> 
        <InputField placeholderTextColor={'#C3B1AD'} placeholder='what do you have in mind today?'/>    
           
          
        </Input> 
         <Ionicons  name="options-outline" size={30} color="white" />
        </View>
       
          <TagList tags={['All', 'Houston', ' texas' , "Mothers", "Events", "Social Groups", "Communities"]} onSelect={()=>{}}/>             
         
    </View>
  )
}

export default ExploreHeader

const styles = StyleSheet.create({})