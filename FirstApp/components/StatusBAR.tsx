import { View, Text, StatusBar } from 'react-native'

function StatusBAR() {
  return (
    <View>
        <Text>StatusBAR</Text>
    </View>
  )
}

// Export the StatusBar component separately so it can be used at the root level
export const AppStatusBar = () => (
  <StatusBar
    backgroundColor="red"
    barStyle="dark-content"
    showHideTransition="fade"
    hidden={false}
    translucent={false}
  />
)

export default StatusBAR
