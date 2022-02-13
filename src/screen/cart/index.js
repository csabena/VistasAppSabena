import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

import { CART } from "../../utils/data/cart";
import CartItem from '../../components/cart-item';
import React from "react";
import { removeItem } from '../../store/actions/cart.action';
import styles from './styles';

const Cart = () => {
  //const items = CART;  // nuevo se va
  //const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0); // nuevo se va
  const dispatch = useDispatch();
  const items = useSelector(state=> state.cart.items);
  const total = useSelector(state=> state.cart.total);
  

  const handleConfirm = () => {
    console.warn('Confirmar compra');
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
    //console.warn('Eliminar item', id);  // nuevo se va
  }

  const renderItems = (data) => (
    <CartItem item={data.item} onDelete={handleDelete} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={renderItems}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
        />  
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total:</Text>
            <Text style={styles.text}>$ {total}</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};
    
export default connect() (Cart);