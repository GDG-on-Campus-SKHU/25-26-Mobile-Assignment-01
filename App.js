import React from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';

const SIZE = 70;
const GAP = 4;
const NUM_BUTTONS = ['7','8','9','4','5','6','1','2','3','0','='];
const OPS = ['C','-','+'];

const Btn = ({label, onPress, type='num', style}) => (
  <Pressable onPress={onPress} style={({pressed}) => [
    styles.btn,
    type==='op' && styles.opBtn,
    style,
    pressed && styles.pressed
  ]}>
    <Text style={styles.btnText}>{label}</Text>
  </Pressable>
);

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.mainRow}>
        <View style={styles.leftGrid}>
          {NUM_BUTTONS.map((label) => {
            if (label === '0')
              return <Btn key={label} label={label} onPress={()=>{}} style={styles.wideBtn} />;
            if (label === '=')
              return <Btn key={label} label={label} onPress={()=>{}} style={[styles.btn, styles.eqBtn]} />;
            return <Btn key={label} label={label} onPress={()=>{}} />;
          })}
        </View>

        <View style={styles.rightCol}>
          {OPS.map(op => (
            <Btn
              key={op}
              label={op}
              type="op"
              onPress={()=>{}}
              style={op==='+' ? styles.tallBtn : undefined}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex:1, backgroundColor:'black', justifyContent:'center', alignItems:'center' },
  mainRow: { flexDirection:'row' },
  leftGrid: { flexDirection:'row', flexWrap:'wrap', width:SIZE*3+GAP*2, columnGap:GAP, rowGap:GAP },
  rightCol: { marginLeft:GAP, justifyContent:'space-between', rowGap:GAP },
  btn: { width:SIZE, height:SIZE, backgroundColor:'gray', alignItems:'center', justifyContent:'center' },
  opBtn: { backgroundColor:'orange' },
  eqBtn: { backgroundColor:'orange' }, 
  wideBtn: { width:SIZE*2 + GAP },
  tallBtn: { height:SIZE*2 + GAP },
  pressed: { opacity:0.6 },
  btnText: { fontSize:26, color:'white', fontWeight:'bold' },
});
