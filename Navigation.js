import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';
import  FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'

import Home from './screens/TabScreen/Home';
import Account from './screens/TabScreen/Account';
import Orders from './screens/TabScreen/Orders';
import Cart from "./screens/TabScreen/Cart";

import ClothesSceen from "./screens/CategoryScreen/Clothes";
import HatScreen from "./screens/CategoryScreen/Hat";
import ShoesScreen from "./screens/CategoryScreen/Shoes";
import AccessoriesScreen from "./screens/CategoryScreen/Accessories";

import Login from "./screens/User/Login";
import Register from "./screens/User/Register";
import Information from "./screens/User/InforUser";


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const AccountStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Trang chủ" component={Home} options={{
                        headerShown: false
                    }} />
        <HomeStack.Screen name="Hat" component={HatScreen} />
        <HomeStack.Screen name="Clothes" component={ClothesSceen} />
        <HomeStack.Screen name="Shoes" component={ShoesScreen} />
        <HomeStack.Screen name="Accessories" component={AccessoriesScreen} />
       

    </HomeStack.Navigator>
)
const AccountStackScreen = () => (
    <AccountStack.Navigator initialRouteName={Account} >
        <AccountStack.Screen name="AccountScreen" component={Account} options={{
            headerShown: false }} />
        <AccountStack.Screen name="Login" component={Login} options={{
            headerShown: false }} />
        <AccountStack.Screen name= "Register" component={Register} options={{
            headerShown: false
        }}/>
        <AccountStack.Screen name= "Information" component={Information} options={{
            headerShown: false
        }}/>
    </AccountStack.Navigator>
)


export default function Navigatorr() {
    return(
        <NavigationContainer>
           <Tab.Navigator 
                screenOptions={{
                    style:{
                        height: 65}
                    }}
            
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused}) => {
                const icons = {
                    Home: 'home',
                    Cart: 'cart-plus',
                    Account: 'user-cog'
                };
                return (
                    <FontAwesome5Icons name={icons[route.name]}
                    size={20}
                    />
                );
            }
        })
    }
           

           > 
                 <Tab.Screen name="Home" children={HomeStackScreen} />
                 <Tab.Screen name="Cart" component={Cart} />
                 <Tab.Screen name="Account" children={AccountStackScreen} />
           </Tab.Navigator>
        </NavigationContainer>
    )
}
