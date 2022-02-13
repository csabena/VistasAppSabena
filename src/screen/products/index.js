import {
    FlatList,
    SafeAreaView,
    View,
} from 'react-native';
import React, { useEffect } from 'react';
import { filterBreads, selectBread } from '../../store/actions/breads.action';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/product-item/index';
import styles from './styles';

const Products = ({navigation, route}) => {
  
    const dispatch = useDispatch();
    const categoryBreads = useSelector(state => state.breads.filteredBread)
    const category = useSelector(state => state.categories.selected);
    //const breads = BREADS.filter(bread => bread.category === route.params.categoryId);
  
    const handleSelectedProduct = (item) => {
        dispatch(selectBread(item.id));
        navigation.navigate('ProductDetail',
            {
                //productId: item.id,
                name: item.name,
                //product: item
            }
        );
    }
  
    const renderProducts = ({ item }) => {
        return (
            <ProductItem item={item} onSelected={handleSelectedProduct} />
        )
    }
    
    useEffect(() => {
        dispatch(filterBreads(category.id));
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={categoryBreads}
                    renderItem={renderProducts}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default Products;