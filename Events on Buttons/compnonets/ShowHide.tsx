import { View, Text, Button } from 'react-native'
import { Component,useState } from 'react';


function ShowHide() {
    const [show, setShow] = useState(true);
  return (
    <View>
        <Text>Show Hide</Text>
        <Button title="Hide" onPress={()=>setShow(false)} />

        {
            show ? <Userhai/> : null
        }

        <Userhai/>
    </View>
  )
}


const Userhai = () => {
    return(
        <View>
            <Text style={{fontSize:20, color:'blue', backgroundColor:'yellow', textAlign:'center', margin:10}}>User Component</Text>
        </View>
    )
}







export default ShowHide
