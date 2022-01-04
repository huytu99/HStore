import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, SafeAreaView, FlatList, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function SearchBar ({navigation}) {
    const [filterData, setFilterData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('')

    const fetchPosts = async () => {
        fetch('http://192.168.1.187:3000/admin/product')
        .then((respone) => respone.json())
        .then((responeJson) => {
            setFilterData(responeJson)
            setMasterData(responeJson)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() =>{
        fetchPosts();
        return () => {

        }
    }, [])

    const searchFilter = (text) => {
        if(text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilterData(newData);
            setSearch(text)
                } else {
                    setFilterData(masterData);
                    setSearch(text)
                }
    }

    const ItemView = ({item}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', item)}>
                <View style={styles.items}>
                    <Text style={styles.itemStyle}>
                        {item.id}{'. '}{item.title}
                    </Text>
                    <Image style={styles.image} source={{uri : item.image}} />
                </View>
            </TouchableOpacity>
        )
    }

    const ItemSeparatorView = () => {
        return( 
            <View style={{lengt: 0.5, width: '100%', backgroundColor:"#c8c8c8"}}>

            </View>
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                value ={search}
                placeholder="search Here"
                underlineColorAndroid="transparent"
                onChangeText={(text) => searchFilter(text)}
                />
                <FlatList
                data={filterData}
                keyExtractor= {(item, index) => index.toString()}
                ItemSeparatorComponent = {ItemSeparatorView}
                renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    )
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
        },
        itemStyle:{
            padding: 15
        },
        textInput:{
            height: 50,
            borderWidth:1,
            paddingLeft: 20,
            margin: 5, 
            backgroundColor: 'white'
        },
        image : {
            width: '15%',
            height: "100%"
        },
        items:{
            flexDirection:'row', 
            justifyContent:'space-between',
            marginBottom: 15,
            marginRight: 10
        }
    })
