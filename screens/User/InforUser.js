import React, { useEffect } from "react";
import { StyleSheet, Text, View, BackHandler, Alert, Button } from 'react-native';
import { useSelector } from "react-redux";


export default function Information({navigation}) {
    const {data, username, name, email, phone, address} = useSelector((state) => state.authReducer.dataUser);

    return(
        <View style={{backgroundColor:"#f5fffa", flex: 1}}>
            <Button title="Back" onPress={()=> navigation.navigate("Options")}/>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Your Information</Text>
            </View>
            {
                 data.map((item, index) => (  
            <View 
                key={index} item={item}
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
 ))}
        </View>
        
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
    marginBottom: 20,
    marginRight: 100,
    backgroundColor:'#fdf5e6'
  },
  textTitle:{
    marginLeft: 5, 
    marginBottom: 3, 
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
    marginTop: 50
  }
})