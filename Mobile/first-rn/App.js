// App.js

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // useState import
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

export default function App() {
  const [count, setCount] = useState(0); // 숫자 저장을 위한 state

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, margin: 20 }}>{count}</Text>
    
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
      <Button title="*" onPress={() => setCount(count *2)} />
      <Button title="/" onPress={() => setCount(count /2)} />  
      
       <Button title="1" onPress={() => setCount(1)} />
      <Button title="2" onPress={() => setCount(2)} />
     

      <StatusBar style="auto" />
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