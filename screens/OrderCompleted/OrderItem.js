import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function OrderItem({item}) {
  const {title, price, image} = item;

    return(
        <View style={styles.container}>
          <View style={{justifyContent:'space-evenly'}}>
            <View style={{ flexDirection:'row', marginLeft: 7}}>
              <Text>Sản phẩm: </Text>
                    <Text style={{color:'red', fontSize: 15, marginLeft: 7}}>{title}</Text>
            </View>         
            <View style={{ flexDirection:'row', marginLeft: 7}}>
              <Text>Giá:</Text>
                    <Text style={{color:'red', fontSize: 15, marginLeft: 10}}>{price}</Text>
            </View> 
          </View>
          <>        
          <Image style={styles.imageItem} 
                source={{ uri: image }}/>
          </>
        </View>

)}

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    flexDirection: 'row',
    justifyContent:'space-between', 
    marginBottom: 10, 
    marginHorizontal: 10, 
    borderRadius: 6,
    backgroundColor:'white'
  },
  headerText: {
    fontSize: 22,
    marginTop: 6,
    fontWeight:'bold'
    
  },
  imageItem:{
    width:'20%',
    height:80,
    borderRadius: 6,
    marginRight: 20,
    marginBottom:2
}
})