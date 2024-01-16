import React from 'react';
import {Alert, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DelteAccountButton from '../../components/DeleteAccountButton';
import FloatingDachshund from '../../components/FloatinDachshund';
import styles from './styles';

const ANSWERS = [
  {id: 1, label: 'Nah'},
  {id: 2, label: 'Oops'},
  {id: 3, label: 'Meh'},
  {id: 4, label: 'Noooo'},
  {
    id: 5,
    label: 'Yes',
    deleteAccount: true,
  },
  {id: 6, label: 'Never'},
  {id: 7, label: 'Seriously?'},
];

const DelteAccount = () => {
  const navigate = useNavigation<any>();

  const onPress = (deleteAccount?: boolean) => {
    return deleteAccount
      ? Alert.alert(
          'Second Thoughts?',
          'Are you absolutely sure?\nConfirm one more time.',
          [{text: 'Reconsider'}, {text: 'Reconfirm', onPress: navigate.pop}],
        )
      : Alert.alert("Glad You're Staying", 'Stick around for more fun!', [
          {text: 'Yay!', onPress: navigate.pop},
        ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Are you sure you want to delete your account?
      </Text>
      {ANSWERS.map(({id, label, deleteAccount}) => (
        <DelteAccountButton
          key={id}
          label={label}
          onPress={() => onPress(deleteAccount)}
        />
      ))}
      <View style={styles.distractorContainer}>
        <FloatingDachshund />
        <FloatingDachshund />
        <FloatingDachshund />
      </View>
    </View>
  );
};

export default DelteAccount;
