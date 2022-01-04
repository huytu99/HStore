import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default function Header({navigation}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <FontAwesome5Icon name="arrow-left" size={25} onPress={() => navigation.goBack()}/>
            </TouchableOpacity>
                <Text style={styles.headerText}>Chi tiết sản phẩm</Text>
            <TouchableOpacity>
                <FontAwesome5Icon name="home" size={25} onPress={() => navigation.popToTop()}/>
            </TouchableOpacity>

        </View>

)}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent:'space-between',
    marginTop: 40,
    flexDirection:'row',
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 18,
    marginTop: 3,
    fontWeight:'bold'
    
  }
})