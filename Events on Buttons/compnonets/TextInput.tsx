import React from 'react';
import { View, Text, TextInput } from 'react-native';

function MyTextInput() {
  return (
    <View>
      <Text>TextInput</Text>
      <TextInput
        style={{
          fontSize: 18,
          color: 'red',
          backgroundColor: 'yellow',
          padding: 10,
          margin: 10,
          borderWidth: 2,
        }}
        placeholder="Enter your name"
      />
    </View>
  );
}

export default MyTextInput;
