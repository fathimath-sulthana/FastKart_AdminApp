import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
const TopContainer = () => {
  return (
    <View>
       <ScrollView >
        <View style={{padding:20,margin:10,backgroundColor:'ghostwhite',borderRadius:20}}>
        <View style={{flexDirection:'row',}}>
            <Text style={{fontSize:17, color:'black'}}>Total Sales</Text>
            <Ionicons name='bar-chart' color='#0caf9a'size={35} style={{position:'absolute',right:20,}}/>
        </View>
        <Text style={{fontSize:18,margin:5,color:'black'}}>23,235,5</Text>
        </View>
        <View style={{padding:25,margin:10,backgroundColor:'azure',borderRadius:20}}>
        <View style={{flexDirection:'row',}}>
            <Text style={{fontSize:17, color:'black'}}>Total Orders</Text>
            <AntDesign name='piechart' color='#0caf9a'size={35} style={{position:'absolute',right:20,}}/>
        </View>
        <Text style={{fontSize:18,margin:5,color:'black'}}>23,235,5</Text>
        </View>
        <View style={{padding:25,margin:10,backgroundColor:'cornsilk',borderRadius:20}}>
        <View style={{flexDirection:'row',}}>
            <Text style={{fontSize:17, color:'black'}}>Total Products</Text>
            <Feather name='package' color='#0caf9a'size={35} style={{position:'absolute',right:20,}}/>
        </View>
        <Text style={{fontSize:18,margin:5,color:'black'}}>23,235,5</Text>
        </View>
        
       </ScrollView>
    </View>
  )
}

export default TopContainer

const styles = StyleSheet.create({})