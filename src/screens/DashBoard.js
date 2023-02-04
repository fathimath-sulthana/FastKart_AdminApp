import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Header from './Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TopContainer from './TopContainer'
import LatestProducts from './LatestProducts'
const DashBoard = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,marginBottom:130}}>
      <Header navigation={navigation}/>
      <TopContainer/>
      <LatestProducts/>
    </ScrollView>
  )
}

export default DashBoard

const styles = StyleSheet.create({})