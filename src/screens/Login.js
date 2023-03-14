import React ,{useState}from 'react';

import {View, Text, StyleSheet, Image, TextInput, ScrollView,Dimensions, ImageBackground,Alert,AsyncStorage} from 'react-native';
import { Title,Caption } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SignIn = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const Login =() =>{
    auth().signInWithEmailAndPassword(email,password).then((res) =>{
           AsyncStorage.setItem(email,password)
            console.log('user login successfull');
            Alert.alert('Admin login successful !!')
            navigation.navigate('DrawerNav')
    })
    .catch((error) =>{
      console.log("error",error)
      Alert.alert(error.message);
    })
  }
  return (
   
      <ScrollView style={{flex: 1,backgroundColor:'white' }}>
        <ImageBackground 
        style={{ height: Dimensions.get('window').height/3.7,backgroundColor:'#6CBFB4'}}
        source={require('../assets/1d.png')} >
        </ImageBackground>
        <View style={{flex:2.5,borderTopStartRadius:30,borderTopEndRadius:30,bottom:50,backgroundColor:'white'}}>
          <View style={{padding:30}}>
          <Image
          style={styles.image}
          source={require('../assets/ME.png')}></Image>
         
        <Title style={styles.logtext}>Login Account</Title>
        <View
          style={{
            height: hp('8%'),
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: 10,
            borderColor:"'#0caf9a'"
          }}>
          <TextInput
            style={styles.textinput}
            placeholder="Email address"
            placeholderTextColor={'black'}
            value={email}
            keyboardType='email-address'
            onChangeText={setEmail}
          />
        </View>
        <View
          style={{
            height: hp('8%'),
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical:15
          }}>
          <TextInput
            style={styles.textinput}
            placeholder="Password"
            placeholderTextColor={'black'}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            
          />
        </View>
        <Text style={styles.textfgt}>Forgot password? </Text>
        <View
          style={{
            height: hp('6%'),
            width: wp('90%'),
            backgroundColor: '#0caf9a',
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius:8,
            justifyContent:'center'
          }}>
          <Text style={{alignSelf:'center',fontSize:17,color:"#fff"}} onPress={()=>Login()}> Sign in</Text>
        </View>
      
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        
        
        </View>
        <View >
        
     
         
</View>

<View style={{flexDirection:'row',alignSelf:'center',marginTop:20,marginRight:70}}>
       
                
        </View>

         
          </View>
        </View>
         </ScrollView>
   
  );
};
export default SignIn;
const styles = StyleSheet.create({
  textinput: {
    height: hp('8%'),
    width: wp('90%'),
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius:8,
   
    borderColor:"#0caf9a",
    borderWidth:1
   
    
  },
  text: {
    color: '#eee',
 
    alignSelf: 'center',
    color: 'black',
    marginHorizontal:10
  },
  textp: {
    color: 'grey',
    marginVertical:15,
    marginHorizontal: 2,
  },
  texts: {
    color: '#eee',
 marginTop:10,
    alignSelf: 'center',
    color: 'black',
    textDecorationLine:'underline'
    
  },
  logtext: {
  fontWeight:'400'
   
  },
  text2:{
    color: '#0caf9a',
    marginVertical:20,
    alignSelf: 'center',
    marginHorizontal:10 
  },
  textfgt: {
    color: 'black',
    textAlign: 'right',
    right: 20,
    top:'1%'
  },
  text1: {
    color: 'grey',
    fontSize:14, alignSelf:'center'
    
  },
  text3: {
    color: '#eee',
marginVertical:20,
    alignSelf: 'center',
    color: 'black',
    textDecorationLine:"underline"
  },

  button: {
    marginTop: 40,
    width: wp('80%'),
  },
  image: {
    height: 29,
    width: 160,
    marginTop: 40,
    marginHorizontal: 2,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,

    backgroundColor: 'green',
    color: 'black',
  },
});