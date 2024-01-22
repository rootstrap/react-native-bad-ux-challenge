import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants/styles';

const {white, darkBlue} = COLORS;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: darkBlue,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
