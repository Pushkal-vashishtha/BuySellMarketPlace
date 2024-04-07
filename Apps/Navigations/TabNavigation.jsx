import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
   <Tab.Navigator screenOptions={{
    headerShown:false,
   }}>
    <Tab.Screen name='home' component={HomeScreen}
    options={{
      tabBarLabel:({color})=>(
        <Text style={{color:color,fontSize:10,marginBottom:10}}>Home</Text>
      ),
      tabBarIcon:({color,size})=>(
        <Entypo name="home" size={size} color={color} />
      )
    }}
    />
    <Tab.Screen name='explore' component={ExploreScreen}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:10,marginBottom:10}}>Explore</Text>
          ),
          tabBarIcon:({color,size})=>(
            <Ionicons name="search" size={size} color={color} />
          )
        }}/>
    <Tab.Screen name='addpost' component={AddPostScreen}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:10,marginBottom:10}}>Add Post</Text>
          ),
          tabBarIcon:({color,size})=>(
            <Ionicons name="camera" size={size} color={color} />
          )
        }}
        />
    <Tab.Screen name='profile' component={ProfileScreen}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:10,marginBottom:10}}>Profile</Text>
          ),
          tabBarIcon:({color,size})=>(
            <Ionicons name="person-circle" size={size} color={color} />
          )
        }}
        />
   </Tab.Navigator>
  )
}