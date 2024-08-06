import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../theme/appTheme';
interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;

}

export const TextInputReutilizable = ({ placeholder, onChangeText, value }: Props) => {
  return (
    <View style={styles.containerSeparacion}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

