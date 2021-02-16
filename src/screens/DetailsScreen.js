import React, { useContext, useState } from 'react';
import { Text, Image, ScrollView, StyleSheet } from 'react-native';
import ActorList from '../components/ActorsList';
import { AppContext } from '../context/AppContext';
import { getPosterUrl } from '../api/api';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailsScreen = (props) => {
    const navigation = useNavigation();
    const [{ feed, favorites }, { updateFavorites }] = useContext(AppContext);
    const id = props.route.params.movieId;
    const movie = feed.find((item) => item.id === id);

    const isFavorite = favorites.find((item) => item.id === movie.id);
    const [icon, setIcon] = useState(isFavorite ? 'minus': 'plus' );

    const modifyFavorites = () => {
        if(isFavorite) {
            const result = favorites.filter((item) => item.id !== movie.id);
            setIcon('plus');
            updateFavorites(result);
        } else {
            favorites.push(movie);
            setIcon('minus');
            updateFavorites(favorites);
        }
    };

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={modifyFavorites}>
                    <AntDesign style={{marginEnd: 16}} name={icon} size={24} color="#393939"/>
                </TouchableOpacity>
            )
        });
    }, [navigation, icon]);

    return (
        <ScrollView>
            <Text style={styles.title}>{movie.title}</Text>
            <Image style={styles.poster} source={{uri: getPosterUrl(movie.poster_path)}} />
            <Text style={styles.description}>{movie.overview}</Text>
            <ActorList cast={movie.cast}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        margin: 16,
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        marginStart: 16,
        marginEnd: 16,
        justifyContent: 'space-evenly'
    },
    poster: {
        alignSelf: 'center',
        height: 300,
        width: '50%'
    },
    description: {
        fontSize: 17,
        flex: 1,
        margin: 16,
        textAlign: 'justify'
    },
    actorList: {

    },
    trailerButton: {

    }
});

export default DetailsScreen;