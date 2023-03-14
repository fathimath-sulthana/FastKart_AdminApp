import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './src/screens/navigation/DrawerNav';
import Category from './src/screens/Category';
import Products from './src/screens/Products';
import OrderStatus from './src/screens/OrderStatus';
import OurOffers from './src/screens/OurOffers';
import Reviews from './src/screens/Reviews';
import AddCategory from './src/screens/AddCategory';
import ListCategory from './src/screens/ListCategory';
import AddProducts from './src/screens/AddProducts';
import ListProducts from './src/screens/ListProducts';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DrawerNav'>
        <Stack.Screen name='login' component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name='DrawerNav' component={DrawerNav}  options={{headerShown:false}}/>
        <Stack.Screen name='Category' component={Category}  options={{headerShown:false}}/>
        <Stack.Screen name='Products' component={Products}  options={{headerShown:false}}/>
        <Stack.Screen name='Order Status' component={OrderStatus}  options={{headerShown:false}}/>
        <Stack.Screen name='Our Offers' component={OurOffers}  options={{headerShown:false}}/>
        <Stack.Screen name='Reviews' component={Reviews}  options={{headerShown:false}}/>
        <Stack.Screen name='AddCategory' component={AddCategory}  options={{headerShown:false}}/>
        <Stack.Screen name='ListCategory' component={ListCategory}  options={{headerShown:false}}/>
        <Stack.Screen name='AddProducts' component={AddProducts}  options={{headerShown:false}}/>
        <Stack.Screen name='ListProducts' component={ListProducts}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

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

