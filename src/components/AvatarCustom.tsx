import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, AvatarFallback, AvatarFallbackText, AvatarGroup, AvatarImage } from './ui/avatar'

const AvatarCustom = ({name , image}:{name:string, image?:ImageSourcePropType | string | null}) => {
   
    return (
    <Avatar className='w-17 h-17'>
      <AvatarFallbackText className='text-[24px] text-[#6C463E]'>{name}</AvatarFallbackText>
      {image && (typeof image === 'string'
        ? <AvatarImage source={{ uri: image }} />
        : <AvatarImage source={image} />)}
    </Avatar>
  )
}

export default AvatarCustom

const styles = StyleSheet.create({})