import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',
  },
  route: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
    height: 5,
    backgroundColor: 'gray',
  },
  slider: {
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 20,
    position: 'absolute',
    top: -28,
  },
  value: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
