import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import Button from '../Button/index';

const CarItem = ({ name, subtitle, subtitleLink, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {subtitle}
          <Text> </Text>
          <Text style={styles.subtitleLink}>{subtitleLink}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button type="primary" content="Custom Order" onPress={() => {}} />
        <Button
          type="secondary"
          content="Existing Inventory"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CarItem;
