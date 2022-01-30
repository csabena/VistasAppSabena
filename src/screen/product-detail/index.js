import {
    Button,
    SafeAreaView,
    Text,
    View,
} from 'react-native';

import React from "react";
import styles from './styles';

const ProductDetail = ({ navigation, route }) => {
    const { product } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.detail}>{product.description}</Text>
                <Text style={styles.weight}>{product.weight}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
            </View>
        </SafeAreaView>
    );
}

export default ProductDetail;