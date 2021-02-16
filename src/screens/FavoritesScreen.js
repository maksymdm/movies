import React, { useContext, useState, useEffect } from 'react';
import MoviesGrid from '../components/MoviesGrid';
import { AppContext } from '../context/AppContext';
import EmptyList from '../components/EmptyList';
import SearchBar from '../components/SearchBar';
import { View, ScrollView } from 'react-native';

const FavoritesScreen = () => {
    const [{ favorites }] = useContext(AppContext);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setSearchResults(favorites.filter((item) => item.title.toLowerCase().includes(search)));
    }, [search]);

    return (
        <View style={{flex: 1, paddingBottom: 60}}>
            <SearchBar onChange={setSearch} text={search}/>
            {
                favorites.length !== 0
                ?
                <MoviesGrid list={searchResults.length !== 0 ? searchResults : favorites}/>
                : 
                <EmptyList />
            }
        </View>

    );
};

export default FavoritesScreen;