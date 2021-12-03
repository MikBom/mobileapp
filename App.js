import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Etusivu from './components/etusivu';
import Other from './components/login';
import Linkit from './components/linkit';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import login from './components/login';
import { useEffect } from 'react/cjs/react.development';
import SplashScreen from 'react-native-splash-screen';


Entypo.loadFont();
MaterialCommunityIcons.loadFont();

{/* tehdään navi sivuilla liikkumiseen ja alapalkki */}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

{/* Alapalkkinavin määrittely */}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": "#F35D38",
        "tabBarInactiveTintColor": "#D1D3D2",
        "tabBarInactiveBackgroundColor": "#000000",
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}>
      <Tab.Screen
        name="Etusivu"
        component={Etusivu}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Linkit"
        component={Linkit}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="heart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={login}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="credit-card" size={32} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

{/* Apin perustoiminta */}
const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

{/* Tyylit */}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});



export default App;

  
