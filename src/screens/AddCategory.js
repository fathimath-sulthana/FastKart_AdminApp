import { StyleSheet, Text, TextInput, TouchableHighlight, View ,Alert,Image} from 'react-native'
import React,{useState} from 'react'
import Header from './Header'
import { Title } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from "react-native-image-picker"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import firebase from '@react-native-firebase/database';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
const AddCategory = ({navigation}) => {
  const [name,setName] =useState('');
  const [imageSource, setImageSource] = useState(null);
  let rootRef = database().ref();
  function AddCategory() {
    rootRef
    .child('CategoryList/')
    .orderByChild('name')
    .equalTo(name)
    .once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
        let userData = snapshot.val();
        console.log(userData);
        Alert.alert('category already exists');
        return userData;
        
      } else {
      // addItem(name, imageSource)
       UploadImage(imageSource,name)
       Alert.alert('Category Added')
       console.log('category added')
       console.log(name)
      }
  });
  }
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

        // ADD THIS
        setImageSource(source.uri);
        console.log(response)
      }
    });
  }
  async function UploadImage() {
            
    try{
      const filename = imageSource.substring(imageSource.lastIndexOf('/') + 1);
              const uploadUri = Platform.OS === 'ios' ? imageSource.replace('file://', '') : imageSource;
              const reference = storage().ref("/CategoryList/" + filename);
  
              await reference.putFile(uploadUri);
              const url = await reference.getDownloadURL();
              await rootRef
              database()
              .ref('/CategoryList/')
              .push({
                 imageSource : url,
                 name:name
              }).then(() => {
                  console.log("User updated successfully")
                  setName(null)
                  setImageSource(null)
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
      <Text style={{color:'white',alignSelf:'center',fontSize:15}} onPress={AddCategory}>Save Category</Text>
     </TouchableHighlight>
    </View>
  )
}

export default AddCategory

const styles = StyleSheet.create({})