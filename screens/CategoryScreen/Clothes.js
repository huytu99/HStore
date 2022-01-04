import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

export default function Clothes  ({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getClothes = async () => {
     try {
      const response = await fetch('http://192.168.1.187:3000/admin/product/clothes');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getClothes();
  }, []);

  const dispatch = useDispatch();
  const selectItem = (item) => dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item, 
        
    }
  })
 

  const renderItem = ({item}) => {
    const currency =  `${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${'VND'}`
    return(  
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
              // onPress={() => selectItem(item)}
              onPress={() => navigation.navigate('ProductDetail', item)}
              style={styles.buttonAdd}>
                <Text style={styles.buttonText}>Thông tin sản phẩm</Text>
          </TouchableOpacity>
        </View>
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
        backgroundColor:"#87cefa"
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
