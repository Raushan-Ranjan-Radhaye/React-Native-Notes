import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

function MyFlatList() {
  const users = [
    {
      id: 1,
      name: 'Raushan',
    },
    {
      id: 2,
      name: 'Ranjan',
    },
    {
      id: 3,
      name: 'Rohit',
    },
    {
      id: 4,
      name: 'Rohit',
    },
    {
      id: 5,
      name: 'Rohit',
    },
  ];

  return (
    <View>
      <Text>FlatList</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={{ fontSize: 20 }}>{item.name}</Text>}
      />
    </View>
  );
}

export default MyFlatList;
