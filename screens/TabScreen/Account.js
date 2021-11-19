import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { BorderlessButton, TouchableOpacity } from "react-native-gesture-handler";

export default function Account({ navigation }) {
    return(
       
      <SafeAreaView style={styles.container} >
        <View style={styles.logoContainer}>
          <Image source={require("../logoStore/logoHStore.png")}
          style={{width: '50%', height: '50%'}} 
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Information')}
        >
          <Text style={styles.buttonText}>Thông tin cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Button Clicked')}
        >
          <Text style={styles.buttonText}>Lịch sử mua hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{color: "red", paddingLeft: 10}}>Đăng xuất</Text>
        </TouchableOpacity>
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
      paddingTop: 50,
    }
  });