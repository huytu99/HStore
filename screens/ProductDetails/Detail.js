import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from './Header';

export default function ProductDetail({ navigation, route }) {
  const item = route.params;

  const dispatch = useDispatch();
  const selectItem = (item) => dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item, 
    }  
    
  })


  const confirmButton = () =>
    Alert.alert(
      "Xác nhận",
      "Bạn muốn chọn sản phẩm này chứ?",
      [
        { text: "OK", onPress: () => selectItem(item) },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),

          style: "cancel"
        }
        
      ]
    );

  const currency =  `${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${'VND'}`

    return(
        <View style={styles.container}>
          <Header navigation={navigation}/>
          <View>
            <View style={styles.imageStyle}>
                 <Image source={{uri: item.image}} style={{height:294}}/>    
            </View>
            <View>       
              <View style={{flexDirection:'row',marginLeft: 10, marginTop: 10, justifyContent:'space-between',marginRight: 30, marginBottom: 10 }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.title}</Text>
                <Text style={{color: 'red', fontSize: 17, fontWeight: 'bold'}}>{currency}</Text>
              </View>
              <Text style={{marginLeft: 10, marginRight: 10, fontSize: 16,fontWeight: 'bold'}}>Mô tả sản phẩm: </Text>
              <Text style={{marginLeft: 10, marginRight: 10, fontSize: 16}}>👉  {item.describe}</Text>
            </View>
          </View>
          <View >
            <View style={{marginBottom: 10, paddingHorizontal: 40}}>
              <Button  title="Thêm vào giỏ hàng" onPress={confirmButton} />
            </View>
            <View style={{marginBottom: 10, paddingHorizontal: 40}}>
              <Button title="Check out" onPress={() => navigation.navigate('Cart')} />
            </View>
          </View>  
        </View>

)}

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: "white",
      justifyContent:'space-between'
    },
    imageStyle: {
      height: 300, 
      width:'75%', 
      marginLeft: 50,
      borderWidth: 1
      
    },
      buttonAdd:{
        padding: 10,
        backgroundColor: "#4682b4",
        alignItems:'center',
        color: 'black'
      },
      buttonText:{
        color: 'white',
        fontSize: 15, 
      }
  })