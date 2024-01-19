import {COLORS} from '../../../../constants/styles';
import {StyleSheet} from 'react-native';

const CIRCLE_SIZE = 50;

const styles = (isGreen: boolean, isRed: boolean) =>
  StyleSheet.create({
    circle: {
      height: CIRCLE_SIZE,
      width: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
      margin: 10,
      backgroundColor: isGreen
        ? COLORS.green
        : isRed
          ? COLORS.red
          : COLORS.yellow,
    },
  });

export default styles;
