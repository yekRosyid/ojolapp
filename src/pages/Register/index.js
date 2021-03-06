import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../utils';
import {Input, Button} from '../../components/atoms';
import {backIcon, registerIlustrasi} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

const Register = ({navigation}) => {
  const {form} = useSelector((state) => state.RegisterReducer);

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
    dispatch(setForm(input, value));
  };
  const sendData = () => {
    console.log('Data yang akan dikirim', form);
  };

  return (
    <View style={styles.wrapper}>
      <Button type="icon" name="back" onPress={() => navigation.goBack()} />
      <Image source={registerIlustrasi} style={styles.ilustration} />
      <Text style={styles.textAttention}>
        Mohon mengisi data untuk proses register anda
      </Text>
      <View style={styles.space(40)} />
      <Input
        placeholder="Nama Lengkap"
        value={form.fullName}
        onChangeText={(value) => onInputChange(value, 'fullName')}
      />
      <View style={styles.space(33)} />
      <Input
        placeholder="Email"
        value={form.email}
        onChangeText={(value) => onInputChange(value, 'email')}
      />
      <View style={styles.space(33)} />
      <Input
        placeholder="Password"
        value={form.password}
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
  ilustration: {
    width: 120,
    height: 140,
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
