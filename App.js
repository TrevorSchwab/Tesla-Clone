import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CarItem from './components/CarItem/index';

const API_DATA = [
  {
    name: 'Model S',
    subtitle: 'Starting at $69,420',
    image: require('./assets/images/ModelS.jpeg'),
  },
  {
    name: 'Model 3',
    subtitle: 'Order Online for',
    subtitleLink: 'Touchless Delivery',
    image: require('./assets/images/Model3.jpeg'),
  },
  {
    name: 'Model X',
    subtitle: 'Order Online for',
    subtitleLink: 'Touchless Delivery',
    image: require('./assets/images/ModelX.jpeg'),
  },
  {
    name: 'Model Y',
    subtitle: 'Order Online for',
    subtitleLink: 'Touchless Delivery',
    image: require('./assets/images/ModelY.jpeg'),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={API_DATA}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            subtitle={item.subtitle}
            subtitleLink={item.subtitleLink}
            image={item.image}
          />
        )}
      />
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
