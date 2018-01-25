import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import axios from 'axios';

export default class Client extends Component<{}> {

  constructor() {
    super();
  this.state = { text: '' };
}
  sendDataToServer() {

   const ipAddress = this.props.ip;  
   const data = {
     message: this.state.text
   };
   this.setState({ text: '' });
    axios.post(`http://${ipAddress}:5000`, data)
    .catch((error) => {
      console.log(error);
    });
  }

  render() {

    return (
      <View style={styles.containerStyle}>

        <TextInput
        style={styles.inputStyle}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={this.sendDataToServer.bind(this)}>
          <Text style={styles.textStyle}> Send </Text>
        </TouchableOpacity>
      </View>
    );

  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonStyle: {
    marginTop: 40,
    alignSelf: 'center',
    backgroundColor: 'blue',
    height: 40,
    width: 80
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10
  },
  inputStyle: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 20
  }
};
