import { StyleSheet, Text, View ,Image} from 'react-native'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer'
import { Avatar,Title,Caption } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useState } from 'react'
import { Drawer } from 'react-native-paper'

const DrawerContent = (props,{navigation}) => {
  const[NestedDrawerItem,setNestedDrawerItem]= useState(false)
  const[NestedDrawerItem2,setNestedDrawerItem2]= useState(false)
  const nestedDrawerItemFunction=() =>{
    if(NestedDrawerItem == true) {
      setNestedDrawerItem(false)
    }else{
      setNestedDrawerItem(true)
    }
  }
  const nestedDrawerItemFunction2=() =>{
    if(NestedDrawerItem2 == true) {
      setNestedDrawerItem2(false)
    }else{
      setNestedDrawerItem2(true)
    }
  }
  return (
    <View style={{flex:1,}}>
        <DrawerContentScrollView {...props}>
        <View style={styles.nameContainer}>
          <View >
            <Avatar.Image  />
          </View>
          <View style={styles.nameText}>
            <Title >Andrea Joanne</Title>
            <Caption style={styles.captionStyle}>andreajoanne@gmail.com</Caption>
          </View>
        </View>
      <Drawer.Section>
        <DrawerItem
        labelStyle={styles.drawerLabel}
        icon={({ }) =>
          <MaterialIcons name='category' size={20} color='black' />}
        label='Category'
      />
      <View style={{ backgroundColor: '#edf9f9' }}>
        <MaterialIcons name='arrow-forward-ios'
          size={21} color='black'
          style={styles.arrowIcon} 
          onPress={() => {nestedDrawerItemFunction()}}
          />
        </View>
        {NestedDrawerItem == true &&
        <DrawerItem
        onPress={() => {props.navigation.navigate('AddCategory')}}
        style={{marginLeft:'35%',marginTop:-10}}
        labelStyle={{fontSize:15,color:'black',}}
        icon={({ }) =>
          <MaterialIcons name='add' size={25} color='black' />}
        label='Add'
      />
      }
       {NestedDrawerItem == true &&
        <DrawerItem
        onPress={() => {props.navigation.navigate('ListCategory')}}
        style={{marginLeft:'35%',marginTop:-10}}
        labelStyle={{fontSize:17,color:'black'}}
        icon={({ }) =>
          <MaterialIcons name='category' size={20} color='black' />}
        label='List'
      />
}
        <DrawerItem
        labelStyle={styles.drawerLabel}
        icon={({ }) =>
          <Ionicons name='menu' size={20} color='black' />}
        label='Products'
      />
      <View style={{ backgroundColor: '#edf9f9' }}>
        <MaterialIcons name='arrow-forward-ios'
          size={21} color='black'
          style={styles.arrowIcon} 
          onPress={() => {nestedDrawerItemFunction2()}}
          />
        </View>
        {NestedDrawerItem2 == true &&
        <DrawerItem
        onPress={() => {props.navigation.navigate('AddProducts')}}
        style={{marginLeft:'35%',marginTop:-10}}
        labelStyle={{fontSize:15,color:'black',}}
        icon={({ }) =>
          <MaterialIcons name='add' size={25} color='black' />}
        label='Add'
      />
      }
       {NestedDrawerItem2 == true &&
        <DrawerItem
        onPress={() => {props.navigation.navigate('ListProducts')}}
        style={{marginLeft:'35%',marginTop:-10}}
        labelStyle={{fontSize:17,color:'black'}}
        icon={({ }) =>
          <MaterialIcons name='category' size={20} color='black' />}
        label='List'
      />
}
        <DrawerItem
        labelStyle={styles.drawerLabel}
        icon={({ }) =>
          <MaterialIcons name='shopping-bag' size={22} color='black' />}
        label='Order Status'
      />
      <View style={{ backgroundColor: '#edf9f9' }}>
        <MaterialIcons name='arrow-forward-ios'
          size={21} color='black'
          style={styles.arrowIcon} 
          onPress={() => {props.navigation.navigate('Order Status')}}
          />
        </View>
        <DrawerItem
        labelStyle={styles.drawerLabel}
        icon={({ }) =>
          <MaterialCommunityIcons name='sale' size={20} color='black' />}
        label='Our Offers'
      />
      <View style={{ backgroundColor: '#edf9f9' }}>
        <MaterialIcons name='arrow-forward-ios'
          size={21} color='black'
          style={styles.arrowIcon} 
          onPress={() => {props.navigation.navigate('Our Offers')}}
          />
        </View>
        <DrawerItem
        labelStyle={styles.drawerLabel}
        icon={({ }) =>
          <MaterialIcons name='rate-review' size={20} color='black' />}
        label='Reviews'
      />
      <View style={{ backgroundColor: '#edf9f9' }}>
        <MaterialIcons name='arrow-forward-ios'
          size={21} color='black'
          style={styles.arrowIcon} 
          onPress={() => {props.navigation.navigate('Reviews')}}
          />
        </View>
      </Drawer.Section>
      <View style={{padding:5,margin:10,alignSelf:'center'}}>
        <Image source={require('../assets/_k.png')}/>   
        <Image source={require('../assets/ME.png')} style={{left:30}}/>
      </View>
      <View style={{ backgroundColor: '#fafafa', padding: 10, margin: 10, flexDirection: 'row', width: 120,left:140 }}>
            <MaterialCommunityIcons name='logout' size={25} color='#0caf9a' />
            <Text style={{ fontSize: 17, color: 'black', marginLeft: 10 }} onPress={() => {props.navigation.navigate('login')}}>Sign Out</Text>
          </View>
        
     
    </DrawerContentScrollView>
     
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
    nameContainer: {
      margin: 7,
      padding: 7,
      borderBottomWidth: 0.5,
      borderColor: 'grey'
    },
    nameText: {
      marginTop: -60,
      marginLeft: 70,
      marginBottom: 14
    },
    captionStyle: {
      marginTop: -5,
      fontSize: 13
    },
    drawerLabel: {
      fontSize: 18,
      color: 'black',
      fontFamily: 'italic'
    },
    arrowIcon: {
      alignSelf: 'flex-end',
      marginTop: -37,
      marginRight: 20,
      backgroundColor: '#edf9f9',
      borderRadius: 7
    }
  })