import React, {useCallback, useEffect, useState} from 'react';
import {LayoutChangeEvent, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AnimatedButton = Animated.createAnimatedComponent(Button);

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const DeleteAccountCala = () => {
  const {goBack} = useNavigation();

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const onScreenLayout = useCallback(
    ({
      nativeEvent: {
        layout: {width, height},
      },
    }: LayoutChangeEvent) => {
      setScreenWidth(width);
      setScreenHeight(height);
    },
    [],
  );

  const containerRotation = useSharedValue(0);
  const yesButtonPosition = useSharedValue({
    top: 0,
    left: 0,
  });

  const startButtonAnimation = useCallback(() => {
    // Set random button position
    yesButtonPosition.value = withTiming(
      {
        top: randomBetween(0, screenHeight - 100),
        left: randomBetween(0, screenWidth - 100),
      },
      {easing: Easing.linear, duration: 500},
      finished => {
        if (finished) {
          runOnJS(startButtonAnimation)();
        }
      },
    );
  }, [yesButtonPosition, screenHeight, screenWidth]);

  useEffect(() => {
    // Set container rotation
    containerRotation.value = withRepeat(
      withTiming(360, {easing: Easing.linear, duration: 2000}),
      -1,
    );

    startButtonAnimation();
  }, [containerRotation, startButtonAnimation]);

  const containerAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: `${containerRotation.value}deg`,
      },
    ],
  }));

  const yesButtonAnimatedStyles = useAnimatedStyle(() => ({
    top: yesButtonPosition.value.top,
    left: yesButtonPosition.value.left,
  }));

  return (
    <Animated.View
      style={[styles.container, containerAnimatedStyles]}
      onLayout={onScreenLayout}>
      <Text style={styles.title}>
        Are you sure you want to delete your account?
      </Text>
      <Button text="No" onPress={goBack} />
      <AnimatedButton
        text="Yes"
        style={[styles.yesButton, yesButtonAnimatedStyles]}
        onPress={goBack}
      />
    </Animated.View>
  );
};

export default DeleteAccountCala;
