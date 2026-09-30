import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AvatarCustom from './AvatarCustom'
import { Input, InputField } from './ui/input'
import { Button } from './ui/button'
import SearchIcon from "@/assets/images/search.svg"
import TagList from './TagList'

const ExploreHeaderOnScroll = () => {
  return (
    <View className=' pb-4 p-0 pl-0 pt-17   gap-5 bg-[#9b6c5b] ' style={{position:'static', borderColor:'#e6e6e6', borderBottomWidth:1}}>
        <TagList tags={['All', 'Houston', ' texas' , "Mothers", "Events", "Social Groups", "Communities"]} onSelect={()=>{}}/>             
    </View>
  )
}

export default ExploreHeaderOnScroll

const styles = StyleSheet.create({})