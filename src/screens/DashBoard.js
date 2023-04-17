import { StyleSheet, Text, View ,ScrollView,BackHandler} from 'react-native'
import React,{useEffect} from 'react'
import Header from './Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TopContainer from './TopContainer'
import LatestProducts from './LatestProducts'
import auth from '@react-native-firebase/auth'
const DashBoard = ({navigation}) => {
  useEffect(() => {
    const handleBackPress = () => {
      // Check if user is logged in
      const currentUser = auth().currentUser;
      if (currentUser) {
        BackHandler.exitApp();
        return true;
      }
      return false;
    };

    // Register event listener for back button press
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Unregister event listener on unmount
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);
  return (
    <ScrollView style={{flex:1,marginBottom:130}}>
      <Header navigation={navigation}/>
      <TopContainer/>
      <LatestProducts/>
    </ScrollView>
  )
}

export default DashBoard

const styles = StyleSheet.create({})