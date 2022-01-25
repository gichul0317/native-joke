import react from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { firstNavigator, secondNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tab 1" component={firstNavigator} />
      <Drawer.Screen name="Tab 2" component={secondNavigator} />
      <Drawer.Screen name="Tab 3" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
