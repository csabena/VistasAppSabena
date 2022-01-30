import { COLORS } from "../../utils/constant/colors";
import Orders from "../../screen/orders";
import { Platform } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const OrdersStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
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
                name="Orders"
                component={Orders}
                options={{ title: 'Órdenes' }} />
        </Stack.Navigator>
    )
}

export default OrdersStackNavigation;