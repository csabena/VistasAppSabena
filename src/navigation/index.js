import Categories from "../screen/categories/index";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetail from "../screen/product-detail/index";
import Products from "../screen/products/index";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;