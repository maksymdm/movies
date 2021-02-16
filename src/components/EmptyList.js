import React from 'react';
import { Text, StyleSheet } from 'react-native';

const EmptyList = () => {
    return <Text style={styles.text}>Nothing to show</Text>
}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginTop: 200,
        color: 'grey'
    }
});

export default EmptyList;