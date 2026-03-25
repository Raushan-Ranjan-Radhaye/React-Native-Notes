import { View, Text, StyleSheet } from 'react-native';


function Grid() {
  return (
    <View>
        <Text style={{fontSize:20,color:'red'}}>Grid</Text>
        <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
            <Text style={styles.items}>Sam</Text>
            <Text style={styles.items}>Sam</Text>
            <Text style={styles.items}>Sam</Text>
            <Text style={styles.items}>Sam</Text>
            <Text style={styles.items}>Sam</Text>
            <Text style={styles.items}>Sam</Text>
            <Text style={styles.items}>Sam</Text>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    items:{
        fontSize:25,
        color:'red',
        backgroundColor:'green',
        margin:5,
        padding:5,
        width:125,
        height:125,
        textAlignVertical:'center',
        textAlign:'center'
    }
})








export default Grid
