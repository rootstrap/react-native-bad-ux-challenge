import {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {MovingKeyboardProps} from './types';

import Button from '../Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles, { LETTER_MARGIN, LETTER_SIZE } from './styes';

const MovingKeyboard: React.FC<MovingKeyboardProps> = ({
  onPress,
  onDeletePress,
  onSpacePressed,
}) => {
  const [chars, setChars] = useState<string>('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const [capsLock, setCapsLock] = useState<boolean>(true);
  const initialOffset = 200
  const MIN_OFFSET = -chars.length * (LETTER_SIZE+LETTER_MARGIN) + initialOffset;
  const offset = useSharedValue(initialOffset);
  useEffect(() => {
    offset.value = withRepeat(
      withTiming(MIN_OFFSET, {duration: 5000, easing: Easing.linear}),
      -1,
      true,
    );
  }, []);

  const keyboardStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const onCapsLockPressed = () => {
    setChars(prev => (capsLock ? prev.toLowerCase() : prev.toUpperCase()));
    setCapsLock(prev => !prev);
  };

  return (
    <>
      <Animated.View
        style={[keyboardStyle, {flexDirection: 'row', margin: 30}]}>
        {chars.split('').map((letter, index) => (
          <TouchableOpacity onPress={() => onPress(letter)}>
            <Text key={index} style={styles.letter}>
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button text="⇪ Caps Lock" onPress={onCapsLockPressed} />
        <Button text="Space" onPress={onSpacePressed} />
        <Button text="&#x2190; Delete" onPress={onDeletePress} />
      </View>
    </>
  );
};
export default MovingKeyboard;
