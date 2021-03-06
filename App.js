import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductList from './components/ProductList/index';
import Header from './components/Header/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
