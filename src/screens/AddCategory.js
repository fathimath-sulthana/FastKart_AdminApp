import { StyleSheet, Text, TextInput, TouchableHighlight, View ,Image} from 'react-native'
import React from 'react'
import Header from './Header'
import { Title } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AddCategory = ({navigation}) => {
  return (
    <View style={{flex:1}}>
     <View style={{flexDirection:'row',margin:10,padding:10, }}>
        <MaterialIcons name='grid-view' size={33} color='#0caf9a' onPress={()=> navigation.pop()}/>
        <Image source={require('../assets/ME.png')} style={{position:'absolute',right:0,top:15}}/>
     </View>
     <Title style={{alignSelf:'center',color:'#0caf9a',fontSize:25}}>Add Category</Title>
     <View style={{backgroundColor:'lightgrey',height:'40%',width:'95%',padding:10,margin:10,justifyContent:'flex-end',alignItems:'center'}}>
       <View style={{}}></View>
      
     </View> 
   
     <TextInput
     placeholder='Category Name'
     style={{borderWidth:1,borderColor:'#0caf9a',padding:10,margin:10,borderRadius:8,width:'90%',alignSelf:'center'}}
     />
    <TouchableHighlight style={{
            height: '6%',
            width: '90%',
            backgroundColor: '#0caf9a',
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius:8,
            justifyContent:'center'
          }}>
      <Text style={{color:'white',alignSelf:'center',fontSize:15}}>Select Image</Text>
     </TouchableHighlight>

     <TouchableHighlight style={{
            height: '6%',
            width: '90%',
            backgroundColor: '#0caf9a',
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius:8,
            justifyContent:'center'
          }}>
      <Text style={{color:'white',alignSelf:'center',fontSize:15}}>Save Category</Text>
     </TouchableHighlight>
    </View>
  )
}

export default AddCategory

const styles = StyleSheet.create({})