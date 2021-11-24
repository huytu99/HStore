import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView } from "react-native";
import SearchComponent from "../../components/SearchBar"
import { useSelector, useDispatch } from "react-redux";
import Fontisto from "react-native-vector-icons/Fontisto";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function SearchBar({navigation}) {
    return(
            <View style={styles.container}>
                    <Text style={styles.textSearchBar}>HStore</Text>
                <TouchableOpacity onPress = {() => navigation.navigate("Search")}>
                    <Fontisto name="search" size={20} color={"#000000"} />
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent:'space-between',
        marginRight: 20
    },
    textSearchBar: {
        fontSize: 30, 
        marginLeft: 220,
        fontFamily: "Cochin"



    }
})
