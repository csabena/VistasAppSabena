import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';

import React from "react";
import styles from './styles';
import { useSelector } from 'react-redux';

const ProductDetail = ({ navigation, route }) => {
    const bread = useSelector(state => state.breads.selected);
    //const { product } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/*
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.detail}>{product.description}</Text>
                <Text style={styles.weight}>{product.weight}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
                */}
                <Text style={styles.name}>{bread.name}</Text>
                <Text style={styles.detail}>{bread.description}</Text>
                <Text style={styles.weight}>{bread.weight}</Text>
                <Text style={styles.price}>$ {bread.price}</Text>
            </View>
        </SafeAreaView>
    );
}

export default ProductDetail;