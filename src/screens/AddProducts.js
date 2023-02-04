import { StyleSheet, Text, TextInput, View ,Image,TouchableHighlight} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Title } from 'react-native-paper'
import React from 'react'

const AddProducts = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row',margin:10,padding:10, }}>
        <MaterialIcons name='grid-view' size={33} color='#0caf9a' onPress={()=> navigation.pop()}/>
        <Image source={require('../assets/ME.png')} style={{position:'absolute',right:0,top:15}}/>
     </View>
     <Title style={{alignSelf:'center',color:'#0caf9a',fontSize:25}}>Add Product Details</Title>
     <View style={{backgroundColor:'lightgrey',height:'20%',width:'55%',padding:10,margin:10,alignSelf:'center',borderRadius:20}}>
       <View style={{}}></View>
      
     </View> 
      <View>
        <TextInput
        placeholder='Product Name'
        style={styles.inputContainer}
        />
        <TextInput
        placeholder='Qunatity'
        style={styles.inputContainer}
        />
        <TextInput
        placeholder='Rate'
        style={styles.inputContainer}
        />
      </View>
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

export default AddProducts

const styles = StyleSheet.create({
  inputContainer:{
    borderWidth:1,
    borderColor:'#0caf9a',
    padding:10,
    margin:10,
    borderRadius:8,
    width:'90%',
    alignSelf:'center'
  }
})