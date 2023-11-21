import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/screens/Dashboard';
import {DASHBOARD, MANU_GENIA} from './src/constants/screens';
import ManuGenia from './src/screens/ManuGenia';

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
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
