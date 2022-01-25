import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { firstNavigator, secondNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab 1" component={firstNavigator} />
      <Tab.Screen name="Tab 2" component={secondNavigator} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
