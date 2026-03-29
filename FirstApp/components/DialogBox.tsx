import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

function DialogBox() {
  return (
    <View style={styles.main}>
      <Text>Dialog Box</Text>
      <View style={styles.buttonView}>
        <Button title="Dialog Box" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default DialogBox;
