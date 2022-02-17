import {
    Button,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from "react";
import { addItem } from '../../store/actions/cart.action';
import styles from './styles';

const ProductDetail = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const bread = useSelector(state => state.breads.selected);

    const handleAddItemCart = () => dispatch(addItem(bread));
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
                <Button title='Agregar al carrito' onPress={()=> handleAddItemCart()} />
            </View>
        </SafeAreaView>
    );
}

export default ProductDetail;