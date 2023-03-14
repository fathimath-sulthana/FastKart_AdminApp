import { StyleSheet, Text, View, FlatList, Image ,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Title, Searchbar } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import images from '../assets/images';
import database from '@react-native-firebase/database';
const ListProducts = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keys,setKey]=useState();
  const getData = (cid) => {
    let array = [];
       
      database().ref('/Products').on('value', snapshot => {
          snapshot.forEach((snapshotItem) => {
              var item = snapshotItem.val()
             
                  array.push(item)
          })
          setData(array);
          array = [];
          setKey(Object.keys(data))
          //console.log(keys)
      });
    }
       useEffect(() =>{
        getData()
       })
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', margin: 10, padding: 10, }}>
        <MaterialIcons name='arrow-back-ios' size={33} color='#0caf9a' onPress={() => navigation.pop()} />
        <Image source={require('../assets/ME.png')} style={{ position: 'absolute', right: 0, top: 15 }} />
      </View>
      <Text style={{ fontSize: 19, margin: 5, padding: 5, color: 'black', alignSelf: 'center' }}>Product Details</Text>
      <Searchbar
        placeholder='Search here...'
        style={{ backgroundColor: '#fafafa', margin: 10, borderRadius: 20, borderColor: '#0caf9a' }}
        theme={themes}
        iconColor='#0caf9a'
      />
      
      <FlatList
        vertical={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.FlatList}>
            <Image
              source={item.imageSource}
              style={{ height: 80, width: 90, borderRadius: 9, marginHorizontal: 10 }}></Image>
            <View style={{ flexDirection: 'column', alignSelf: 'center', justifyContent: 'center' }}>
              <Text
                style={{
                  fontWeight: '500',
                  color: 'black',
                  fontSize: 16,
                  marginHorizontal: 10,
                  top: '40%'
                }}>
                {item.name}
              </Text>
              <View style={{ height: '70%', width: '0.3%', backgroundColor: "grey", justifyContent: 'center', top: '20%' }}></View>
              
              <View style={{ flexDirection: 'row', bottom: '10%' }}>
                <Text
                  style={{ color: 'black', fontSize: 14, marginHorizontal: 10, marginVertical: 5, fontWeight: 'bold' }}>
                  {item.price}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};
const themes = {
  color: '#0caf9a'
}
export default ListProducts;

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
