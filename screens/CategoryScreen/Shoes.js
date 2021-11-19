import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Shoes () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getShoes = async () => {
     try {
      const response = await fetch('http://192.168.1.9:3000/admin/product/shoes');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getShoes();
  }, []);

  const dispatch = useDispatch();

  const selectItem = (item) => dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item, 
    }
  })

  const renderItem = ({item}) => {
    return(  
    <TouchableOpacity >
      <View style={styles.container}>
          <Image 
            source={{
                uri: item.image }}
            style={{ width: "100%", height: 500}} />    

        <View style={styles.infoText}>
            <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{color: 'red', fontWeight: 'bold'}}>{item.price} VND</Text>
        </View>
        <TouchableOpacity 
            onPress={() => selectItem(item)}
            style={styles.buttonAdd}>
              <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
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
