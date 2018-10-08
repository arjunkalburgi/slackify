import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class FormInput extends React.Component {
  render() {
        return (<View style={styles.signinFormInput}>
            <View style={styles.signinFormInput}>
                <Text style={styles.signinFormInputLabel}>{this.props.label}:</Text>
                <Text style={styles.signinFormInputText}>{this.props.placeholder}</Text>
            </View>
        </View>)
  }; 
}

const styles = StyleSheet.create({
    signinFormInputText: {
        width: '67%',
        height: 33,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
        fontFamily: 'PT-Sans-Caption',
        alignItems: 'center',
    },
    signinFormInputLabel: {
        width: '33%',
        flexDirection: 'row',
        fontFamily: 'PT-Sans-Caption',
        alignItems: 'center',
    },
    signinFormInput: {
        flexDirection: 'row',
        marginBottom: 5,
    },
});