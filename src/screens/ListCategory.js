import { StyleSheet, Text, TextInput, TouchableHighlight, View, Image, ScrollView, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import shopByCategory from '../constants/shopByCategory'
import { Title, Searchbar } from 'react-native-paper'
import database from '@react-native-firebase/database';

import Header from './Header'
import AddProducts from './AddProducts'
const ListCategory = (props,{ navigation }) => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [keys,setKey]=useState();
    const getData = (cid) => {
   
      // database().ref('/CategoryList/'+ cid).once('value', function (snapshot) {
      //   const source = snapshot.val()
      //    console.log(snapshot.val())
      //     setData(source)
         
      // });
      // database().ref('/CategoryList').on('value').then((snapshot) => {
      //   snapshot.forEach((childSnap) => {
      //     const source = childSnap.val();
      //     array.push(source)
      //   console.log(childSnap.val());
      //   setData(array)
      
      //  });
      // });
      let array = [];
       
      database().ref('/CategoryList').on('value', snapshot => {
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
  const renderList = ((item) => {
    return (
      <View style={{ margin: 20 }}>
        
        <View style={{ borderWidth: 1, alignSelf: 'flex-start', padding: 10, borderColor: '#0caf9a', margin: 5, borderRadius: 10 }}>
          <Image source={{uri :item.imageSource}} resizeMode='contain' style={{ height: 100, width: 100, margin: 7, padding: 7 }} />
          <Text style={{ color: 'black', margin: 10, fontSize: 16, alignSelf: 'center' }}>{item.name}</Text>
        </View>
        <View>
        </View>
      </View>
    )
  })
  return (
  
    <ScrollView>
      <AddProducts data={data}/>
      <View style={{ flexDirection: 'row', margin: 10, padding: 10, }}>
        <MaterialIcons name='arrow-back-ios' size={33} color='#0caf9a' onPress={() => navigation.pop()} />
        <Image source={require('../assets/ME.png')} style={{ position: 'absolute', right: 0, top: 15 }} />
      </View>
      <Searchbar
        placeholder='Search here...'
        style={{ backgroundColor: '#fafafa', margin: 10, borderRadius: 20, borderColor: '#0caf9a' }}
        theme={themes}
        iconColor='#0caf9a'
      />
      <View >
        <Title style={{ alignSelf: 'center', fontSize: 23 }}>Category</Title>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => {
            return renderList(item)
          }}
        />
      </View>
      <AddProducts data={data}/>
    </ScrollView>
  )
}

export default ListCategory
const themes = {
  color: '#0caf9a'
}
const styles = StyleSheet.create({})