import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/screens/Dashboard';
import {
  DASHBOARD,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_GAME,
  DELETE_ACCOUNT_CALA,
  MANU_GENIA,
  RAMA_RASA,
  REACT_TO_POST,
  WHATS_YOUR_NAME,
} from './src/constants/screens';
import ManuGenia from './src/screens/ManuGenia';
import WhatsYourName from './src/features/whatsyourname/screens/WhatsYourName';
import DeleteAccount from './src/features/DeleteAccount';
import DeleteAccountCala from './src/features/DeleteAccountCala';
import Ramarasa from './src/screens/Ramarasa';
import {COLORS} from './src/constants/styles';
import DeleteAccountGame from './src/features/deleteAccountGame';
import ReactToPost from './src/features/ReactToPost';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={DASHBOARD}
        component={Dashboard}
        options={{headerTitle: 'Bad UX Animation Challenge'}}
      />
      <Stack.Screen
        name={MANU_GENIA}
        component={ManuGenia}
        options={{headerTitle: 'How Old Are You?'}}
      />
      <Stack.Screen
        name={WHATS_YOUR_NAME}
        component={WhatsYourName}
        options={{headerTitle: "What's your name?"}}
      />
      <Stack.Screen
        name={DELETE_ACCOUNT}
        component={DeleteAccount}
        options={{
          headerTitle: 'Delete account',
          headerStyle: {
            backgroundColor: COLORS.black,
          },
          headerTintColor: COLORS.white,
        }}
      />
      <Stack.Screen
        name={DELETE_ACCOUNT_GAME}
        component={DeleteAccountGame}
        options={{headerTitle: "Let's play"}}
      />
      <Stack.Screen
        name={DELETE_ACCOUNT_CALA}
        component={DeleteAccountCala}
        options={{
          headerTitle: 'Delete account',
          headerStyle: {
            backgroundColor: COLORS.black,
          },
          headerTintColor: COLORS.white,
        }}
      />
      <Stack.Screen
        name={RAMA_RASA}
        component={Ramarasa}
        options={{headerTitle: 'Ramarasa Corp. 👀'}}
      />
      <Stack.Screen
        name={REACT_TO_POST}
        component={ReactToPost}
        options={{headerTitle: 'React'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
