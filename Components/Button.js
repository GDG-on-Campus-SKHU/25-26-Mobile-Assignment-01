import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Calculatebutton({ title }) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});