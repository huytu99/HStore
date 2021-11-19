import React, { useState } from "react";
import { StyleSheet, Image, View } from 'react-native';
import LoginForm from "../LoginScreen/LoginForm";
import SignInScreen from "./testLogin";


export default function LoginScreen({ navigation }) {
    return(
        <View style={styles.container}>
        < SignInScreen navigation={navigation} />
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