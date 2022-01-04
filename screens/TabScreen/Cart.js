import React from "react";
import { ScrollView, Text, View, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native";
var {width} = Dimensions.get("window")
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartItem from "../CategoryScreen/CartItem";

export default function ViewCart() {
    const {items} = useSelector((state) => state.itemReducer.selectItems);
    const {name, email, phone, address} = useSelector((state) => state.authReducer.dataUser);
    const dispatch = useDispatch();

    const total = items
    .map((item => item.price))
    .reduce((prev, curr) => prev + curr, 0)

    const totalVND =  `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${'VND'}`
            
    const submitItem = async() => {
        for (let i = 0; i < items.length; i++) {
        await fetch("http://192.168.1.187:3000/user/bill", {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                address: address,
                email: email,
                phone: phone,
                title: items[i].title,
                price: items[i].price,
                image: items[i].image,
                quantity: items[i].quantity,
            })  
        })
        .then((res) => res.text())     
        .then(data => {
                let dataBill = JSON.parse(data)
                if (dataBill) {
                    dispatch({
                        type: 'ADD_TO_ORDER',
                        payload: dataBill
                    })
                    Alert.alert('Đặt hàng thành công!!')
                } 
        })

    }
    }

    const checkOutButton = () =>
    
    Alert.alert(
      "Xác nhận mua hàng",
      "Bấm OK để đặt hàng!",
      [
        { text: "OK", onPress: (submitItem)},
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
        
      ]
    );
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
                    <TouchableOpacity style={styles.checkoutBox} onPress={(checkOutButton)}>
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
        backgroundColor:'#a9a9a9',
        
        marginTop: 20,
        marginLeft: 20,
        
    },
    header:{
        backgroundColor:"#4682b4",
        padding: 20,
        borderWidth: 1, 
        alignItems:'center'

    },
    headerText:{
        fontSize: 25, 
        color: 'white', 
    },
    totalText:{
        fontSize: 20,
        fontWeight:'bold',
        color:'red'
    },
    totalBox:{
        borderTopWidth: 1, 
        borderBottomWidth: 1,
        backgroundColor:'white',
        padding: 7,
        marginBottom: 10,
        marginTop: 5
       
        
    },
    checkoutBox:{
        backgroundColor:"#4682b4",
        width:width-40,
        alignItems:'center',
        padding: 10,
        borderRadius:5,
        marginBottom: 10,
        marginLeft: 20
    },
    checkoutText: {
        fontSize: 24,
        fontWeight:'bold',
        color:'white'
    }
})