import { useState } from 'react'
import { View, Text,Button } from 'react-native'

function Unmount() {
    const [show, setShow] = useState(true)
  return (
    <View>
      <Text>Unmount</Text>
      <Button title="Toggle" onPress={()=>setShow(!show)} />

    {
        show ? <Student/> : null
    }
    
    </View>
  )
}


const Student = () => {
    return(
        <View>
            <Text style={{fontSize:30}}>Student</Text>
        </View>
    )
}



export default Unmount
