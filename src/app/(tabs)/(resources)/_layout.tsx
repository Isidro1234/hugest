import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withLayoutContext } from 'expo-router'
import {createMaterialTopTabNavigator} from 'expo-router/js-top-tabs'
import Health from "@/assets/images/health.svg"
import Baby from "@/assets/images/baby.svg"
import Advice from "@/assets/images/advice.svg"
import Food from "@/assets/images/food.svg"
import ExploreHeader from '@/components/ExploreHeader'
const MaterialTops = withLayoutContext(createMaterialTopTabNavigator().Navigator)
const ResourcesLayout = () => {
  return (
    <MaterialTops screenOptions={{  tabBarIndicatorStyle: {backgroundColor:'#6C463E'} , tabBarActiveTintColor:'#6C463E', tabBarInactiveTintColor:'#C3B1AD'}} >

    <MaterialTops.Screen name='baby' options={{ tabBarIcon:({color, focus}:any)=>{
        return(<Baby color={color} height={20}  width={20}/>)
    }}}/>
    <MaterialTops.Screen name='health' options={{tabBarIcon:({color, focus}:any)=>{
        return(<Health color={color} height={20}  width={20}/>)
    }}}/>
    <MaterialTops.Screen name='advice' options={{tabBarIcon:({color, focus}:any)=>{
        return(<Advice color={color} height={20}  width={20}/>)
    }}}/>
    <MaterialTops.Screen name='food' options={{tabBarIcon:({color, focus}:any)=>{
        return(<Food color={color} height={20}  width={20}/>)
    }}}/>

    </MaterialTops>
  )
}

export default ResourcesLayout

const styles = StyleSheet.create({})