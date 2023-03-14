import { StyleSheet, Text,FlatList, TextInput, View ,Image,TouchableHighlight,Alert} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Title } from 'react-native-paper'
import React,{useContext, useState,useEffect} from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import * as ImagePicker from "react-native-image-picker"

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const AddProducts = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keys,setKey]=useState();
  const getData = (cid) => {
    let array = [];
       
      database().ref('/CategoryList').on('value', snapshot => {
          snapshot.forEach((snapshotItem) => {
              var item = snapshotItem.val()
             
                  array.push(item)
                  
          })
          setData(array);
          array = [];
          setKey(Object.keys(data))
          console.log(data)
          //console.log(keys)
      });
    }
       useEffect(() =>{
        getData()
       })
 const Data = ['Oils,Refined & Ghee','Rice, Flour & Grains','Food & Curry powder','Fresh fruits & vegetables','Drinks & Beverages','Instant Mixes','Dals & Pulses']
 
  const[name,setName]=useState('')
  const[price,setPrice]=useState('')
  const[category,setCategory]=useState('')
  const [imageSource, setImageSource] = useState(null);
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  let rootRef = database().ref();
  function AddProducts() {
    rootRef
    .child('Products/')
    .orderByChild('name','category','price')
    .equalTo(name,category,price)
    .once('value')
    .then(snapshot => {
      if (snapshot.exists()) {
        let userData = snapshot.val(name,category,price);
        console.log(userData);
        Alert.alert('product already exists');
        return userData;
      } else {
      // addItem(name, imageSource)
       UploadImage(imageSource,name,category,price)
       Alert.alert('Product added')
       console.log('Product added')
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
        let uploadUri = Platform.OS === 'ios' ? source.replace('file://', '') : source;
        // ADD THIS
        setImageSource(source.uri,uploadUri);
        console.log(response)
       
      }
    });
  }
  async function UploadImage() {
            
    try{
      const filename = imageSource.substring(imageSource.lastIndexOf('/') + 1);
              const uploadUri = Platform.OS === 'ios' ? imageSource.replace('file://', '') : imageSource;
              const reference = storage().ref("/Products/" + filename);
  
              await reference.putFile(uploadUri);
              const url = await reference.getDownloadURL();
              rootRef
              database()
              .ref('/Products/')
              .push({
                 imageSource : url,
                 name:name,
                 price:price,
                 category:category
               

              }).then(() => {
                  console.log("product added successfully")
                  
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
     <Title style={{alignSelf:'center',color:'#0caf9a',fontSize:25}}>Add Product Details</Title>
     <View style={{height:'20%',width:'55%',padding:10,margin:10,alignSelf:'center',borderRadius:20}}>
           <Image
            source={{ uri: imageSource }}
            style={{height:140,width:140,alignSelf:'center'}}
            resizeMode='contain'
             />
      
     </View> 
      <View>
        <TextInput
        placeholder='Product Name'
        style={styles.inputContainer}
        onChangeText={(text) => setName(text)}
        />
        <TextInput
        placeholder='Price'
        style={styles.inputContainer}
        onChangeText={(price) => setPrice(price)}
        />
        
          <SelectDropdown
          searchPlaceHolderColor='Select Category'
          data={Data}
          onSelect={(text) => setCategory(text)}
          //dropdownStyle={styles.inputContainer}
          buttonStyle={styles.inputContainer}
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
      <Text style={{color:'white',alignSelf:'center',fontSize:15}} onPress={AddProducts}>Save Product</Text>
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