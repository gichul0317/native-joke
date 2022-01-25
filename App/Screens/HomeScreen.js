import { View, Text, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../config/colors';

// const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tab 1</Text>
      {/* <Button
        title="Go to Tab 2"
        onPress={() => navigation.navigate('Tab 2')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default HomeScreen;
