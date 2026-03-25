import { View, Text, StyleSheet } from 'react-native';

function Style() {
  return (
    <View>
      <Text style={{fontSize:20, color:'red', backgroundColor:'green'}}>Style in React Native</Text>

      {/* Now i am give the internal style to all */}
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={{fontSize:20, color:'red'}}>Style in React Native</Text>
      <Text style={{fontSize:20, color:'red'}}>Style in React Native</Text>

    </View>
  )
}

// yese the style ko dete hai
const styles = StyleSheet.create({
    textBox: {
        color:'red',
        fontSize:20,
        backgroundColor:'yellow',
        padding:10,
        margin:10,
        borderWidth:2
    }
})








export default Style
