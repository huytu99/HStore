import React from "react";
import { StyleSheet, Image, View } from 'react-native';
import LoginForm from "../LoginScreen/LoginForm";


export default function Login({ navigation }) {
    return(
        <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../logoStore/LogoStore.png")}
          style={{width: '50%', height: '50%'}} 
          />
        </View>
        < LoginForm navigation={navigation} />
        </View>

)}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white",
    
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 50,
    
  }
})