import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import { useDispatch, useSelector } from 'react-redux';

export default function ProductDetail({ navigation, route }) {
  const item = route.params;
  // const {price, title, describe, image} = item;

  const dispatch = useDispatch();
  const selectItem = (item) => dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item, 
    }  
  })

    return(
        <View style={styles.container}>
            <View>
                 <Image source={{uri: item.image}} 
                    style={styles.logoStyle}
                />           
            <Text style={{marginLeft: 200, fontWeight: 'bold', marginTop: 10}}>{item.title}</Text>
            <Text style={{marginLeft: 10}}>Mô tả sản phẩm: {item.describe}</Text>
            <Text style={{marginLeft: 10}}>{item.price} VND</Text>

            <Text style={{marginLeft: 10}}>Kiểu dáng : form rộng rất to, tay lỡ</Text>
            <Text style={{marginLeft: 10}}>Chất liệu: Thun cotton lụa 4 chiều 100% dày mềm mịn, đường may đẹp, chắc chắn, đảm bảo k bông tróc</Text>
            <Text style={{marginLeft: 10}}>Hình in rõ nét </Text>
            <Text style={{marginLeft: 10}}>Sản phẩm có độ co giãn</Text>
            <Button title="Add to cart" onPress={() => selectItem(item)} />
            <Button title="Check out" onPress={() => navigation.navigate('Cart')} />

            </View>
        </View>

)}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white",
    

    
  },
  logoStyle: {
    height:200, 
    width:'70%', 
    marginTop: 90, 
    marginLeft: 50
    
  }
})