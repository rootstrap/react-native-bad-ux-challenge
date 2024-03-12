import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  title: {
    fontSize: 18,
    paddingTop: 20,
  },
});

export default styles;
