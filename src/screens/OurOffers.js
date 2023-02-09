import {StyleSheet, Text, View, FlatList,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react';
const DATA = [
  {
    text: 'on your first order',
    text2: 'on order above ₹250.00',
    text3: 'Use Code:',
    text4: 'SCD450',

    discount: '50',
    discounts: '%',
    discountsss: 'OFF',
  },
  {
    text: 'on your first order',
    text2: 'on order above ₹250.00',
    text3: 'Use Code:',
    text4: 'SCD450',

    discount: '30',
    discounts: '%',
    discountsss: 'OFF',
  },
  {
    text: 'on your first order',
    text2: 'on order above ₹250.00',
    text3: 'Use Code:',
    text4: 'SCD450',

    discount: '14',
    discounts: '%',
    discountsss: 'OFF',
  },
  {
    text: 'on your first order',
    text2: 'on order above ₹250.00',
    text3: 'Use Code:',
    text4: 'SCD450',

    discount: '25',
    discounts: '%',
    discountsss: 'OFF',
  },
  {
    text: 'on your first order',
    text2: 'on order above ₹250.00',
    text3: 'Use Code:',
    text4: 'SCD450',

    discount: '15',
    discounts: '%',
    discountsss: 'OFF',
  },
  {
    text: 'on your first order',
    text2: 'on order above ₹250.00',
    text3: 'Use Code:',
    text4: 'SCD450',

    discount: '10',
    discounts: '%',
    discountsss: 'OFF',
  },
];
const OurOffers = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor: '#fff',}}>
      <View style={{flexDirection:'row',margin:10,padding:10, }}>
        <MaterialIcons name='arrow-back-ios' size={33} color='#0caf9a' onPress={()=> navigation.pop()}/>
        <Image source={require('../assets/ME.png')} style={{position:'absolute',right:0,top:15}}/>
     </View>
    <View style={{ justifyContent:'center',alignItems:'center'}}>
      
      <FlatList
        vertical={true}
        
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.FlatList}>
            <Text style={styles.text}>{item.discount}</Text>
            <View>
              <Text style={styles.text2}>{item.discounts}</Text>
              <Text style={styles.text2}>{item.discountsss}</Text>
            </View>
            <View>
              <Text style={styles.text3}>{item.text}</Text>
              <Text style={styles.text4}>{item.text2}</Text>
            </View>
            <View style={{position:'absolute',right:10}}>
              <Text style={styles.text4}>{item.text3}</Text>
              <View style={{height:30,width:80,backgroundColor:'#0caf9a',alignItems:'center',justifyContent:'center',borderRadius:15}}>
              <Text style={styles.text5}>{item.text4}</Text></View>
            </View>
          </View>
        )}
      />
    </View>
    </View>
  );
};

export default OurOffers;

const styles = StyleSheet.create({
  FlatList: {
    flexDirection: 'row',
    backgroundColor: '#edf9f9',
    borderRadius: 9,
    marginHorizontal:5,
    marginTop:50,
    height: 80,
    width:340,
    alignItems: 'center'
  },
  text: {
    fontWeight: '500',
    color: '#0caf9a',
    fontSize: 30,
    marginHorizontal:7,
  },
  text2: {
    
    color: '#0caf9a',
    fontSize: 12,
  
  },
  text3: {
    fontWeight: '500',
    color: 'black',
    fontSize: 13,
   marginHorizontal:5
  },
  text4: {
    fontWeight: '500',
    color: 'grey',
    fontSize: 13,
    marginHorizontal:5

  },
  text5: {
   
    color: '#fff',
    fontSize: 14,
    
  },
});

