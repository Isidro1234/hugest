import { Animated, NativeScrollEvent, NativeSyntheticEvent, ScrollView, ScrollViewProps, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ExploreHeader from '@/components/ExploreHeader'
import { Button } from '@/components/ui/button'
import DoctorCard from '@/components/DoctorCard'
import EventCard from '@/components/EventCard'
import ResourceCard from '@/components/ResourceCard'
import ExploreHeaderOnScroll from '@/components/ExploreOnscrollHeader'
import { useSharedValue } from 'react-native-reanimated'

const Explore = () => {
  const scrollref = useRef<ScrollView>(null);
  const [show, setShow] = useState(true)
  const scrollY = useSharedValue(10)
  const heightValue = new Animated.Value(100)
  const [numbers, setNumber] = useState(42)
  console.log(scrollY.value)
  return (      
    <View className='h-full p-.5 bg-white' >
        {
          numbers == 40 ?
          <ExploreHeaderOnScroll/> :
          <ExploreHeader/>
        }
        
       <ScrollView className='w-full bg-white p-4 gap-10' ref={scrollref} contentContainerStyle={{gap:10, paddingBottom:20}} showsVerticalScrollIndicator={false} bounces={false} onScroll={(e)=>{
        if(e.nativeEvent.contentOffset.y >= 153){
          heightValue.setValue(70)
          setNumber(40)
        }else{
           heightValue.setValue(270)
           setNumber(270)
        }
       }}>
          
            <DoctorCard doctor={{id:'sddsd', photo:"", type:"paid", specialty:"family",  name:'sds'}}/>
            <EventCard event={{id:"dfsdf", image:'', time:"", location:"ertr", title:"First Mom Party"}}/>
            <ResourceCard resource={{id:"dsf", image:"sdf", title:"sfsf" ,subtitle:"sfsdf" }}/>
            <ResourceCard resource={{id:"dsf", image:"sdf", title:"sfsf" ,subtitle:"sfsdf" }}/>
        </ScrollView> 
    </View>
      
  )
}

export default Explore

const styles = StyleSheet.create({})