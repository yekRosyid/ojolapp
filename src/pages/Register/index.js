import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../utils';
import {Input, Button} from '../../components/atoms';
import {backIcon, registerIlustrasi} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';

const Register = () => {
  const RegisterReducer = useSelector((state) => state.RegisterReducer);

  //menggnakan redux
  const dispatch = useDispatch();

  // menggunakan local state
  // const [form, setform] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  const onInputChange = (value, input) => {
    // setform({
    //   ...form,
    //   [input]: value,
    // });
    dispatch({type: 'SET_FORM', inputType: input, inputValue: value});
  };
  const sendData = () => {
    console.log('Data yang akan dikirim', RegisterReducer.form);
  };

  return (
    <View style={styles.wrapper}>
      <Image source={backIcon} style={styles.iconBack} />
      <Image source={registerIlustrasi} style={styles.ilustration} />
      <Text style={styles.textAttention}>
        Mohon mengisi data untuk proses register anda {RegisterReducer.tittle}
      </Text>
      <View style={styles.space(40)} />
      <Input
        placeholder="Nama Lengkap"
        value={RegisterReducer.form.fullName}
        onChangeText={(value) => onInputChange(value, 'fullName')}
      />
      <View style={styles.space(33)} />
      <Input
        placeholder="Email"
        value={RegisterReducer.form.email}
        onChangeText={(value) => onInputChange(value, 'email')}
      />
      <View style={styles.space(33)} />
      <Input
        placeholder="Password"
        value={RegisterReducer.form.password}
        onChangeText={(value) => onInputChange(value, 'password')}
        secureTextEntry={true}
      />
      <View style={styles.space(33)} />
      <Button tittle="Daftar" onPress={sendData} />
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
