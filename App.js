import React from 'react';
import Navigation from './Navigation';
import Register from './screens/User/Register';
import SignInScreen from './screens/User/testLogin';
import Login from './screens/User/Login';
import HomeItems from './screens/CategoryScreen/HomeItem';
import Accessories from './screens/CategoryScreen/Accessories';
import Cart from './screens/TabScreen/Cart';
import Information from './screens/User/InforUser';
import Clothes from './screens/CategoryScreen/Clothes';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from "./redux/store";
const store = configureStore();

export default function App() {
   return (
      <ReduxProvider store={store}>
         <Navigation />
      </ReduxProvider>

   )
}


