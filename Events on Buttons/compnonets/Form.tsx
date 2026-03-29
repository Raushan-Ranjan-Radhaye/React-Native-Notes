import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet, Button } from 'react-native'

function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  return (
    <View>
        <Text>Form</Text>
        <TextInput
        placeholder="Enter your name"
        style={styles.textInput}
        onChangeText={(text)=>setName(text)}
        value={name}
        />

        <TextInput
        placeholder="Enter your email"
        style={styles.textInput}
        onChangeText={(text)=>setEmail(text)}
        value={email}
        />

        <TextInput
        placeholder="Enter your password"
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={(text)=>setPassword(text)}
        value={password}
        />

        <Button
        title="Submit"
        onPress={() => {
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
        }}
        />

        <Button
        title="Reset"
        onPress={() => {
            setName('');
            setEmail('');
            setPassword('');
        }}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: 'red',
        backgroundColor: 'yellow',
        padding: 10,
        margin: 10,
        borderWidth: 2
    }
})








export default Form
