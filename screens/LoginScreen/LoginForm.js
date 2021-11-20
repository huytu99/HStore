import AsyncStorage from "@react-native-community/async-storage";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable,TextInput, TouchableOpacity, Button  } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackActions } from "@react-navigation/native";

export default function LoginForm({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)
    const dispatch = useDispatch();

    const submitData = async() => {
        await fetch("http://192.168.1.9:3000/user/login", {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                
            })
        })
        .then((res) => res.text())     
        .then(data => {
            console.log(typeof (data))
            if (typeof (data) === 'string' && data.length < 100) {
                alert(data)
            }
            try {
                let dataUser = JSON.parse(data)
                if (dataUser) {
                    dispatch({
                        type: 'LOGIN',
                        payload: dataUser.accessToken, 
                    })

                    console.log(dataUser)

                    dispatch({
                        type: 'ADD_TO_INFOR',
                        payload: dataUser.userLogin, 
                    })
                } 
            } catch (error) {
                console.log(error)
            }
        })
        
    }

    return(
        <View style={styles.wrapper}>
          <View style={styles.inputField}>
            <TextInput 
            placeholderTextColor= '#444'
            placeholder='Username'
            autoCapitalize = 'none'
            keyboardType='email-address'
            textContentType='emailAddress'
            value={username}
            onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputField}>
            <TextInput 
            placeholderTextColor= '#444'
            placeholder='Password'
            autoCapitalize = 'none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password'
            value={password}
            onChangeText={setPassword}
            />
          </View>
          <Button title = 'Log In' style={styles.button} 
          onPress={submitData} />
          <View style={styles.signupContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                  <Text style={{color: '#0096F6'}}> Sign up</Text>
              </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 1,
    },
    inputField: {
        borderRadius: 4,
        padding: 12, 
        backgroundColor: '#FAFAFA',
        marginBottom: 10, 
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20
    },
    button: {
        backgroundColor: '#0096F6',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    signupContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
          marginTop: 30, 
        
    }
})