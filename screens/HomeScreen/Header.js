import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Header({navigation}) {
    return(
            <View style={styles.container}>
                 <ImageBackground  source={require("../logoStore/LogoName.png")} resizeMode="cover" style={styles.image} />
                    {/* <Text style={styles.textSearchBar}>HStore</Text> */}
                <TouchableOpacity onPress = {() => navigation.navigate("Search")}>
                    <Fontisto style={{marginTop: 10}} name="search" size={25} color={"#000000"} />
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent:'space-between',
        marginRight: 20
    },
    textSearchBar: {
        fontSize: 30, 
        marginLeft: 140,
        
    },
    image: {
        flex:1,
        width:"45%",
        height: 50,
        alignItems:'center',
        marginLeft: 20
      },
})
