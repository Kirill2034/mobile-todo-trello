import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function Input(props) {
    return (
        <TextInput 
            style={styles.input}
            placeholder={props.placeholder}
        />
    )
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderBottomColor: '#4B0082',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 2,
        padding: 5,
        fontSize: 20
    }
})