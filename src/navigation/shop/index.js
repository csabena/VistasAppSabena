import { COLORS } from "../../utils/constant/colors";
import Categories from "../../screen/categories/index";
import { Platform } from "react-native";
import ProductDetail from "../../screen/product-detail/index";
import Products from "../../screen/products/index";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
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
                name="Categories"
                component={Categories}
                options={{ title: 'Categorías' }} />
            <Stack.Screen
                name="Products"
                component={Products}
                //options={{ title: 'Productos'}}
                options={({ route }) => ({
                    title: route.params.categoryId + ' - ' + route.params.name,
                    headerStyle: { backgroundColor: route.params.color }
                })}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default ShopStackNavigation;