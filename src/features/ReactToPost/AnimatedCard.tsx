import React, {memo, useState} from 'react';
import {Pressable, View, Text} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Portal} from 'react-native-paper';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/common';
import styles from './styles';

const screenHeight = SCREEN_HEIGHT;
const screenWidth = SCREEN_WIDTH;

const emojiHeart = '❤️';
const emojiQuestion = '❓';
const emojiRaisedHands = '🙌';
const emojiTearSmile = '🥲';
const emojiConfused = '🤨';
const emojiLaugh = '😂';

const CONTAINER_WIDTH = 300;

function AnimatedTransactionRowItemComponent({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const [internalReaction, setInternalReaction] = useState<string>();

  const selectedReaction = useSharedValue<undefined | string>('');
  const myReactionScale = useSharedValue(1);
  const isVisible = useSharedValue(false);
  const panPosition = useSharedValue(0);
  const emojiContainerPositions = useSharedValue({
    heart: 0,
    question: 0,
    raisedHands: 0,
    tearSmile: 0,
    confused: 0,
    laugh: 0,
  });
  const currentSelectedEmoji = useSharedValue(0);
  const popoverYPosition = useSharedValue(1);

  const pan = Gesture.Pan()
    .onBegin(() => {
      panPosition.value = 0;
      isVisible.value = true;
    })
    .onChange(event => {
      // Normalize pan position relative to container
      panPosition.value = screenWidth - (event.absoluteX + 25);
    })
    .onEnd(() => {
      if (selectedReaction.value) {
        runOnJS(setInternalReaction)(selectedReaction.value);
        myReactionScale.value = withSequence(withSpring(2.5), withTiming(1));
      }
      isVisible.value = false;
      panPosition.value = 0;
    });

  const normalizedValues = useDerivedValue(() => {
    const splitWidthAndFindBlock = (width: number, xPosition: number) => {
      const blockWidth: number = width / 6;
      const blockPosition: number = Math.floor(xPosition / blockWidth) + 1;
      return blockPosition;
    };

    const currentBlock = splitWidthAndFindBlock(
      CONTAINER_WIDTH,
      panPosition.value,
    );

    if (currentBlock !== currentSelectedEmoji.value && isVisible.value) {
      currentSelectedEmoji.value = currentBlock;
    }

    if (panPosition.value <= 25 || panPosition.value > CONTAINER_WIDTH) {
      return {
        heart: 1,
        question: 1,
        raisedHands: 1,
        tearSmile: 1,
        confused: 1,
        laugh: 1,
      };
    }

    let heartScale = 1;
    let questionScale = 1;
    let raisedHandsScale = 1;
    let tearSmileScale = 1;
    let confusedScale = 1;
    let laughScale = 1;

    let selectedEmoji = selectedReaction.value;

    if (currentBlock === 1) {
      selectedEmoji = emojiHeart;
      heartScale = 2.5;
    }

    if (currentBlock === 2) {
      selectedEmoji = emojiQuestion;
      questionScale = 2.5;
    }

    if (currentBlock === 3) {
      selectedEmoji = emojiRaisedHands;
      raisedHandsScale = 2.5;
    }

    if (currentBlock === 4) {
      selectedEmoji = emojiTearSmile;
      tearSmileScale = 2.5;
    }

    if (currentBlock === 5) {
      selectedEmoji = emojiConfused;
      confusedScale = 2.5;
    }

    if (currentBlock === 6) {
      selectedEmoji = emojiLaugh;
      laughScale = 2.5;
    }

    if (selectedEmoji) {
      selectedReaction.value = selectedEmoji;
    }

    return {
      heart: heartScale,
      question: questionScale,
      raisedHands: raisedHandsScale,
      tearSmile: tearSmileScale,
      confused: confusedScale,
      laugh: laughScale,
    };
  }, [panPosition.value, emojiContainerPositions.value, isVisible.value]);

  const heartAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(normalizedValues.value.heart)}],
    }),
    [normalizedValues],
  );

  const questionAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(normalizedValues.value.question)}],
    }),
    [normalizedValues],
  );

  const raisedHandsAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(normalizedValues.value.raisedHands)}],
    }),
    [normalizedValues],
  );

  const tearSmileAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(normalizedValues.value.tearSmile)}],
    }),
    [normalizedValues],
  );

  const confusedAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(normalizedValues.value.confused)}],
    }),
    [normalizedValues],
  );

  const laughAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(normalizedValues.value.laugh)}],
    }),
    [normalizedValues],
  );

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isVisible.value ? 1 : 0),
      display: isVisible.value ? 'flex' : 'none',
      height: withSpring(isVisible.value ? 70 : 25, {duration: 750}),
      width: CONTAINER_WIDTH,
      transform: [
        {
          translateX: -50,
        },
        {
          translateY: -screenHeight + popoverYPosition.value,
        },
      ],
    };
  }, [popoverYPosition]);

  const myReactionAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{scale: myReactionScale.value}],
    }),
    [normalizedValues.value.heart],
  );

  const backdrop = useAnimatedStyle(
    () => ({
      display: isVisible.value ? 'flex' : 'none',
      backgroundColor: 'black',
      opacity: isVisible ? 0.3 : 0,
    }),
    [isVisible.value],
  );

  const setSelected = async (selected: string) => {
    setInternalReaction(selected);
    runOnUI(() => {
      isVisible.value = false;
      myReactionScale.value = withSequence(withSpring(2.5), withTiming(1));
    })();
  };

  return (
    <GestureDetector gesture={pan}>
      <View style={styles.container}>
        <Pressable
          onTouchStart={event => {
            runOnUI((position: {x: number; y: number}) => {
              popoverYPosition.value = position.y;
            })({
              y: event.nativeEvent.pageY,
              x: event.nativeEvent.pageX,
            });
          }}
          onLongPress={event => {
            runOnUI((position: {x: number; y: number}) => {
              popoverYPosition.value = position.y;
              isVisible.value = true;
              panPosition.value = position.x;
            })({
              y: event.nativeEvent.pageY,
              x: event.nativeEvent.pageX,
            });
          }}
          onPress={event => {
            runOnUI((position: number) => {
              popoverYPosition.value = position;
              panPosition.value = 0;
              isVisible.value = true;
            })(event.nativeEvent.pageY);
          }}>
          <View style={styles.topRowContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {name}
            </Text>
            <Text numberOfLines={5} style={styles.subtitle}>
              {description}
            </Text>
          </View>
        </Pressable>
        <View style={styles.footer}>
          <View style={styles.reactionsContainer}>
            <View style={styles.addReactionPressableContainer}>
              {internalReaction && (
                <View style={styles.reactionEmojiContainer}>
                  <Animated.Text
                    style={[styles.emoji, myReactionAnimatedStyle]}>
                    {internalReaction}
                  </Animated.Text>
                </View>
              )}
              <Portal>
                <Animated.View style={[styles.flexStyle, backdrop]}>
                  <Pressable
                    style={styles.flexStyle}
                    onPress={() => (isVisible.value = false)}
                  />
                </Animated.View>
                <Animated.View
                  style={[
                    styles.reactionsContainerShadow,
                    styles.emojiReactionsContainer,
                    containerAnimatedStyle,
                  ]}>
                  <View style={styles.reactionContainer}>
                    <Animated.View
                      style={[styles.emojiContainer, heartAnimatedStyles]}
                      onLayout={event => {
                        emojiContainerPositions.value = {
                          ...emojiContainerPositions.value,
                          heart: event.nativeEvent.layout.x,
                        };
                      }}>
                      <EmojiButton
                        key={emojiHeart}
                        position={panPosition.value}
                        emoji={emojiHeart}
                        selected={internalReaction === emojiHeart}
                        onPress={() => {
                          setSelected(emojiHeart);
                        }}
                      />
                    </Animated.View>
                    <Animated.View
                      style={[styles.emojiContainer, questionAnimatedStyles]}
                      onLayout={event => {
                        emojiContainerPositions.value = {
                          ...emojiContainerPositions.value,
                          question: event.nativeEvent.layout.x,
                        };
                      }}>
                      <EmojiButton
                        key={emojiQuestion}
                        position={panPosition.value}
                        emoji={emojiQuestion}
                        selected={internalReaction === emojiQuestion}
                        onPress={() => setSelected(emojiQuestion)}
                      />
                    </Animated.View>
                    <Animated.View
                      style={[styles.emojiContainer, raisedHandsAnimatedStyles]}
                      onLayout={event => {
                        emojiContainerPositions.value = {
                          ...emojiContainerPositions.value,
                          raisedHands: event.nativeEvent.layout.x,
                        };
                      }}>
                      <EmojiButton
                        key={emojiRaisedHands}
                        position={panPosition.value}
                        emoji={emojiRaisedHands}
                        selected={internalReaction === emojiRaisedHands}
                        onPress={() => setSelected(emojiRaisedHands)}
                      />
                    </Animated.View>
                    <Animated.View
                      style={[styles.emojiContainer, tearSmileAnimatedStyles]}
                      onLayout={event => {
                        emojiContainerPositions.value = {
                          ...emojiContainerPositions.value,
                          tearSmile: event.nativeEvent.layout.x,
                        };
                      }}>
                      <EmojiButton
                        key={emojiTearSmile}
                        position={panPosition.value}
                        emoji={emojiTearSmile}
                        selected={internalReaction === emojiTearSmile}
                        onPress={() => setSelected(emojiTearSmile)}
                      />
                    </Animated.View>
                    <Animated.View
                      style={[styles.emojiContainer, confusedAnimatedStyles]}
                      onLayout={event => {
                        emojiContainerPositions.value = {
                          ...emojiContainerPositions.value,
                          confused: event.nativeEvent.layout.x,
                        };
                      }}>
                      <EmojiButton
                        key={emojiConfused}
                        position={panPosition.value}
                        emoji={emojiConfused}
                        selected={internalReaction === emojiConfused}
                        onPress={() => setSelected(emojiConfused)}
                      />
                    </Animated.View>
                    <Animated.View
                      style={[styles.emojiContainer, laughAnimatedStyles]}
                      onLayout={event => {
                        emojiContainerPositions.value = {
                          ...emojiContainerPositions.value,
                          laugh: event.nativeEvent.layout.x,
                        };
                      }}>
                      <EmojiButton
                        key={emojiLaugh}
                        position={panPosition.value}
                        emoji={emojiLaugh}
                        selected={internalReaction === emojiLaugh}
                        onPress={() => setSelected(emojiLaugh)}
                      />
                    </Animated.View>
                  </View>
                </Animated.View>
              </Portal>
            </View>
          </View>
        </View>
      </View>
    </GestureDetector>
  );
}

const EmojiButton = (props: {
  emoji: string;
  selected: boolean;
  position: number;
  onPress: () => Promise<void> | void;
}) => {
  return (
    <Pressable onPress={props.onPress}>
      <Text style={styles.emojiText}>{props.emoji}</Text>
    </Pressable>
  );
};

export default memo(AnimatedTransactionRowItemComponent);
