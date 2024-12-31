

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,StyleSheet,useColorScheme
} from 'react-native';


// function  AppPro():JSX.Element{
//   const isDarkMode= useColorScheme()==='dark';
//  return ( 
//  <SafeAreaView>
//   <View style={styles.container}>
//     <Text style={isDarkMode?styles.whiteText: styles.darkText }>Hello world1!!!</Text>
//   </View>
// </SafeAreaView>)
// }

function  AppPro():JSX.Element{
  const isDarkMode= useColorScheme()==='dark';
 return ( 
 <SafeAreaView style={styles.safeArea}>
  <View style={styles.container} >
    <Text style={isDarkMode?styles.whiteText:styles.darkText} >Hello world1!!!</Text>
    <Text >Hello world1!!!</Text>
    <Text >Hello world1!!!</Text>
    <Text >Hello world1!!!</Text>
    <Text >Hello world1!!!</Text>

  </View>
</SafeAreaView>)
}

const styles = StyleSheet.create({
  safeArea:{
    flex : 1
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

  whiteText:{
    color:'#FFFFFF'
  },

  darkText:{
    color:'#000000'
  }

})



export default AppPro;
