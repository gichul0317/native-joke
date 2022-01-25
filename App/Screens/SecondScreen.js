import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
});

export default SecondScreen;
