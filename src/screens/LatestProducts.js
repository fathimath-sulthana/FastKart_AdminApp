

import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import images from '../assets/images';
const DATA = [
  {
    name: 'Assorted Capsicum Combo',
    img: images.img9,
    price: '₹30.00',
    discount: '50% OFF',
    quantity: '200g',
  },
  {
    name: 'Assorted Capsicum Combo',
    img: images.img10,
    price: '₹20.00',
    discount: '68% OFF',
    quantity: '200g',
  },
  {
    name: 'Assorted Capsicum Combo',
    img: images.img11,
    price: '₹37.00',
    discount: '69% OFF',
    quantity: '200g',
  },
  {
    name: 'Assorted Capsicum Combo',
    img: images.img12,
    price: '₹35.00',
    discount: '53% OFF',
    quantity: '200g',
  },
  {
    name: 'Assorted Capsicum Combo',
    img: images.img13,
    price: '₹34.00',
    discount: '58% OFF',
    quantity: '200g',
  },
  {
    name: 'Assorted Capsicum Combo',
    img: images.img14,
    price: '₹32.00',
    discount: '64% OFF',
    quantity: '200g',
  },
];
const LatestProducts = () => {
  return (
    <View >
       <Text style={{fontSize:19,margin:5,padding:5, color:'black'}}>Latest Products</Text>
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <View style={styles.FlatList}>
            <Image
              source={item.img}
              style={{height: 80, width: 90, borderRadius: 9,marginHorizontal:10}}></Image>
            <View style={{flexDirection: 'column',alignSelf:'center',justifyContent:'center'}}>
              <Text
                style={{
                  fontWeight:'500',
                  color: 'black',
                  fontSize: 16,
                  marginHorizontal: 10,
                  top:'40%'
                }}>
                {item.name}
              </Text>
              <View style={{height:'70%',width:'0.3%',backgroundColor:"grey",justifyContent:'center', top:'20%'}}></View>
              <Text
                style={{color: 'grey', fontSize: 12, marginHorizontal: 10, bottom:'25%'}}>
                {item.quantity}
              </Text>
              
              <View style={{flexDirection:'row', bottom:'10%'}}>
            <Text
                style={{color: 'black', fontSize: 14, marginHorizontal: 10,marginVertical:5,fontWeight:'bold'}}>
                {item.price}
              </Text>

              
              <View style={{height:25,width:70,backgroundColor:"#0caf9a",borderRadius:20,alignSelf:'center',justifyContent:'center'}}>
              <Text
                style={{color: '#fff', fontSize: 12, marginHorizontal: 10}}>
                {item.discount}
              </Text></View>

            <View style={{height:30,width:60,borderRadius:10,flexDirection:'row',borderWidth:0.5,alignItems:'center',position:'absolute',right:0}}>
              <Text
                style={{color: 'black', fontSize: 14, marginHorizontal:10}}>
                -
              </Text>
              <Text
                style={{color: "#0caf9a", fontSize: 14,marginHorizontal:1,fontWeight:'bold'}}>
                0
              </Text>
              <Text
                style={{color: 'black', fontSize: 14, marginHorizontal: 10,fontWeight:'bold'}}>
                +
              </Text>
              </View>

            

              
              
              
              </View>
              

              
            
          

          
            </View>

          </View>
        )}
      />
       
    </View>
  );
};

export default LatestProducts;

const styles = StyleSheet.create({
  FlatList: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 9,
    marginHorizontal: 10,
    marginTop: 10,
    height: 100,
    alignItems: 'center',
  },
});
