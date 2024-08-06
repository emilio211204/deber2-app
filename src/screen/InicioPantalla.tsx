
import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const InicioPantalla = ({ navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBi}>Bienvenido</Text>
      <Image source={require('../../assets/images/aplicacion.png')} style={styles.image} />
      <Button title="Calculadora" onPress={() => navigation.navigate('Segunda')} />
    </View>
  );
};

