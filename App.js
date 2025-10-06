import { StatusBar } from "expo-status-bar";
import Button, {ButtonTypes} from "./componets/Button";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  return(
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="1"
        onPress={() => console.log(1)}
        buttonStyle={{width: 100, height: 100}}
        buttonType={ButtonTypes.NUMBER}
      />
      <Button
        title="+"
        onPress={() => console.log('+')}
        buttonStyle={{width: 100, height: 200}}
        buttonType={ButtonTypes.OPERATOR}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
})


export default App;