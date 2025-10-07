import { StyleSheet, Text, View } from 'react-native';
import Calculatebutton from './Components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          margin: 10,
        }}
      >
        0
      </Text>
      <Calculatebutton title="+" />
      <Calculatebutton title="-" />
      <Calculatebutton title="*" />
      <Calculatebutton title="/" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});