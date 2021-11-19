import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";


export default function SearchBar() {
    return(
        <View style={styles.container}>
            <Fontisto name="search" size={20} color={"#000000"} />
            <TextInput style={styles.textSearchBar}
            placeholder="Bạn tìm gì hôm nay?"
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:  "#f0f8ff",
        flexDirection: "row",
        paddingHorizontal: 10,
        height: 40,
        alignItems: 'center',
        borderRadius: 10, 
        justifyContent: 'flex-start',
     

    },
    textSearchBar: {
        paddingLeft: 10,
        fontSize: 15, 
        borderRadius: 50,
     
    
    }
})