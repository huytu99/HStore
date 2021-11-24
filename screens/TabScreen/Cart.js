import React, {useState, Component} from "react";
import { ScrollView, Text, View, Button, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
var {width} = Dimensions.get("window")
import { useDispatch, useSelector } from 'react-redux';
import CartItem from "../CategoryScreen/CartItem";

export default function ViewCart() {
    const {items, price} = useSelector((state) => state.itemReducer.selectItems)
    const total = items
    .map((item => item.price))
    .reduce((prev, curr) => prev + curr, 0)

    const totalVND = total.toLocaleString('it-IT', {
        style: 'currency',
        currency: "VND",
    });
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>GIỎ HÀNG</Text>
                </View>
                <View style={styles.boxItem}>
                    <View style={{flex:1}}>
                        <ScrollView>
                            {
                                items.map((item, index) => (
                                    <CartItem key={index} item={item} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View>
                    <View style={styles.totalBox}>
                        <Text style={styles.totalText}>
                            Total: {totalVND}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.checkoutBox}>
                        <Text style={styles.checkoutText}>Check Out</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )

}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent:'center',
    },
    boxItem:{
        flex: 1, 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'gray',
        borderRadius:5,
        marginTop: 20,
        marginLeft: 20,
        
    },
    header:{
        backgroundColor:"#4682b4",
        padding: 20,
        borderWidth: 1, 

    },
    headerText:{
        fontSize: 28, 
        color: 'black', 
        fontWeight:'bold',
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
        marginBottom: 10,
        marginTop:10
    },
    checkoutBox:{
        backgroundColor:"#4682b4",
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
    }
})