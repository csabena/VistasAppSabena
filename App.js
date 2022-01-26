/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AppNavigation from './src/navigation/index';
import React from 'react';

const App = () => {

  return (
    <AppNavigation />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
