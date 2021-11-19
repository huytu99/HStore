import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../../components/SearchBar";
import Menu from "../../components/Menu";
import { ScrollView } from "react-native-gesture-handler";

import HomeItems from "../CategoryScreen/HomeItem";



export default function HomeComponent({ navigation }) {
    return (
        
        <View  >
            <View style={styles.container}>
                <SearchBar />
            </View>
    
            <View style={styles.menuBackground}>
                <Menu navigation={navigation} />
            </View>
 
            <View>
                <HomeItems />
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
        borderRadius: 10

    },
    item:{
        
    },
    })
