import React from 'react';
import {View, Text, Image} from 'react-native';
import {backIcon} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'back' && (
        <Image source={backIcon} style={{width: 50, height: 50}} />
      )}
    </TouchableOpacity>
  );
};

export default ButtonIcon;
