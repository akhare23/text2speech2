import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity, Alert } from 'react-native';
import * as Speech from "expo-speech"

// You can import from local files

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text:"",
    }
  }
  speechfunction = ()=>{
    var thingtoSay = this.state.text;
    Speech.speak(thingtoSay)
  }
  render(){
  return (
    <View>
      <TextInput style = {styles.inputBox} onChangeText= {(text)=>{
        this.setState({text:text})
      }}></TextInput>
      <View>
        {this.state.text === "" ? Alert.alert("Text input is empty")
        :<TouchableOpacity style = {styles.button} onPress = {()=>{
          this.speechfunction();
        }}>
          <Text>Submit</Text>
        </TouchableOpacity> } 
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  inputBox: {
    borderColor: "green",
    borderWidth: 4,
    marginTop: 20,
    padding: 20,
    textAlign: "center",
    width: "50%",
    alignSelf: "center",
  },
  button:{
    backgroundColor: "orange",
    margin: 20,
    padding: 10,
    alignSelf: "center",
    alignItems:"center",
    borderRadius: 10,
    width:100
  }
});


