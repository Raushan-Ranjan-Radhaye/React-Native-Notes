import { View, Text, Button, StyleSheet } from 'react-native';
import UseState from './compnonets/UseState';
import Props from './compnonets/Props';
import Style from './compnonets/Style';
import MyTextInput from './compnonets/TextInput';
import Form from './compnonets/Form';
import MyFlatList from './compnonets/FlatList';
import Grid from './compnonets/Grid';
import LoopwithFalist from './compnonets/LoopwithFalist';
import SectionListComponent from './compnonets/SectionList';
import Class from './compnonets/Class';
import SateProducts from './compnonets/Sate&Products';
import LifeCycle from './compnonets/LifeCycle';
import UseEffect from './compnonets/UseEffect';
import ShowHide from './compnonets/ShowHide';
import Unmount from './compnonets/Unmount';
import ResponsiveUI from './compnonets/ResponsiveUI';
const App = () => {
  const fruits = () => {
    console.warn('Function called');
  };

  const fruits1 = (val: string) => {
    console.warn(val);
  };

  return (
    <View >
      {/* <Text style={styles.title}>Hello</Text> */}
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
      {/* <SectionListComponent/> */}
        {/* <Class/> */}
        {/* <SateProducts/> */}
        {/* <LifeCycle/> */}
        {/* <UseEffect/> */}
        {/* <ShowHide/> */}
        {/* <Unmount/> */}

        <ResponsiveUI/>
        <ResponsiveUI/>

    </View>
  );
};



export default App;
