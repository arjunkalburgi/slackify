import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Font } from 'expo';

import Emoji from './components/emoji'; 
import FormInput from './components/formInput';
import Button from './components/button'; 

export default class App extends React.Component {
  state = {
    signedIn: false, 
    fontsLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'PT-Sans-Caption': require('./assets/fonts/PT_Sans-Caption-Web-Regular.ttf'),
      'PT-Sans-Caption-Bold': require('./assets/fonts/PT_Sans-Caption-Web-Bold.ttf'),
    });
    this.setState({fontsLoaded: true})
  }

  render() {
    if (this.state.fontsLoaded) {
      if (this.state.signedIn) {
        return (
          <View style={styles.signinContainer}>
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
              <Button text="Sign in with Slack" size={24} />
            </TouchableOpacity>
          </View>
        );
      };
    } else {
      return null;
    }
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
    elevation: 3, 
    width: '100%', 
  },
  signinContainer: {
    flex: 1, 
  }
});
