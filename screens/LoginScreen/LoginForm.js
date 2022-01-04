import React, { useState } from "react";
import { View, Text, StyleSheet,TextInput, TouchableOpacity, Button  } from 'react-native';
import { useDispatch } from 'react-redux';

export default function LoginForm({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const submitData = async() => {
        await fetch("http://192.168.1.187:3000/user/login", {
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
            <View style={styles.button}>
                <Button title = 'Log In' onPress={submitData} />
            </View>
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
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    signupContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
          marginTop: 30, 
        
    },
})