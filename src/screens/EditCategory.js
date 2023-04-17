import { View, Text,  StyleSheet, TouchableHighlight, Image ,TextInput,Alert} from 'react-native'
import React from 'react'
import { useState } from 'react'
import * as ImagePicker from "react-native-image-picker"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import { TextInput } from 'react-native-paper'
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import shopByCategory from '../constants/shopByCategory'
import { Title, Searchbar } from 'react-native-paper'
const EditCategory = (props,{navigation,route}) => {
  const getDetails =(type) =>{
    if(props.route.params){
      console.log(props.route.params)
      switch(type){
        case "name":
          return props.route.params.item.name 
        case "imageSource":
          return props.route.params.item.imageSource
      }
    }
    return""
  }
  const [name,setName]=useState(getDetails("name"))
      const [imageSource,setImageSource] = useState(getDetails("imageSource"))
      function selectImage() {
        let options = {
          title: 'You can choose one image',
          maxWidth: 256,
          maxHeight: 256,
          noData: true,
          mediaType: 'photo',
          storageOptions: {
            skipBackup: true
          }
        };
  
        ImagePicker.launchImageLibrary(options, response => {
          if (response.didCancel) {
            console.log('User cancelled photo picker');
            Alert.alert('You did not select any image');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = { uri: response.assets[0].uri };
            let uploadUri = Platform.OS === 'ios' ? source.replace('file://', '') : source;
            // ADD THIS
            setImageSource(source.uri,uploadUri);
            console.log(response)
           
          }
        });
      }
  const updateImage =async () =>{
    try{
      const filename = imageSource.substring(imageSource.lastIndexOf('/') + 1);
              const uploadUri = Platform.OS === 'ios' ? imageSource.replace('file://', '') : imageSource;
              const reference = storage().ref("/CategoryList/" + filename);
  
              await reference.putFile(uploadUri);
              const url = await reference.getDownloadURL();
              await rootRef
              database()
              .ref('/CategoryList/')
              .update({
                 imageSource : url,
                 name:name
              }).then(() => {
                  console.log("User updated successfully")
                
              }).catch((e) => {
                  Alert.alert("Error", e.message)
                  
              })
    }catch(e){
      Alert.alert("Error", e.message)
    }
    
  }
  return (
    <View style={{flex:1}}>
    <View style={{flexDirection:'row',margin:10,padding:10, }}>
       <MaterialIcons name='arrow-back-ios' size={33} color='#0caf9a' onPress={()=> navigation.pop()}/>
       <Image source={require('../assets/ME.png')} style={{position:'absolute',right:0,top:15}}/>
    </View>
    <Title style={{alignSelf:'center',color:'#0caf9a',fontSize:25}}>Add Category</Title>
    <View style={{height:'40%',width:'95%',padding:10,margin:10,justifyContent:'flex-end',alignItems:'center'}}>
    <Image
         source={{ uri: imageSource }}
           style={{height:140,width:140,alignSelf:'center'}}
           resizeMode='contain'
         />
     
    </View> 
  
    <TextInput
    placeholder='Category Name'
    value={name}
    style={{borderWidth:1,borderColor:'#0caf9a',padding:10,margin:10,borderRadius:8,width:'90%',alignSelf:'center'}}
    onChangeText={text =>setName(text)}
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
     <Text style={{color:'white',alignSelf:'center',fontSize:15}} onPress={() => selectImage()}>Select Image</Text>
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
     <Text style={{color:'white',alignSelf:'center',fontSize:15}} onPress={() => updateImage()}>Save Category</Text>
    </TouchableHighlight>
   </View>
  )
}

export default EditCategory

const styles = StyleSheet.create({})