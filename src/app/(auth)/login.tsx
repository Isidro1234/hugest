import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, InputField } from '@/components/ui/input'
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control'
import { Image } from 'expo-image'
import Logo from '@/assets/images/logo.png'
import { Button } from '@/components/ui/button'
import { Link, router } from 'expo-router'

const Login = () => {
  return (
    <View className='h-full w-full bg-white p-10'>
        <View className='w-full flex items-center mt-5'>
            <Image style={{width:200, height:200}} source={Logo}/>
        </View>
       
      <Text className='text-[#6C463E] pb-3 text-[25px] text-center font-bold mt-2'>Login</Text>
      <Text className='text-[#6C463E] pb-3 text-[14px] text-center'>
        Get access to all the resources Houston, provides to our lovely mothers
      </Text>
      <FormControl className='mt-4'>
        <FormControlLabel>
            <FormControlLabelText><Text className='text-[#6C463E] pb-3'>email</Text></FormControlLabelText>
        </FormControlLabel>
        <Input className='rounded-full  p-4 border-[#6C463E]'>
            <InputField placeholderTextColor={'#6C463E'} textContentType={"emailAddress"}  placeholder='example@gmail.com'/>
        </Input>
        <FormControlLabel className='mt-4'>
            <FormControlLabelText><Text className='text-[#6C463E] pb-3'>password</Text></FormControlLabelText>
        </FormControlLabel>
        <Input className='rounded-full  p-4 border-[#6C463E]'>
            <InputField placeholderTextColor={'#6C463E'} secureTextEntry={true} type={"password"} placeholder='*******'/>
        </Input>
        <Text className='mt-4 text-[#6C463E]'>forgot password?</Text>
        <Button className='p-6 rounded-full bg-[#6C463E] mt-4' onPress={()=>{router.push('/(tabs)/explore')}}>
            <Text className='color-white'>Login</Text>
        </Button>
      </FormControl>
      <Link className='mt-4' href={'/(auth)/signup'} push={true}><Text className='text-[12px] text-center'>Don't have an account already? click here</Text></Link>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})