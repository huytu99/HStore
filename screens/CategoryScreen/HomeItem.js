import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeItems({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getHomeItems = async () => {
     try {
      const response = await fetch('http://192.168.1.9:3000/admin/product/accessories');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHomeItems();
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
              onPress={() => navigation.navigate('ProductDetail1', item)}
              style={styles.buttonAdd}>
              <Text style={styles.buttonText}>Thông tin sản phẩm</Text>
        </TouchableOpacity>
        </View>
    </TouchableOpacity >


    )}
  return (
    <View style={{ padding: 24 }}>
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
