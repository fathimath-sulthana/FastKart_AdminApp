import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import React from 'react'
import ReviewData from '../constants/ReviewData'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Rating } from 'react-native-elements'
import { Avatar } from 'react-native-paper'
const Reviews = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,padding:5,margin:5}}>
       <View style={{flexDirection:'row',margin:10,padding:10, }}>
        <MaterialIcons name='arrow-back-ios' size={33} color='#0caf9a' onPress={()=> navigation.pop()}/>
        <Image source={require('../assets/ME.png')} style={{position:'absolute',right:0,top:15}}/>
     </View>
      {ReviewData.map((item,index) =>{
        return(
        <View style={{padding:5,margin:5,backgroundColor:'#0caf9a',borderRadius:15}} >
          <View style={{margin:5,padding:5}}>
        <View style={{flexDirection:'row'}}>
          <Avatar.Image source={require('../assets/kU.png')}/>
        <Text style={{fontSize:20,color:'white',padding:20}}>{item.name}</Text>
        </View>
          <View style={{flexDirection:'row',}}>
          <Text style={{fontSize:16,color:'white',right:10,}}>  {item.time}</Text>
          <Rating 
           type='custom'
           ratingCount={item.count}
           imageSize={20}
          ratingBackgroundColor='#0caf9a'
        />
          </View>
          <Text style={{fontSize:16,color:'white'}}>{item.review}</Text>
            </View>
        </View>
        )
      })}
    </ScrollView>
  )
}

export default Reviews

const styles = StyleSheet.create({})