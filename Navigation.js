import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';
import  FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'

import Home from './screens/TabScreen/Home';
import Account from './screens/TabScreen/Account';
import Cart from "./screens/TabScreen/Cart";

import ClothesSceen from "./screens/CategoryScreen/Clothes";
import HatScreen from "./screens/CategoryScreen/Hat";
import ShoesScreen from "./screens/CategoryScreen/Shoes";
import AccessoriesScreen from "./screens/CategoryScreen/Accessories";

import ProductDetail from "./screens/ProductDetails/Detail";
import ProductDetail1 from "./screens/ProductDetails/Detail1";
import SearchBarComponent from "./components/SearchBar";
import Login from "./screens/User/Login"
import SignupForm from "./screens/LoginScreen/SingupForm";
import Information from "./screens/User/InforUser";

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "./redux/store";
const store = configureStore();

import { useSelector } from "react-redux";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false}} >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name= "Register" component={SignupForm}/>
    </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabStack} 
            options={{
                headerShown: false}} />
        <Stack.Screen name="Search" component={SearchBarComponent} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="ProductDetail1" component={ProductDetail1} />
        <Stack.Screen name="Hat" component={HatScreen} />
        <Stack.Screen name="Clothes" component={ClothesSceen} />
        <Stack.Screen name="Shoes" component={ShoesScreen} />
        <Stack.Screen name="Accessories" component={AccessoriesScreen} />
        <Stack.Screen name="Information" component={Information} 
            options={{
                headerShown: false}} />
    </Stack.Navigator>
    )
}
const TabStack = () => {
    return(
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
                    Options: 'user-cog'
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
                 <Tab.Screen name="Home" children={Home} />
                 <Tab.Screen name="Cart" component={Cart} />
                 <Tab.Screen name="Options" children={Account} />

           </Tab.Navigator>
    )
}

const RootNavigation = () => {
    const accessToken = useSelector((state) => state.loginReducer.accessToken);
    return (
        <NavigationContainer>
            {
                accessToken === null ? 
                <AuthStack /> : <HomeStack />
            }
         </NavigationContainer>

    )
}

export default function Navigation() {
    return(
        <ReduxProvider store={store}>
                <RootNavigation />
        </ReduxProvider>

    )
}
