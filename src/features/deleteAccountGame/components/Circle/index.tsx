import {useEffect} from 'react';
import {useWindowDimensions} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

import React from 'react';
import getStyles from './styles';

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isOdd = (number: number) => {
  return number % 2 !== 0;
};

type CircleProps = {
  count: SharedValue<number>;
  index: number;
};

export const Circle = ({count, index}: CircleProps) => {
  const {width} = useWindowDimensions();

  const color = generateRandomNumber(1, 3);
  const isGreen = color === 1;
  const isRed = color === 2;
  const styles = getStyles(isGreen, isRed);

  const initialValue = isOdd(index) ? -80 : width + 60;
  const translateX = useSharedValue(initialValue);

  useEffect(() => {
    translateX.value = withRepeat(
      withSpring(isOdd(index) ? width : -80, {
        mass: 1,
        damping: 1,
        stiffness: 1,
        overshootClamping: true,
      }),
      -1,
      true,
    );
  }, [index, translateX, width]);

  const tap = Gesture.Tap().onStart(() => {
    if (isGreen) {
      count.value = count.value + 1;
    } else if (isRed) {
      count.value = count.value - 1;
    }
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[styles.circle, animatedStyle]} />
    </GestureDetector>
  );
};
