import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DashBoard from '../DashBoard';
import Account from '../Account';
import Settings from '../Settings';
const Tab= createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
        //tabBarShowLabel:false,
         tabBarStyle:{
          position:'absolute',
          bottom:25,
          right:20,
          left:20,
          elevation:0,
          backgroundColor:'#0caf9a',
          borderRadius:15,
          height:90,
          ...styles.ShadowStyle
         },
         
      }}>
        <Tab.Screen name='DashBoard' component={DashBoard} options={{
            headerShown:false,
          tabBarLabel: "Dashboard",
         tabBarLabelStyle:{
          color:'white',
          fontSize:15,
          marginTop:-25,
          padding:10
         },
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="dashboard"
                size={24}
                color={tabInfo.focused ? "white" : "white"}
              />
            );
          },
        }}/>
        <Tab.Screen name='Account' component={Account}
        options={{
            headerShown:false,
          tabBarLabel: "Account",
         tabBarLabelStyle:{
          color:'white',
          fontSize:15,
          marginTop:-25,
          padding:10
         },
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="settings"
                size={24}
                color={tabInfo.focused ? "white" : "white"}
              />
            );
          },
        }}/>
        <Tab.Screen name='Settings' component={Settings}
        options={{
            headerShown:false,
          tabBarLabel: "Settings",
         tabBarLabelStyle:{
          color:'white',
          fontSize:15,
          marginTop:-25,
          padding:10
         },
          tabBarIcon: (tabInfo) => {
            return (
              <MaterialIcons
                name="account-circle"
                size={24}
                color={tabInfo.focused ? "white" : "white"}
              />
            );
          },
        }}/>
      </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
    ShadowStyle:{
      shadowColor:'#7F5DF0',
      shadowOffset:{
        width:0,
        height:10
      },
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5
    },
  
  })