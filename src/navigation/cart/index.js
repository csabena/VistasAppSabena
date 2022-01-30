import { COLORS } from "../../utils/constant/colors";
import Cart from "../../screen/cart";
import Orders from "../../screen/orders";
import { Platform } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ title: 'Carrito' }} />
            <Stack.Screen
                name="Orders"
                component={Orders}
                options={{ title: 'Órdenes' }} />
        </Stack.Navigator>
    )
}

export default CartStackNavigation;