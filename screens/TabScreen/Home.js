import React from "react";
import { View, StyleSheet } from 'react-native';

import Header from '../HomeScreen/Header';
import Menu from "../HomeScreen/Menu";
import HomeItems from "../CategoryScreen/HomeItem";



export default function HomeComponent({ navigation }) {
    return (
        
        <View  >
            <View style={styles.container}>
                <Header navigation={navigation} />
            </View>
    
            <View style={styles.menuBackground}>
                <Menu navigation={navigation} />
            </View>
 
            <View style={{marginTop: -15}}>
                <HomeItems navigation={navigation} />
            </View>

        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#4682b4',
        padding: 20,
        paddingBottom: 15,
        paddingEnd: 10,
        paddingLeft: 10,
        paddingTop: 40,
    
    },
    menuBackground: {
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
       

    }
    })
