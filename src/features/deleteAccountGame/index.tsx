import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {DASHBOARD} from './../../constants/screens';
import {Circle} from './components/Circle';

import Button from '../../components/Button';
import styles from './styles';
import {CustomText} from './components/CustomText';

const DeleteAccountGame = () => {
  const {navigate} = useNavigation<any>();
  const [active, setActive] = useState(false);
  const [numberOfTap, setNumberOfTap] = useState(0);

  const count = useSharedValue(0);

  useAnimatedReaction(
    () => count.value,
    currentValue => {
      if (currentValue !== null) {
        runOnJS(setNumberOfTap)(currentValue);
      }
    },
  );

  useEffect(() => {
    if (numberOfTap === 5) {
      Alert.alert('Account deleted', "We'll miss you", [
        {text: 'OK', onPress: () => navigate(DASHBOARD)},
      ]);
    }
  }, [navigate, numberOfTap]);

  return (
    <View style={styles.container}>
      {!active ? (
        <>
          <CustomText style={styles.titleText}>
            To delete your account:
          </CustomText>
          <CustomText>- Reach 5 by pressing circles</CustomText>
          <CustomText>- If you preseed 🔴: -1 </CustomText>
          <CustomText>- If you preseed 🟡: nothing</CustomText>
          <CustomText>- If you preseed 🟢: +1</CustomText>

          <Button
            text="Delete Account"
            style={styles.button}
            onPress={() => setActive(true)}
          />
        </>
      ) : (
        <>
          <CustomText style={styles.titleText}>Total: {numberOfTap}</CustomText>

          {Array.from({length: 10}, (_, index) => (
            <Circle key={index} index={index} count={count} />
          ))}
        </>
      )}
    </View>
  );
};

export default DeleteAccountGame;
