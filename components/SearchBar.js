import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, SafeAreaView, FlatList, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useDispatch } from 'react-redux';
import Navigation from "../Navigation";

const SearchBarComponent = ({navigation}) => {
    const [filterData, setFilterData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [search, setSearch] = useState('')

    const fetchPosts = async () => {
        fetch('http://192.168.1.9:3000/admin/product/accessories')
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
            <Text style={styles.itemStyle}>
                {item.id}{'. '}{item.title}
            </Text>
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
        }
    })
export default SearchBarComponent;