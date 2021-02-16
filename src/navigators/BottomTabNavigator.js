import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MovieListStackNavigator, FavoritesStackNavigator } from './StackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenTag from './ScreenTag';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor:'#383838', keyboardHidesTabBar: true}}>
            <Tab.Screen
                options={{tabBarIcon: ({focused, color, size}) => { 
                    return <MaterialCommunityIcons name='movie-open' color={color} size={size}/>
                }}} 
                name={ScreenTag.MovieListTab} 
                component={MovieListStackNavigator}
            />
            <Tab.Screen 
                options={{tabBarIcon: ({focused, color, size}) => { 
                    return <MaterialCommunityIcons name='cards-heart' color={color} size={size}/>
                }}} 
                name={ScreenTag.FavoritesTab} 
                component={FavoritesStackNavigator}
            />
        </Tab.Navigator>
    );
};

export { BottomTabNavigator };