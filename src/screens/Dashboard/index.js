import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';
import styles from './styles';

import {HOW_OLD_ARE_YOU} from '../../constants/screens';

const Dashboard = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's see our bad UX Animations!</Text>
      <Button
        text="How old are you?"
        onPress={() => navigate(HOW_OLD_ARE_YOU)}
      />
    </View>
  );
};

export default Dashboard;
