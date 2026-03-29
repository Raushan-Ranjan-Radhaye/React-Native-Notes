import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonStyle from './components/ButtonStyle';
import RadioButton from './components/RadioButton';
import DialogBox from './components/DialogBox';
import StatusBAR, { AppStatusBar } from './components/StatusBAR';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <View>
      <AppStatusBar />
      <StatusBAR />
      <ButtonStyle />
      <RadioButton
        options={options}
        selectedOption={selectedOption}
        onOptionChange={setSelectedOption}
      />
      <DialogBox/>
    </View>
  );
}

export default App;
