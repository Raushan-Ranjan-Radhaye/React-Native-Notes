import { useEffect,useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native'
function UseEffect() {

    const [count, setCount] = useState(0)

    // useEffect ka use hma load hone se pahale ki bhi chiz of use kar sakte hai 
    // jaise api se data lana file ko load hone se pahle 
     useEffect(() => {
        console.warn("Hello")
    })


  return (
   
    <View>
        <Text>UseEffect</Text>
        <Button title="Click" onPress={()=>setCount(5)} />
    </View>
  )
}

export default UseEffect
