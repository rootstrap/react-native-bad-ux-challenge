import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  distractorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
