import {ViewStyle} from 'react-native';

export interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
}
