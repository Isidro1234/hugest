import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Explore from '@/assets/images/explore.svg'
import Activities from "@/assets/images/activities.svg"
import Doctors from "@/assets/images/doctor.svg"
import Resources from "@/assets/images/treasure.svg"
import User from "@/assets/images/user.svg"
import ExploreHeader from '@/components/ExploreHeader'
const TabLayout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'#6C463E', tabBarInactiveTintColor:'#C3B1AD'}}>
      <Tabs.Screen name='explore' options={{ headerShown:false,tabBarIcon:({color , focused})=>{
        return(<Explore color={color} height={20}  width={20}/>)
      }}}/>
      <Tabs.Screen name='activities' options={{tabBarIcon:({color , focused})=>{
        return(<Activities color={color} height={20}  width={20}/>)
      }}}/>    
      <Tabs.Screen name='doctors' options={{tabBarIcon:({color , focused})=>{
        return(<Doctors color={color} height={20}  width={20}/>)
      }}}/>
      <Tabs.Screen name='(resources)' options={{ tabBarLabel:"resources" , tabBarIcon:({color , focused})=>{
        return(<Resources color={color} height={20}  width={20}/>)
      }}}/>
      <Tabs.Screen name='user' options={{ tabBarLabel:"user" , tabBarIcon:({color , focused})=>{
        return(<User color={color} height={20}  width={20}/>)
      }}}/>
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})