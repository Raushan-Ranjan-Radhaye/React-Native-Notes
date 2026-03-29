import React from 'react'
import { View, Text } from 'react-native'

function Props() {
    let name = 'Anial'
  return (
    <View>
        <Text>Props</Text>
        <User name={'shidu'}/>
    </View>
  )
}



const User = (props:any) => {
    console.warn(props.name)
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}



export default Props
