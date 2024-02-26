import {COLORS} from '../../constants/styles';
import {StyleSheet} from 'react-native';

const CONTAINER_WIDTH = 300;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 0.5,
    borderColor: '#D9D9D9',
    margin: 15,
    borderRadius: 5,
    padding: 10,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reactionsContainer: {},
  addReactionPressableContainer: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
  },
  topRowContainer: {
    marginBottom: 4,
  },
  reactionEmojiContainer: {
    borderRadius: 50,
    bottom: -30,
    padding: 5,
    backgroundColor: '#D4838F50',
  },
  emoji: {
    fontSize: 25,
    textAlign: 'center',
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: CONTAINER_WIDTH / 6,
  },
  reactionsContainerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  emojiReactionsContainer: {
    position: 'absolute',
    bottom: 20,
    right: -10,
    flex: 1,
    flexDirection: 'column',
    rowGap: 5,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignContent: 'center',
  },
  emojiText: {fontSize: 26},
  flexStyle: {
    flex: 1,
  },
  reactionContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
});

export default styles;
