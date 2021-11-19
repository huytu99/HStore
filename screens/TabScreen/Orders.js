import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    FlatList,
    Pressable
     
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign";


export default function Cart({item}) {
    
    const [count, setCount] = useState(0)
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getClothes = async () => {
        try {
        const response = await fetch('http://192.168.1.9:3000/admin/product/clothes');
        const json = await response.json();
        setData(json);
        } catch (error) {
        console.error(error);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        getClothes();
    }, []);
    const getCount = ()=>{
        <View style={{flexDirection: 'row', marginLeft: 20}}>
            <TouchableOpacity  onPress = {() => setCount(count - 1)}>
                <AntDesign name="minuscircle" size={30}  />
            </TouchableOpacity >
            <Text style={{fontSize: 25, fontWeight:'bold'}}> {count || 0} </Text>
            <TouchableOpacity 
                style={styles.touchable}
                onPress = {() => setCount(count + 1)}>
                <AntDesign name="pluscircle" size={30}  />
            </TouchableOpacity >
        </View>
    }
    const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
           <View style={styles.cartcard}>
                <View style={{flexDirection: 'row'}}>
                    <Image 
                        source={{
                            uri: item.image }} 
                        style={styles.image} />
                    <View style={{justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 20, fontWeight: '700'}}>  {item.title}</Text>
                        <Text style={{fontSize: 20, color: 'red'}}>  {item.price}</Text>
                    </View>
                </View>
     
                <View style={{flexDirection: 'collum', justifyContent: 'space-between' }}>
            <View style={{alignItems:'flex-end', marginLeft: 20}}>   
                <TouchableOpacity onPress={()=>alert('da xoa  ' + item.title)}>
                    <Icon  size={24} name={'trash'} />
                </TouchableOpacity>
            </View>   
        </View>           
        </View>
 
    </View>

    );
    
} 
    return (
        <View>
        <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={renderItem}

            />
        )}
        </View>
        <View style={styles.payment}>
        <Text style={{fontSize:20, marginLeft: 20}}>Total: {count} VND</Text>
        <TouchableOpacity
            onPress={()=>alert('')}
            style={{
            backgroundColor:'#33c37d',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:"center",
            borderRadius:5,
            padding: 8
            }}>
                <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
                <View style={{width:10}} />
        </TouchableOpacity>
        
    </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth:1,
        borderRadius: 15, 
        marginBottom: 10
    },
    cartcard:{
        marginBottom: 10, 
        marginTop: 20, 
        borderRadius: 15,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    image: {
        width: 124,
        height: 110,
        borderRadius: 12,
        
    },
    payment:{
        borderWidth: 1
    },
    touchable:{
        width: 50, 
        backgroundColor:"white",
        alignItems: 'center',
        justifyContent:'center',
        borderTopRightRadius:25,
        borderBottomRightRadius:25
    }
});