import { StyleSheet, Text, View } from "react-native";

import CartStackNavigation from './cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import OrdersStackNavigation from "./orders";
import React from 'react';
import ShopStackNavigation from './shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "./styles";

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
                headerShown: false,
            }}>
                <BottomTabs.Screen
                    name='Productos'
                    component={ShopStackNavigation} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='home-outline' size={20} />
                        )          
                    }}
                        
                />
                <BottomTabs.Screen
                    name='Carrito'
                    component={CartStackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name='cart-outline' size={20} />
                        )
                    }} 
                    />
                    <BottomTabs.Screen 
                    name='Órdenes' 
                    component={OrdersStackNavigation}  
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.item}>
                                <Ionicons name='list-outline' size={20} color='black' />
                            </View>
                        )
                    }}
                />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;