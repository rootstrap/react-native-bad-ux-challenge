import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import AnimatedButton from './components/AnimatedButton';

import styles from './styles';

const RamarasaScreen: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>
        Do you really want to delete your account?
      </Text>
      <View style={styles.container}>
        <AnimatedButton />
      </View>
    </SafeAreaView>
  );
};

export default RamarasaScreen;
