import React, {LegacyRef} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ButtonProps} from './types';
import styles from './styles';

const Button = React.forwardRef(
  ({text, onPress, style}: ButtonProps, ref: LegacyRef<TouchableOpacity>) => (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  ),
);

export default Button;
