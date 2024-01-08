import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withClamp,
  runOnJS,
} from 'react-native-reanimated';

import Button from '../Button';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/common';
import {DelteAccountButtonProps, WithRandomValueArgs} from './types';
import styles from './styles';

const AnimatedButton = Animated.createAnimatedComponent(Button);
const answerArea = 0.7;
const animationDuration = 500;

const maxXValue = SCREEN_WIDTH * answerArea;
const maxYValue = SCREEN_HEIGHT * answerArea;

const getRandomColor = () => {
  'worklet';
  return `#${Math.floor(Math.random() * 8388607 + 8388608).toString(16)}`;
};

const withRandomValue = ({
  currentValue,
  maxValue,
  callback,
}: WithRandomValueArgs) => {
  'worklet';
  return withClamp(
    {
      min: 0,
      max: maxValue,
    },
    withTiming(
      (currentValue.value + Math.random() * 1000) % maxValue,
      {
        duration: animationDuration,
      },
      finished => {
        if (callback && finished) {
          runOnJS(callback)(currentValue.value);
        }
      },
    ),
  );
};

const DelteAccountButton: React.FC<DelteAccountButtonProps> = ({
  label,
  onPress,
}) => {
  const xAxis = useSharedValue(1);
  const yAxis = useSharedValue(1);
  const [repeatAnimation, setRepeatAnimation] = useState(xAxis.value);

  useEffect(() => {
    xAxis.value = withRandomValue({
      currentValue: xAxis,
      maxValue: maxXValue,
      callback: setRepeatAnimation,
    });

    yAxis.value = withRandomValue({
      currentValue: yAxis,
      maxValue: maxYValue,
    });
  }, [repeatAnimation, xAxis, yAxis]);

  const animatedStyles = useAnimatedStyle(() => ({
    left: xAxis.value,
    top: yAxis.value,
    backgroundColor: getRandomColor(),
  }));

  return (
    <AnimatedButton
      text={label}
      style={[styles.button, animatedStyles]}
      onPress={onPress}
    />
  );
};

export default DelteAccountButton;
