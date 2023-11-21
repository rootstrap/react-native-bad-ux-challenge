import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import styles from './styles';

import {MANU_GENIA} from '../../constants/screens';

const Dashboard = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's see our bad UX Animations!</Text>
      <Button text="Manu 🧞‍♀️" onPress={() => navigate(MANU_GENIA)} />
    </View>
  );
};

export default Dashboard;
