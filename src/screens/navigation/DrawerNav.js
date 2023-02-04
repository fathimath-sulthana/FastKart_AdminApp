import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigation from './TabNavigation';
import DrawerContent from '../DrawerContent';
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent  {...props}/>}>
        <Drawer.Screen name= 'bottomTab' component={TabNavigation} options={{
            headerShown:false
        }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})