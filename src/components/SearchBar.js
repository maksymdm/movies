import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const SearchBar = ({text, onChange}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                value={text} 
                onChangeText={(text) => onChange(text)} 
                placeholder="Search..." 
                style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey'
    },
    input: {
        marginTop: 8,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 8,
        borderWidth: 2,
        borderColor: '#393939',
        borderRadius: 25,
        backgroundColor: 'white',
        paddingStart: 25
    }
});

export default SearchBar;