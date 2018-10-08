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
                <View style={styles.signinFormInputLabel}>
                <Text>{this.props.label}:</Text>
                </View>
                <View style={styles.signinFormInputText}>
                <Text>{this.props.placeholder}</Text>
                </View>
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
        alignItems: 'center',
    },
    signinFormInputLabel: {
        width: '33%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    signinFormInput: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        marginBottom: 5,
    },
});