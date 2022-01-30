import {
  Text,
  View
} from 'react-native';

import { COLORS } from '../../utils/constant/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from './styles';

const OrderItem = ({item}) => {
  const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  }
  return (
    <View style={styles.item} >
        <View>
          <Text style={styles.header}>{formatDate(item.date)}</Text>  
        </View> 
        <View style={styles.detail}>
          <View>
            <Text>Transacción: {item.id}</Text>
            <Text>$ {item.total}</Text>
          </View>
        </View>
    </View>
  );
};



export default OrderItem;