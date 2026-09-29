import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLauyout = () => {
  return (
    <Stack>
        <Stack.Screen name='login' options={{headerShown:false}}/>
        <Stack.Screen name='signup' options={{headerShown:false}}/>
    </Stack>
  )
}

export default AuthLauyout

const styles = StyleSheet.create({})