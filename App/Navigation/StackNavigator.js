import react from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import SecondScreen from '../Screens/SecondScreen';

const Stack = createStackNavigator();

function firstNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Tab 1" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function secondNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Tab 2" component={SecondScreen} />
    </Stack.Navigator>
  );
}

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export { firstNavigator, secondNavigator };
