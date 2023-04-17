import React, { useState, useEffect, useRef,useContext } from 'react';

import { StyleSheet, View,TouchableOpacity,Text } from 'react-native';
const themes = {
  light: {
    color: "#98AFC7F",
    size: 20
  },
  dark: {
    color: "#98AFC7F",
    size: 10
  }
};

const ThemeContext = React.createContext(themes.light);

function Toolbar(props) {
  return (
    <View>
      <ThemedButton />
    </View>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <View style={styles.container}>

    <Text style={{fontSize:theme.size }}>
      I am styled by theme context!
    </Text>
  </View>
   
  );
}

export default function App() {
  
  return (
    <View style={styles.container}>
      
      <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});