import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { Colors } from '../../../utils';

const Button = ({tittle, onPress}) => {
  return (
    <TouchableOpacity style={styles.wraperContainer} onPress={onPress} >
      <Text style={styles.textTittle}>{tittle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  wraperContainer: {
    backgroundColor: Colors.default,
    borderRadius: 25,
    paddingVertical: 12,
  },
  textTittle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
};
