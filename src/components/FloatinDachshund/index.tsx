import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import distractor from '../../assets/dachshund.png';
import {SCREEN_HEIGHT} from '../../constants/common';
import styles from './styles';
import {getRandomNumber} from '../../utils';

const FloatingDachshund = () => {
  const distractorYAxis = useSharedValue(SCREEN_HEIGHT + 100);
  distractorYAxis.value = withDelay(
    getRandomNumber(0, 4000),
    withRepeat(withTiming(0, {duration: 2000}), -1, true),
  );
  const distractorAnimatedStyle = useAnimatedStyle(() => ({
    top: distractorYAxis.value,
  }));

  return (
    <Animated.Image
      style={[styles.distractor, distractorAnimatedStyle]}
      source={distractor}
    />
  );
};

export default FloatingDachshund;
