import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Components/Button';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:30, margin:10 }}>{count}</Text>

      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
      <Button title="x" onPress={() => setCount(count * 2)} />
      <Button title="÷" onPress={() => setCount(count / 2)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
