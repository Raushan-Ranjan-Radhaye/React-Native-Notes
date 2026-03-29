
import { Text, View} from 'react-native'
import { FlatList } from 'react-native'


function LoopwithFalist() {

  const users= [
    {
      id:1,
      name:'Raushan',
      email:'Raushan@123'
    },
    {
      id:2,
      name:'Ranjan',
      email:'Ranjan@123'
    },
    {
      id:3,
      name:'Rohit',
      email:'Rohit@123'
    },
    {
      id:4,
      name:'Rohit',
      email:'Rohit@123'
    },
    {
      id:5,
      name:'Rohit',
      email:'Rohit@123'
    }
  ]

  return (
    <View>
      <Text>Hello </Text>
      <FlatList 
      data={users}
      renderItem={({item})=>(
        <View>
          <Text>{item.name}</Text>
          <Text>{item.id}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
      />

    </View>
  )
}

export default LoopwithFalist
