import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';
import  FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'

import Home from './screens/TabScreen/Home';
import Options from './screens/TabScreen/Options';
import Cart from "./screens/TabScreen/Cart";

import ClothesSceen from "./screens/CategoryScreen/Clothes";
import HatScreen from "./screens/CategoryScreen/Hat";
import ShoesScreen from "./screens/CategoryScreen/Shoes";
import AccessoriesScreen from "./screens/CategoryScreen/Accessories";

import ProductDetail from "./screens/ProductDetails/Detail";
import HistoryOrder from "./screens/OrderCompleted/historyOrder";
import SearchBar from "./screens/HomeScreen/SearchBar";
import Login from "./screens/User/Login"
import Register from "./screens/User/Register";
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
        <Stack.Screen name= "Register" component={Register}/>
    </Stack.Navigator>
    )
}

const HomeStack = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabStack} 
            options={{
                headerShown: false}} />
        <Stack.Screen name="Search" component={SearchBar} />
        <Stack.Screen name="HistoryOrder" component={HistoryOrder} options={{ title: 'Lịch sử mua hàng' }}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
                headerShown: false}}/>
        <Stack.Screen name="Hat" component={HatScreen} options={{ title: 'Mũ nón' }}/>
        <Stack.Screen name="Clothes" component={ClothesSceen} options={{ title: 'Quần áo' }}/>
        <Stack.Screen name="Shoes" component={ShoesScreen} options={{ title: 'Giày dép' }}/>
        <Stack.Screen name="Accessories" component={AccessoriesScreen} options={{ title: 'Phụ kiện' }}/>
        <Stack.Screen name="Information" component={Information} 
            options={{
                headerShown: false}} />
    </Stack.Navigator>
    )
}
const TabStack = () => {
    const {items} = useSelector((state) => state.itemReducer.selectItems)
    const count = items
    .map((item => item.quantity))
    .reduce((prev, curr) => prev + curr, 0)

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
                 <Tab.Screen name="Home" component={Home} />
                 <Tab.Screen name="Cart" component={Cart} options={{tabBarBadge: count}}/>
                 <Tab.Screen name="Options" component={Options} />

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
