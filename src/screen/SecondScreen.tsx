import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import {TextInputReutilizable} from '../components/ValorReutilizable';

export const SecondScreen = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const dividir = () => {
    if (numero1 === '0' && numero2 === '0') {
      setResultado('INDETERMINACIÓN');
    } else if (numero2 === '0') {
      setResultado('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResultado((parseFloat(numero1) / parseFloat(numero2)).toString());
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.texParrafo}>
        Coloque los números en los campos de abajo:
    </Text>
      <TextInputReutilizable placeholder="Número 1" onChangeText={(text) => setNumero1(text)} value={numero1} />
      <TextInputReutilizable placeholder="Número 2" onChangeText={(text) => setNumero2(text)} value={numero2} />
      <Text style={styles.texParrafo}>Para dividir de CLICK en el boton de abajo</Text>
      <Button title="Calculando..." onPress={dividir} />
      <Text style={styles.textRe}>Resultado: {resultado}</Text>
    </View>
  );
};

