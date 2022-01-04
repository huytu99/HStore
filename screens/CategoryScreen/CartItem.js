import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
var {width} = Dimensions.get("window")
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from "react-redux";


export default function CartItem({item}) {
    const {title, price, image, quantity} = item;
    const dispatch = useDispatch();

    const selectItem = (item) => dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        ...item,
    }
  })

    const currency =  `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${'VND'}`
   


    return(
    <View style={styles.boxItem}>
            <Image 
                style={styles.imageItem} 
                source={{ uri: image }}
                />
            <View style={{ flex:1, justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginRight: 30}}>
                    <Text style={styles.priceText}>{currency}</Text>
                    <Icon onPress={() => selectItem(item)} name="md-trash" size={30} />
                </View>
            </View>
    </View >
)}

const styles = StyleSheet.create({
    boxItem:{
        width:width-40,
        flexDirection:'row',
        paddingBottom:10,
        backgroundColor:'white',
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10
     
    },
    imageItem:{
        width:width/3,
        height:width/3
    },
    titleText:{
        marginLeft: 10,
        fontSize:20, 
        fontWeight:'bold',
        marginTop: 20,
        borderBottomWidth: 1
    },
    priceText:{
        marginLeft: 10,
        fontSize:20, 
        fontWeight:'bold', 
        color:"#33c37d"
    }
})