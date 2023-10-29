import React, {useState} from 'react'
import { View,Text, TextInput,Image, ScrollView, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {themeColors} from '../theme'
import * as Icon from 'react-native-feather'
import { categories, shortVideos, videos } from '../constants'
import { StatusBar } from 'expo-status-bar'
import ShortCard from '../components/ShortCard'
import VideoCard from '../components/VideoCard'


export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All')
  return (
    
      <View style ={{backgroundColor: themeColors.bg}} className = 'flex-1'>
        <StatusBar style = 'light' />
        <SafeAreaView className = "flex-row justify-between mx-4 mt-2">
          <View className = 'flex-row items-center space-x-2'>
          <Image source = {require('../assets/icons/youtubeIcon.png')} 
            className = 'h-7 w-10'
          />
          <Text className = 'text-white font-semibold text-xl tracking-tighter'> Youtube</Text>
          </View>
          <View className = "flex-row items-center space-x-3">
            <Icon.Cast stroke = 'white' strokeWidth={1.2} height = "22" />
            <Icon.Bell stroke = 'white' strokeWidth={1.2} height = "22" />
            <Icon.Search stroke = 'white' strokeWidth={1.2} height = "22" />
            <Image source = {require('../assets/images/dp.jpg')}
              className = 'h-7 w-7 rounded-full'
            />

          </View>
        </SafeAreaView>

        <ScrollView className = 'flex-1 ' showVerticalScrollIndicator={false}>

          <View className = "py-2 pb-5">
            {/* Categories */}
            <ScrollView className = "px-4" horizontal showHorizontalScrollIndicator={false}>
              {
                categories.map((category,index) => {
                  let isActive = activeCategory === category
                  let textClass   = isActive ? 'text-black' : 'text-white'
                  return (
                    <TouchableOpacity
                    onPress={() => setActiveCategory(category)}
                      key = {index}
                      style = {{backgroundColor: isActive?'white': 'rgba(255,255,255,0.1)'}}
                      className = "rounded-md p-1 px-3 mr-2"
                      >
                        <Text className = {textClass}>
                          {category}
                        </Text>
                        </TouchableOpacity>
                  )

                })
              }
              
              
            </ScrollView>

          </View>
          {/* starting vid/suggested video */}
          <VideoCard item = {videos[4]} />
            {/* short videos */}
            <View 
           className="mt-2 py-5 space-y-3 border-t-zinc-700 border-b-zinc-700 border-4 border-l-0 border-r-0">
            <View className="mx-4 flex-row items-center space-x-2">
              <Image source={require('../assets/icons/shortsIcon.png')}
                className="h-6 w-5"/>
              <Text className="text-white font-semibold text-lg tracking-tighter">Shorts</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} 
              className="px-4">
                {
                  shortVideos.map((short, index)=> <ShortCard item={short} key={index} />)
                }
            </ScrollView>

          </View>
          {/*Video*/ }
          <ScrollView showsVerticalScrollIndicator = {false}>
            {
              videos.map((video,index) => <VideoCard item = {video} key = {index} />)
            }

          </ScrollView>
        </ScrollView>
      </View>
  )
}
