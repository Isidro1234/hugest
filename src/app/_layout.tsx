import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {GluestackUIProvider} from '../components/ui/gluestack-ui-provider'
const MainLayout = () => {
  return (
   <GluestackUIProvider mode='light'>
    <Stack>
      <Stack.Screen name='index'/>
      <Stack.Screen name='(tabs)'/>
    </Stack>
   </GluestackUIProvider>
  )
}

export default MainLayout

const styles = StyleSheet.create({})