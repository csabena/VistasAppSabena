import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { COLORS } from '../../utils/constant/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from './styles';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.item} >
        <View>
          <Text style={styles.header}>{item.name}</Text>  
        </View> 
        <View style={styles.detail}>
          <View>
            <Text>Cantidad: {item.quantity}</Text>
            <Text>$ {item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name='trash-outline' size={20} />
          </TouchableOpacity>
        </View>
    </View>
  );
};



export default CartItem;