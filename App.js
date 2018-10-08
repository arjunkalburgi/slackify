import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Emoji from './components/emoji'; 
import FormInput from './components/formInput'; 

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
        <View style={styles.signinContainer}>
          <View style={styles.signinNavBar}></View>
          <View style={styles.signinIllustrationSection}>
            <Image source={require("./assets/Logo.png")} style={styles.signinIllustration}></Image>
          </View>
          <View style={styles.signinFormSection}>
            <FormInput label="Slack Team" placeholder="" />
            <FormInput label="Username" placeholder="" />
            <FormInput label="Password" placeholder="" />
          </View>
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

const YELLOW = '#FDF300';
const DROPSHADOWCOLOUR = '#FDF1034D';

const styles = StyleSheet.create({
  button: {
    padding: 5,
    margin: 5,
    backgroundColor: '#ddd',
  },
  signinFormSection: {
    width: '80%', 
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  signinIllustrationSection: {
    marginTop: 68, 
    marginBottom: 40, 
    alignItems: 'center'
  },
  signinNavBar: {
    height: 85, 
    backgroundColor: YELLOW, 
    // boxShadow: '0px 4px 4px ${DROPSHADOWCOLOUR}', 
    elevation: 3, 
    width: '100%', 
  },
  signinContainer: {
    flex: 1
  }
});
