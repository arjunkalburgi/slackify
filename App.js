import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Emoji from './components/emoji'; 
import FormInput from './components/formInput';
import Button from './components/button'; 

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
          <TouchableOpacity style={styles.signinButtonSection} onPress={this._onSignIn}>
            <Button text="Sign in with Slack" />
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

export const YELLOW = '#FDF300';

const styles = StyleSheet.create({
  signinButtonSection: {
    padding: 5,
    marginTop: 35,
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
