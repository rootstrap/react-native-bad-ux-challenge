import React from 'react';
import {Pressable, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../../constants/common';

import {getRandomNumber} from '../../../../utils';

import styles from './styles';

const AnimatedButton = () => {
  const rotation = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const navigation = useNavigation<any>();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: `${rotation.value}deg`},
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  const startTranslation = (randomX: number, randomY: number) => {
    'worklet';
    translateX.value = withRepeat(
      withSequence(
        withTiming(randomX, {duration: 2000}),
        withTiming(-randomX, {duration: 2000}),
      ),
      0,
      true,
    );
    translateY.value = withRepeat(
      withSequence(
        withTiming(randomY, {duration: 2000}),
        withTiming(-randomY, {duration: 2000}),
      ),
      0,
      true,
    );
  };

  const startRotation = () => {
    'worklet';
    const randomX = getRandomNumber(0, SCREEN_WIDTH / 4);
    const randomY = getRandomNumber(0, SCREEN_HEIGHT / 4);
    rotation.value = withRepeat(
      withSequence(
        withTiming(360, {duration: 2000}),
        withTiming(-360, {duration: 2000}),
      ),
      1,
      true,
      () => startTranslation(randomX, randomY),
    );
  };

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPress={startRotation}
        onLongPress={navigation.goBack}
        style={styles.button}>
        <Text style={styles.text}>Delete account</Text>
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedButton;
