import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem'

export default function HistoryOrder() {
  const {items} = useSelector((state) => state.orderReducer.dataBill);

  const {name, email, phone, address} = useSelector((state) => state.authReducer.dataUser);
 
  
    return(
      <View style={{flex:1}}>
          <View>
            <Text style={{marginBottom: 10, color:'#00008b', marginLeft:7, fontSize :15,fontWeight:'bold'}}>
              Bạn đã đặt mua những sản phẩm sau:
            </Text>     
          </View> 
          <ScrollView>
                  {
                    items.map((item, index) => (
                      <OrderItem key={index} item={item} />
                  ))}
          </ScrollView>
        <View style={styles.container}>
          <View style={{marginBottom: 30, marginTop: 20, marginHorizontal: 10}}>
            <Text style={{marginBottom: 10, fontSize :15, fontWeight:'bold'  }}>Thông tin người mua hàng</Text>

            <View style={styles.text}>
              <Text>Họ và tên: </Text>
              <Text>{name} </Text>
            </View>
            <View style={styles.text}>
              <Text>Địa chỉ: </Text>
              <Text>{address} </Text>
            </View>
            <View style={styles.text}>
              <Text>Số điện thoại: </Text>
              <Text>{phone} </Text>
            </View>
            <View style={styles.text}>
              <Text>Email: </Text>
              <Text>{email} </Text>
            </View>
          </View>
        </View>  
      </View>
)}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent:'space-between'
  },
  headerText: {
    fontSize: 22,
    marginTop: 6,
    fontWeight:'bold'
  },
  text:{
    flexDirection:'row', 
    justifyContent:'space-between'
  }
})