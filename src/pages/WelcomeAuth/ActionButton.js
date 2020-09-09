import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({desc, tittle, onPress}) => {
  return (
    <View style={styles.wraper}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button tittle={tittle} onPress={onPress} />
    </View>
  );
};

export default ActionButton;

const styles = {
  wraper: {marginBottom: 43, maxWidth: 225},
  text: {
    desc: {
      fontSize: 11,
      color: Colors.text.default,
      textAlign: 'center',
      marginBottom: 6,
    },
  },
};
