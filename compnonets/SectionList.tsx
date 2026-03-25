import React from 'react'
import { Text, View, SectionList } from 'react-native'


function SectionListComponent() {
    const users= [
        {
            id:1,
            name:'Raushan',
            data:["PHP", "Next.js", "React Native"]
        },
        {
            id:2,
            name:'Ranjan',
            data:["PHP", "Next.js", "React Native"]
        },
        {
            id:3,
            name:'Rohit',
            data:["PHP", "Next.js", "React Native"]
        },
        {
            id:4,
            name:'Rohit',
            data:["PHP", "Next.js", "React Native"]
        },
        {
            id:5,
            name:'Rohit',
            data:["PHP", "Next.js", "React Native"]
        }
    ]


  return (
    <View>
        <Text>Sestion List</Text>
        <SectionList
            sections={users}
            renderItem={({item}) => <Text>{item}</Text>}
            renderSectionHeader={({section}) => <Text>{section.name}</Text>}
        />

    </View>
  )
}

export default SectionListComponent
