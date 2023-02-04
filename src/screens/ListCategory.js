import { StyleSheet, Text, TextInput, TouchableHighlight, View ,Image,ScrollView, FlatList} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import shopByCategory from '../constants/shopByCategory'
import { Title } from 'react-native-paper'
import Header from './Header'
const ListCategory = ({navigation}) => {
  const renderList= ((item) =>{
    return(
        <View style={{margin:20}}>
        <View style={{borderWidth:1,alignSelf:'flex-start',padding:10,borderColor:'#0caf9a',margin:5,borderRadius:10}}>
            <Image source={item.image} resizeMode='contain' style={{height:100,width:100,margin:7,padding:7}}/>
            <Text style={{color:'black',margin:10,fontSize:16,alignSelf:'center'}}>{item.name}</Text>
        </View>
        <View>
            
        </View>
        </View>
    )
    })
return (
<View>
<View style={{flexDirection:'row',margin:10,padding:10, }}>
        <MaterialIcons name='grid-view' size={33} color='#0caf9a' onPress={()=> navigation.pop()}/>
        <Image source={require('../assets/ME.png')} style={{position:'absolute',right:0,top:15}}/>
     </View>
    <View >
     <Title style={{alignSelf:'center',fontSize:23}}>Category</Title>
  <FlatList
  numColumns={2}
  data={shopByCategory}
  renderItem={({item}) =>{
    return renderList(item)
}}

  />
  
   
  </View>
   
 
 
</View>
)
}

export default ListCategory

const styles = StyleSheet.create({})