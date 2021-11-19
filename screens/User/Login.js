import React, { useState } from "react";
import { StyleSheet, Image, View } from 'react-native';
import LoginForm from "../LoginScreen/LoginForm";
import SignInScreen from "./testLogin";


export default function Login({ navigation }) {
    return(
        <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../logoStore/logoHStore.png")}
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
    paddingTop: 70,
    
  }
})