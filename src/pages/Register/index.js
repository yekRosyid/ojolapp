import React from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../utils';
import {Input} from '../../components/atoms';
import {backIcon, registerIlustrasi} from '../../assets';
const Register = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={backIcon} style={styles.iconBack} />
      <Image source={registerIlustrasi} style={styles.ilustration} />
      <Text style={styles.textAttention}>
        Mohon mengisi data untuk proses register anda
      </Text>
      <View style={styles.space(40)} />
      <Input placeholder="Nama Lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="Email" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
    </View>
  );
};

export default Register;

const styles = {
  wrapper: {padding: 20},
  iconBack: {width: 50, height: 50},
  ilustration: {
    width: 120,
    height: 140,
    backgroundColor: 'purple',
    marginTop: 8,
  },
  textAttention: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.default,
    marginTop: 12,
    maxWidth: 200,
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};
