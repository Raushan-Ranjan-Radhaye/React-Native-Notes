import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native'

function UseState() {
  const [name, setName] = useState('Raushan ');
  // by default yahai save hoga state clik karne ke baad wo wala name print hoga
  return (
   <View>
    <Text>UseState</Text>
    <Text style={{fontSize:20,color:'red'}} >{name}</Text>
    <Button title='Change' onPress={() => setName('Ranjan')} />
   </View>
  )
}

export default UseState
