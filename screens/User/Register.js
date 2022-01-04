import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import SignupForm from "../LoginScreen/SingupForm";


export default function Register({ navigation }) {
    return(
        <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>Create your account</Text>
        </View>
        <SignupForm navigation={navigation} />
        </View>

)}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 40,

  }
})