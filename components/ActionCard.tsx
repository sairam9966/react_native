import { StyleSheet, Text, View,Linking ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink : string){
   Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.Elevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>whats new in javascript in 21-ES12</Text>
        </View>
        <Image source={{uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'}}
        style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
         <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates quidem saepe iusto dolor provident, magnam asperiores ipsam et perferendis, itaque a eos commodi aliquam tempora, error eum atque consectetur?</Text>
        </View>
        <View style={styles.footerContainer}>
         <TouchableOpacity onPress={()=>openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}>
          <Text style={styles.socialLinks}>Read more</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={()=>openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')}>
          <Text style={styles.socialLinks}>Follow me</Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
  },
  card:{
    width:330,
    height : 360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,
  },
  Elevated:{
    backgroundColor:'#E07C24',
    elevation : 3,
    shadowOffset:{
      height:1,
      width:1
    },
    shadowColor:'#333',
    shadowOpacity:0.4


  },
  headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    color:'#000',
    fontSize:16,
    fontWeight:'600'
  },
  cardImage:{
    height:190
  },
  bodyContainer:{
    padding:10
  },
  footerContainer:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  socialLinks:{
    fontSize:16,
    color:'#000',
    backgroundColor:'#FFF',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6
  }
})