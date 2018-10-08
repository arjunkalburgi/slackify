import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { YELLOW } from './../App'

export default class Button extends React.Component {
  render() {
        return (
        <View style={styles.buttonContainer}>
            <LinearGradient colors={['white', 'white', 'white', YELLOW, YELLOW, 'white', 'white']}>
                <Text style={styles.buttonText} style={{fontSize: this.props.size}}>{this.props.text}</Text>
            </LinearGradient>
        </View>)
  }; 
}

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: 'PT-Sans-Caption',
        backgroundColor: 'transparent', 
    },
    buttonContainer: {
        alignItems: 'center',
    },
});