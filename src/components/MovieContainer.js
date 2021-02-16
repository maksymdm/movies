import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenTag from '../navigators/ScreenTag';
import { getPosterUrl } from '../api/api';

const titleLengthLimit = 18;

const MovieContainer = ({movie}) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate(ScreenTag.Details, { movieId: movie.id });
    }

    const checkTitle = (title) => {
        if (title.length < titleLengthLimit) return title;
        else return `${(title.substring(0, titleLengthLimit)).trim()}...`;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <Image 
                    style={styles.poster} 
                    source={{
                        uri: getPosterUrl(movie.poster_path),
                        cache: 'force-cache'
                    }} 
                />
                <Text style={styles.title}>{checkTitle(movie.title)}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 260,
        width: 160,
        backgroundColor: '#f4f4f4',
        elevation: 5,
        borderRadius: 15,
        margin: 16,
        justifyContent: 'space-between'
    },
    poster: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 230,
        margin: 3,
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 4
    }
});

export default MovieContainer;