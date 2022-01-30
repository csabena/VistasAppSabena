import { StyleSheet, Text, View } from "react-native";

import CartStackNavigation from "./cart";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import OrdersStackNavigation from "./orders";
import React from "react";
import ShopStackNavigation from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <BottomTabs.Navigator initialRouteName='Shop' screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}>
                <BottomTabs.Screen 
                    name='Productos' 
                    component={ShopStackNavigation} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.item}>
                                <Ionicons name='home-outline' size={20} color='black' />
                                <Text>Tienda</Text>
                            </View>
                        )
                    }}
                />
                <BottomTabs.Screen 
                    name='Carrito' 
                    component={CartStackNavigation}  
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.item}>
                                <Ionicons name='cart-outline' size={20} color='black' />
                                <Text>Carrito</Text>
                            </View>
                        )
                    }}
                />
                <BottomTabs.Screen 
                    name='Órdenes' 
                    component={OrdersStackNavigation}  
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.item}>
                                <Ionicons name='cart-outline' size={20} color='black' />
                                <Text>Órdenes</Text>
                            </View>
                        )
                    }}
                />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;