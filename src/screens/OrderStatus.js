import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'
import OrderData from '../constants/OrderData'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const OrderStatus = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flexDirection:'row',margin:10,padding:10, }}>
        <MaterialIcons name='arrow-back-ios' size={33} color='#0caf9a' onPress={()=> navigation.pop()}/>
        <Image source={require('../assets/ME.png')} style={{position:'absolute',right:0,top:15}}/>
     </View>
      {OrderData.map((OrderData) => {
        return (
          <View style={{justifyContent:'space-between',padding:10,margin:10,backgroundColor:'#0caf9a',borderRadius:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:3,padding:3}}>
            <Text style={{fontSize:16}}>Order Id </Text>
            <Text style={{fontSize:16}}>Status </Text>
          </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',margin:3,padding:3}}>
           <Text style={{color:'white',fontSize:16}}>{OrderData.orderId}</Text>
            <Text style={{color:'white',fontSize:16}}>{OrderData.status}</Text>
           </View>
          </View>
        );
      })}
    </ScrollView>
  )
}

export default OrderStatus

const styles = StyleSheet.create({})