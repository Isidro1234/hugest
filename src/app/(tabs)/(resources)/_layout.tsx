import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { withLayoutContext } from 'expo-router'
import {createMaterialTopTabNavigator} from 'expo-router/js-top-tabs'

const MaterialTops = withLayoutContext(createMaterialTopTabNavigator().Navigator)
const ResourcesLayout = () => {
  return (
    <MaterialTops>

    <MaterialTops.Screen name='baby'/>
    <MaterialTops.Screen name='health'/>
    <MaterialTops.Screen name='recomendations'/>

    </MaterialTops>
  )
}

export default ResourcesLayout

const styles = StyleSheet.create({})