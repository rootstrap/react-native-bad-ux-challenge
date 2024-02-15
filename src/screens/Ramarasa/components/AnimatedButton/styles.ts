import {StyleSheet} from 'react-native';

import {COLORS} from '../../../../constants/styles';

const {red, white} = COLORS;

const styles = StyleSheet.create({
  button: {
    backgroundColor: red,
    padding: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: white,
    fontWeight: '600',
  },
});

export default styles;
