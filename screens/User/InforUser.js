import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useSelector } from "react-redux";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Information({navigation}) {
    const { username, name, email, phone, address} = useSelector((state) => state.authReducer.dataUser);

    return(
        <SafeAreaView style={{backgroundColor:"#f5fffa", flex: 1 }}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <View style={{marginTop: 40, marginLeft: 10}}>
                    <FontAwesome5Icon name="arrow-left" size={25}/>
                </View>
            </TouchableOpacity>

            <View style={styles.titleView}>
                <Text style={styles.titleText}>Your Information</Text>
            </View>

            <View 
                style={styles.container}>
              
                <Text style={styles.textTitle}>Username</Text>
                <View style={styles.box}>
                    <Text style={styles.textInfor}>{username}</Text>
                </View>

                <Text style={styles.textTitle}>Full Name</Text>
                <View style={styles.box}>
                    <Text style={styles.textInfor}>{name}</Text>
                </View>

                <Text style={styles.textTitle}>Email</Text>
                <View style={styles.box}>
                    <Text style={styles.textInfor}>{email}</Text>
                </View>

                <Text style={styles.textTitle}>Phone Number</Text>
                <View style={styles.box}>
                    <Text style={styles.textInfor}>{phone}</Text>
                </View>

                <Text style={styles.textTitle}s>Address</Text>
                <View style={styles.box}>
                    <Text style={styles.textInfor}>{address}</Text>
                </View>
           
            </View>
        </SafeAreaView>
        
)
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  box:{
    borderWidth:1,
    padding: 10, 
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 100,
    backgroundColor:'#fdf5e6'
  },
  textTitle:{
    marginLeft: 5, 
     
    fontSize: 13
  },
  textInfor:{
      fontSize: 13,
    
  },
  titleView:{
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "#4682b4",

  }
})