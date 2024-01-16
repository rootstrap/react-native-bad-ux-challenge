import {SharedValue} from 'react-native-reanimated';

export interface DelteAccountButtonProps {
  label: string;
  onPress: () => void;
}

export interface WithRandomValueArgs {
  currentValue: SharedValue<number>;
  maxValue: number;
  callback?: (value: number) => void;
}
