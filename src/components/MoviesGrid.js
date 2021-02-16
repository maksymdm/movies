import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MovieContainer from './MovieContainer';

const MoviesGrid = ({ list }) => {
    return (
        <View >
            <FlatList
                data={list}
                keyExtractor={(item) => item.id} 
                numColumns={2}
                renderItem={({item}) => { return <MovieContainer movie={item}/>}}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MoviesGrid;