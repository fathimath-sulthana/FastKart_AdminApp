import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Header = ({ navigation }) => {
  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', margin: 10, padding: 10, }}>
        <MaterialIcons name='grid-view' size={33} color='#0caf9a' onPress={() => navigation.openDrawer()} />
        <Image source={require('../assets/ME.png')} style={{ position: 'absolute', right: 0, top: 15 }} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})