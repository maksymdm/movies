import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from '../screens/MovieListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ScreenTag from './ScreenTag';

const MovieListStack = createStackNavigator();
const FavoritesStack = createStackNavigator();

const MovieListStackNavigator = () => {
    return (
        <MovieListStack.Navigator>
            <MovieListStack.Screen name={ScreenTag.MovieList} component={MovieListScreen}/>
            <MovieListStack.Screen name={ScreenTag.Details} component={DetailsScreen}/>
        </MovieListStack.Navigator>
    );
};

const FavoritesStackNavigator = () => {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen name={ScreenTag.Favorites} component={FavoritesScreen}/>
            <FavoritesStack.Screen name={ScreenTag.Details} component={DetailsScreen}/>
        </FavoritesStack.Navigator>
    );
};

export { MovieListStackNavigator, FavoritesStackNavigator };