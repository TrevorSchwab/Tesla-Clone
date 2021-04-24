import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import Button from '../Button/index';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <Button type="primary" content="Custom Order" onPress={() => {}} />
      <Button
        type="secondary"
        content="Existing Inventory"
        onPress={() => {}}
      />
    </View>
  );
};

export default CarItem;
