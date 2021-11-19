import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable,TextInput, TouchableOpacity, Button, SafeAreaView  } from 'react-native';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmit = () => {

    }


return(
    <SafeAreaView>
        <TextInput 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{
                color: 'white',
                fontSize: 18,
                width: '100%',
                marginVertical: 10,
            }}
        />
        <TextInput 
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
                color: 'white',
                fontSize: 18,
                width: '100%',
                marginVertical: 10,
            }}
        /> 
        <TextInput 
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{
                color: 'white',
                fontSize: 18,
                width: '100%',
                marginVertical: 10,
        }}
    />

        <Pressable 
            onPress={onSubmit}
            style={{
                backgroundColor: '#e33062',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                borderRadius: 5
            }}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold'
                }}
            >
                    Sign In</Text>
        </Pressable>
         <Pressable 
            onPress={() => alert('Clicked')}
            style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                borderRadius: 5
            }}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold'
                }}
            >
                    Already Have an account? Sign in</Text>
        </Pressable>
    </SafeAreaView>
)}

