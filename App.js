import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/screens/Dashboard';
import {DASHBOARD, HOW_OLD_ARE_YOU} from './src/constants/screens';
import HowOldAreYou from './src/screens/HowOldAreYou';

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
        name={HOW_OLD_ARE_YOU}
        component={HowOldAreYou}
        options={{headerTitle: 'How Old Are You?'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
