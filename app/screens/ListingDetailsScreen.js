import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { ListItem } from '../components/lists';
import Text from '../components/Text';
import colors from '../config/colors';

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>£{listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/jus.jpg')}
            title='Jus Tin'
            subtitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});
