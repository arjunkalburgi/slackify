import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Emoji from './components/emoji'; 

export default class App extends React.Component {
  state = {
    signedIn: false
  }

  render() {
    if (this.state.signedIn) {
      return (
        <View style={styles.container}>
            <Emoji />
        </View>
      );
    } else { 
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this._onSignIn}>
            <Text>Sign in with Slack</Text>
          </TouchableOpacity>
        </View>
      );
    };
  }

  _onSignIn = async () => {
    console.log("sign in!")
    this.setState({signedIn: true})       
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 5,
    backgroundColor: '#ddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
