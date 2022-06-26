import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./pages/Home";
import New from "./pages/New";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

import ButtonNew from "./components/buttonNew";

import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: false,
                tabBarActiveTintColor: '#ff5722',
                tabBarInactiveTintColor: '#ffc9b8',
                //tabBarShowLabel: false,

                tabBarStyle: {
                    backgroundColor: '#2b262c',
                    //borderTopStartRadius: 20,
                    //borderTopEndRadius: 20,
                    paddingBottom: 5,
                    paddingTop: 5,
                    position: 'absolute',
                    bottom: 10, // eleva a tab
                    left: 10,
                    right: 10,
                    elevation: 0,
                    borderRadius: 15,
                    height: 80,


                }
            }}
        >

            <Tab.Screen
                name='Inicio'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size} />
                    }
                }}
            />


            <Tab.Screen
                name="Notificação"
                component={Notification}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="notifications" color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name="Novo"
                component={New}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size, color }) => (
                        <ButtonNew size={size} color={color} focused={focused} />
                    )
                }}
            />


            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="person" color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name="pesquisar"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <EvilIcons name="search" color={color} size={size} />
                    }
                }}
            />

        </Tab.Navigator>
    );
}