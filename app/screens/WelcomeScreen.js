import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import routes from '../navigation/routes';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Login'
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title='Register'
          onPress={() => navigation.navigate(routes.REGISTER)}
          color='secondary'
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
