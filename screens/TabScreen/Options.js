import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from 'react-redux';

export default function Options({ navigation }) {
  const dispatch = useDispatch();

  const logOut = () => dispatch({
      type: 'LOGOUT',
      payload: null
  })
  const removeInfor = (item) => dispatch({
    type: 'REMOVE_INFOR',
    payload:{ ...item}
  })

    return(
       
      <SafeAreaView style={styles.container} >
        <View style={styles.logoContainer}>
          <Image source={require("../logoStore/LogoStore.png")}
          style={{width: '50%', height: '60%'}} 
          />
        </View>
        <View style={{}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Information')}
          >
            <Text style={styles.buttonText}>Thông tin cá nhân</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HistoryOrder')}
          >
            <Text style={styles.buttonText}>Lịch sử mua hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {removeInfor(); logOut(); }}
          >
            <Text style={{color: "red", paddingLeft: 10}}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView >
      

   
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      backgroundColor: "#4682b4",
    },
    button: {
      borderRadius: 4,
      padding: 10, 
      marginTop: 10,
      borderWidth: 1,
      backgroundColor: '#87cefa',
      color: "black",
      marginLeft: 10,
      marginRight: 10

    },
    buttonText: {
      color: "black",
      paddingLeft: 10
    },
    logoContainer: {
      alignItems: "center",
      
    }
  });