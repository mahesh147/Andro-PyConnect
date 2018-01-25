import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class SetIP extends Component <{}> {

  constructor() {
    super();
  this.state = { ipAddress: '' };
 }

 goToClient() {

   Actions.client({
     ip: this.state.ipAddress
   });
 }
  render() {
    return (
      <View style={styles.containerStyle}>

        <TextInput
        style={styles.inputStyle}
        onChangeText={(ipAddress) => this.setState({ ipAddress })}
        value={this.state.ipAddress}
        placeholder='Enter the IP Adress of the python server'
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={this.goToClient.bind(this)}>
          <Text style={styles.textStyle}> Set IP Address </Text>
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
    height: 60,
    width: 100
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
