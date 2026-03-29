import { TouchableHighlight, View } from 'react-native';
import { Text, Button } from 'react-native';

function ButtonStyle() {
  return (
    <View>
      <TouchableHighlight>
        <Text>Button</Text>
      </TouchableHighlight>
      <Button title="Button" />
    </View>
  );
}

export default ButtonStyle;
