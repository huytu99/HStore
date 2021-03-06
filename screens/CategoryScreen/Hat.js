import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Hat  ({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getHat = async () => {
     try {
      const response = await fetch('http://192.168.1.187:3000/admin/product/hat');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHat();
  }, []);

  const dispatch = useDispatch();

  const selectItem = (item) => dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item, 
          }
  })

  const cartItems = useSelector(
      (state) => state.itemReducer.selectItems.items
  );
  const isItemInCart = (data, cartItems) => 
      Boolean(cartItems.find((item) => item.title === data.title))
  
  const renderItem = ({item}) => {
    const currency =  `${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${'VND'}`
    return(  
    <TouchableOpacity >
      <View style={styles.container}>
          <Image 
            source={{
                uri: item.image }}
            style={{ width: "100%", height: 350}} />    

        <View style={styles.infoText}>
            <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{color: 'red', fontWeight: 'bold'}}>{currency}</Text>
        </View>
        <TouchableOpacity 
              onPress={() => navigation.navigate('ProductDetail', item)}
              style={styles.buttonAdd}>
              <Text style={styles.buttonText}>Thông tin sản phẩm</Text>
        </TouchableOpacity>
        </View>
    </TouchableOpacity >


    )}
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
    },
    infoText: {
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 2,
        borderTopWidth: 1,
        padding: 10,
        backgroundColor: "white"
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
