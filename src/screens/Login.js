import React from 'react';

import {View, Text, StyleSheet, Image, TextInput, ScrollView,Dimensions, ImageBackground} from 'react-native';
import { Title,Caption } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SignIn = ({navigation}) => {
  return (
   
      <ScrollView style={{flex: 1, }}>
        <ImageBackground 
        style={{ height: Dimensions.get('window').height/3.7,backgroundColor:'#6CBFB4'}}
        source={require('../assets/1d.png')} >
        </ImageBackground>
        <View style={{flex:2.5,borderTopStartRadius:30,borderTopEndRadius:30,bottom:50,backgroundColor:'white'}}>
          <View style={{padding:30}}>
          <Image
          style={styles.image}
          source={require('../assets/ME.png')}></Image>
          <Text style={styles.textp}>
          Online Supermarket for all your daily needs. you are  {"\n"}just One Click
          away from all your needs at your door  {"\n"}step.
        </Text>
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
          <Text style={{alignSelf:'center',fontSize:17,color:"#fff"}} onPress={()=>{navigation.navigate('DrawerNav')}}> Sign in</Text>
        </View>
        <Caption style={styles.text1}  onPress={()=>navigation.navigate('Register')}>If you are new, Create now </Caption>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={styles.text}>
          - - - - - - - - - - - - - 
        </Text>
        <Text style={styles.text2}>
        Or sign in with 
        </Text>
        <Text style={styles.text}>
          - - - - - - - - - - - - - 
        </Text></View>
        <View >
        <View style={{flexDirection:'row',alignSelf:'center',marginRight:70}}>
        <AntDesign name="mobile1" color={"black"} size={25} style={{alignSelf:'center',marginLeft:80}}/>
                <Text style={styles.text}>Continue with Phone</Text>
        </View>
     
         
</View>

<View style={{flexDirection:'row',alignSelf:'center',marginTop:20,marginRight:70}}>
        <AntDesign name="google" color={"black"} size={25} style={{alignSelf:'center',marginLeft:80}}/>
                <Text style={styles.text}>Continue with Google</Text>
        </View>
<Text 
onPress={()=>{navigation.navigate('Drawer')}}
style={styles.texts}>Continue as guest</Text>
         
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