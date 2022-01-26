import {
    Button,
    SafeAreaView,
    Text,
    View,
} from 'react-native';

import React from "react";
import styles from './styles';

const Categories = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Categorías</Text>
                <Button title='Ir a Productos' onPress={() => navigation.navigate('Products')} />
            </View>
        </SafeAreaView>
    );
};

export default Categories;