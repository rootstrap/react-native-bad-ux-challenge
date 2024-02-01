import {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

export const CustomText = ({
  style,
  children,
}: {
  style?: TextStyle;
  children: ReactNode;
}) => <Text style={[styles.customText, style]}>{children}</Text>;
