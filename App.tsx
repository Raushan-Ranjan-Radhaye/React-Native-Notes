import { View, Text, Button, StyleSheet } from 'react-native';
import UseState from './compnonets/UseState';
import Props from './compnonets/Props';
import Style from './compnonets/Style';
import MyTextInput from './compnonets/TextInput';
import Form from './compnonets/Form';
import MyFlatList from './compnonets/FlatList';
import Grid from './compnonets/Grid';
import LoopwithFalist from './compnonets/LoopwithFalist';
const App = () => {
  const fruits = () => {
    console.warn('Function called');
  };

  const fruits1 = (val: string) => {
    console.warn(val);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      {/* <Button
        title="on press"
        onPress={() => fruits1('Hello Raushan')}
        color={'green'}
      /> */}
      {/* iska ham usekar ne se function me parameter aur value dono ko pass kar hai */}
      {/* <View style={styles.buttonContainer}>
        <Button 
          title="on press" 
          onPress={fruits} 
          color={'red'} 
        />
      </View> */}
      {/* <UseState />
      <Props/>
      <Style/>
      <MyTextInput/>
      <Form/>
      <MyFlatList/> */}
      {/* <Grid/> */}
      {/* <LoopwithFalist/> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'red',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default App;
