import { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Button } from "react-native";
import UseState from "./UseState";


export default class Class extends Component{
    render() {
        return (
            <View>
                <Text>Class Component</Text>
                <Button title="Click" />
                <UseState/>
            </View>
        );
    }
}
