import React, { useState } from "react";
import { View, Text, StyleSheet,TextInput, TouchableOpacity, Modal,Button  } from 'react-native';

export default function SignupForm({ navigation }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')


    const submitData = () => {
        fetch("http://192.168.1.187:3000/user/register", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                repeatPassword: repeatPassword,
                name: name,
                email: email,
                phone: phone,
                address: address
            })
        }).then(res => res.text())
        .then(data => {
            if (typeof (data) === 'string' && data.length < 100) {
                alert(data)
            }
            console.log(data)
            if (data.length > 100) {
                alert('Success')
                navigation.navigate('Login')
            }
        })}

    
    return(
        <View style={styles.wrapper}>
            <View style={styles.inputField}>
                <TextInput 
                placeholderTextColor= '#444'
                placeholder='Phone number, username or email'
                autoCapitalize = 'none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
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

            <View style={styles.inputField}>
                <TextInput 
                placeholderTextColor= '#444'
                placeholder='Repeat Password'
                autoCapitalize = 'none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                value={repeatPassword}
                onChangeText={setRepeatPassword}
                />
            </View>

            <View style={styles.inputField}>
                <TextInput 
                placeholder='Name'
                placeholderTextColor= '#444'
                autoCapitalize = 'none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                value={name}
                onChangeText={setName}
                />
            </View>

            <View style={styles.inputField}>
                <TextInput 
                placeholderTextColor= '#444'
                placeholder='Email'
                autoCapitalize = 'none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                value={email}
                onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputField}>
                <TextInput 
                placeholderTextColor= '#444'
                placeholder='Phone'
                autoCapitalize = 'none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}     
                value={phone}       
                onChangeText={setPhone}
                />

            </View>

            <View style={styles.inputField}>
                <TextInput 
                placeholderTextColor= '#444'
                placeholder='Address'
                autoCapitalize = 'none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                value={address}
                onChangeText={setAddress}
                />
            </View >

            <View style={styles.button}>
                <Button title = "Sign Up" onPress={submitData} />
            </View>
            <View style={styles.signupContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{color: '#0096F6'}}> Log in</Text>
                </TouchableOpacity>  
            </View>
        </View>
    )
    }

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
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
        marginTop: 10
    },
    signupContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,       
    }
})

