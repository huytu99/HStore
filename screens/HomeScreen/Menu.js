import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Menu({ navigation }) {
    return(
        <View style={{marginBottom: 10}}>

        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Clothes")}>
                <Image style={styles.button} 
                source={require('../../assets/Clothes.png')}            
                />
            </TouchableOpacity>   
            <TouchableOpacity onPress={() => navigation.navigate("Hat")}>
                <Image style={styles.button} 
                source={require('../../assets/Hat.png')} 
                />
            </TouchableOpacity>   
            <TouchableOpacity onPress={() => navigation.navigate("Shoes")}>
                <Image style={styles.button} 
                source={require('../../assets/Shoes.png')} 
                />
            </TouchableOpacity>   
            <TouchableOpacity onPress={() => navigation.navigate("Accessories")}>
                <Image style={styles.button} 
                source={require('../../assets/Accessories.png')} 
                />
            </TouchableOpacity>      
        </View>

        <View style={styles.menuText}>
            <Text style={{ fontSize: 15, fontWeight: "700" ,marginLeft: 10}}>Quần Áo</Text>
            <Text style={{ fontSize: 15, fontWeight: "700" }}>Mũ</Text>
            <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 20 }}>Giày</Text>
            <Text style={{ fontSize: 15, fontWeight: "700", marginRight: 10 }}>Phụ kiện</Text>
        </View>

        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginRight: 30,
        paddingTop: 10,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'space-between',

    },
    menuText: {
        paddingTop: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    button: {
        width: 60, 
        height: 45,  
        backgroundColor:'#87cefa', 
        borderRadius: 10,
        
    }
})