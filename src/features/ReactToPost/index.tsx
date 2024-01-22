import React from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {faker} from '@faker-js/faker';

import DelteAccountButton from '../../components/DeleteAccountButton';
import FloatingDachshund from '../../components/FloatinDachshund';
import styles from './styles';
import AnimatedCard from './AnimatedCard';

const ReactToPost = () => {
  const navigate = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      {[
        {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
        },
        {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
        },
        {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
        },
        {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
        }
      ].map(product => (
        <AnimatedCard name={product.name} description={product.description} />
      ))}
    </ScrollView>
  );
};

export default ReactToPost;
