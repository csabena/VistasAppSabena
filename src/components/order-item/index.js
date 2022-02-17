import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from './styles';

//import { COLORS } from '../../utils/constant/colors';


const OrderItem = ({item, onDelete}) => {
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  }
  return (
    <View style={styles.item}>
        <View>
          <Text style={styles.header}>{formatDate(item.date)}</Text>  
        </View> 
        <View style={styles.detail}>
            <Text>Transacción: {item.id}</Text>
            <Text>$ {item.total}</Text>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
              <Ionicons name="trash-outline" size={20} />
            </TouchableOpacity>
        </View>
    </View>
  );
};



export default OrderItem;