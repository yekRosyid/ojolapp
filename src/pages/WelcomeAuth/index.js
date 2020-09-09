import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {Colors} from '../../utils';
import {welcomeAuthPng} from '../../assets';

const WelcomeAuth = ({navigation}) => {
  const handleToGo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wraper}>
      <Image source={welcomeAuthPng} style={styles.ilustration} />
      <Text style={styles.textWelcome}>Selamat Datang di HokJes</Text>
      <ActionButton
        desc="Silahkan masuk jika anda sudah memiliki akun"
        tittle="Masuk"
        onPress={() => handleToGo('Login')}
      />
      <ActionButton
        desc="atau silahkan daftar jika anda belum memiliki akun"
        tittle="Daftar"
        onPress={() => handleToGo('Register')}
      />
    </View>
  );
};

export default WelcomeAuth;

const styles = {
  wraper: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  ilustration: {
    height: 117,
    width: 219,
    marginBottom: 20,
  },
  textWelcome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.default,
    marginBottom: 76,
  },
};
