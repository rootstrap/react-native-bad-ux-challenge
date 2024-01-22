import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import styles from './styles';

import {
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_GAME,
  MANU_GENIA,
  RAMA_RASA,
  WHATS_YOUR_NAME,
  DELETE_ACCOUNT_CALA,
} from '../../constants/screens';

const CHALLENGE_SOLUTIONS = [
  {
    name: 'Manu 🧞‍♀️',
    screen: MANU_GENIA,
  },
  {
    name: 'WhatsYourName',
    screen: WHATS_YOUR_NAME,
  },
  {
    name: 'Tami Suárez',
    screen: DELETE_ACCOUNT,
  },
  {
    name: 'DeleteAccountGame',
    screen: DELETE_ACCOUNT_GAME,
  },
  {
    name: 'Cala',
    screen: DELETE_ACCOUNT_CALA,
  },
  {
    name: 'Ramarasa',
    screen: RAMA_RASA,
  },
];

const Dashboard = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's see our bad UX Animations!</Text>
      {CHALLENGE_SOLUTIONS.map(({name, screen}) => (
        <Button key={name} text={name} onPress={() => navigate(screen)} />
      ))}
    </View>
  );
};

export default Dashboard;
