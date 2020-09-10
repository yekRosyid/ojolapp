import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../../utils';
import ButtonIcon from './ButtonIcon';

const Button = ({tittle, onPress, type, name}) => {
  if (type === 'icon') {
    return <ButtonIcon name={name} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.wraperContainer} onPress={onPress}>
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
