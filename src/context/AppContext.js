import React, { useReducer } from 'react';
import { getMoviesListUrl, getCastUrl } from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = React.createContext();

const ASYNC_STORAGE_KEY = '@application_state';

const UPDATE_MOVIES_ACTION = 'get_movies';
const UPDATE_FAVORITES_ACTION = 'get_favorites';
const UPDATE_STATE_FROM_DB = 'update_from_db';

const moviesReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_MOVIES_ACTION: {
            const newState = { ...state, feed: action.payload };
            storeData(newState);
            return newState;
        }
        case UPDATE_FAVORITES_ACTION: {
            const newState = { ...state, favorites: action.payload };
            storeData(newState);
            return newState;
        }
        case UPDATE_STATE_FROM_DB:
            return action.payload;
        default:
            return state;
    }
}

const storeData = async (data) => {
    try {
        const value = JSON.stringify(data);
        await AsyncStorage.setItem(ASYNC_STORAGE_KEY, value);
    } catch (e) {
        console.log(e);
    }
}

const getData = async () => {
    try {
        const data = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
        return data != null ? await JSON.parse(data) : null;
    } catch (e) {
        console.log(e);
    }
}

const initialState = {
    feed: [],
    favorites: []
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(moviesReducer, initialState);

    const updateMovies = async () => {
        try {
            const storedData = await getData();
            if(storedData != null) {
                dispatch({type: UPDATE_STATE_FROM_DB, payload: storedData });
                return;
            }
            const response = await fetch(getMoviesListUrl());
            const responseJson = await response.json();
            const movies = await Promise.all(responseJson.results.map( 
                async ({id, title, overview, poster_path, release_date, vote_average}) => {
                    const cast = await getCast(id);
                    return { id, title, overview, poster_path, release_date, vote_average, cast };
            }));
            dispatch({type: UPDATE_MOVIES_ACTION, payload: movies});
        } catch(e) {
            console.log(e.message);
        }
    };

    const getCast = async (movieId) => {
        try {
            const response = await fetch(getCastUrl(movieId));
            const responseJson = await response.json();
            const cast = responseJson.cast.filter((person) => person.known_for_department === 'Acting');
            return cast;
        } catch (e) {
            console.log(e.message);
        }
    };

    const updateFavorites = (favorites) => {
        dispatch({type: UPDATE_FAVORITES_ACTION, payload: favorites || []});
    };

    const actions = { updateMovies, updateFavorites };

    return (
        <AppContext.Provider value={[state, actions]}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };