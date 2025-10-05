import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d1c4e9',
    padding: 12,
    margin: 5,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
