import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { styles } from './styles';
import { API_PRODUCT_LIST } from '../../API/productList';
import ProductItem from '../ProductItem/index';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={API_PRODUCT_LIST}
        keyExtractor={(item) => item.name}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductItem
            name={item.name}
            subtitle={item.subtitle}
            subtitleLink={item.subtitleLink}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default ProductList;
