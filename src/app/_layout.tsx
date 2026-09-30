import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import {GluestackUIProvider} from '../components/ui/gluestack-ui-provider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()
const MainLayout = () => { 
  const [loaded, error] = useFonts({
    'AlexBrush': require('../../assets/fonts/AlexBrush-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView>
          <GluestackUIProvider mode='light'>
      <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        <Stack.Screen name='(auth)' options={{headerShown:false}}/>
      </Stack>
    </GluestackUIProvider>
    </GestureHandlerRootView>
 
  )
}

export default MainLayout

const styles = StyleSheet.create({})