import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Dimensions, Button } from "react-native";
var {width} = Dimensions.get("window")
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";


export default function CartItem({item}) {
    const {title, price, image, describe} = item;
    const [count, setCount] = useState(1)
    const dispatch = useDispatch();

    const selectItem = (item) => dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        ...item,
    }
  })

    return(
    <View style={styles.boxItem}>
            <Image 
                style={styles.imageItem} 
                source={image}
                />
            <View style={{ flex:1, justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View>
                    <Text style={styles.describeText}>Mô tả: {describe}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginRight: 30}}>
                    <Text style={styles.priceText}>{price} VND</Text>
                    <Icon onPress={() => selectItem(item)} name="md-trash" size={30} />
                </View>
            </View>
    </View >
)}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'gray'
    },
    boxItem:{
        width:width-20,
        flexDirection:'row',
        borderBottomWidth:2,
        borderColor:"#cccccc",
        paddingBottom:10,
        backgroundColor:'white',
        borderRadius: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30
     
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
    },
    totalText:{
        fontSize: 20,
        fontWeight:'bold',
        color:'red'
    },
    totalBox:{
        borderWidth: 1, 
        backgroundColor:'white',
        padding: 7,
        marginBottom: 20
    },
    checkoutBox:{
        backgroundColor:"#33c37d",
        width:width-40,
        alignItems:'center',
        padding: 10,
        borderRadius:5,
        marginBottom: 10
    },
    checkoutText: {
        fontSize: 24,
        fontWeight:'bold',
        color:'white'
    },
    describeText:{
        marginLeft: 10,
        color: '#191970',
        fontSize: 16,
        marginRight: 120
    }
})