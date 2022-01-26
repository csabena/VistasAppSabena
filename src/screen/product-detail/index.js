import {
    Button,
    SafeAreaView,
    Text,
    View,
} from 'react-native';

import React from "react";
import styles from './styles';

const ProductDetail = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Detalle de producto</Text>
                <Button title='Home' onPress={() => navigation.navigate('Categories')} />
            </View>
        </SafeAreaView>
    );
};

export default ProductDetail;