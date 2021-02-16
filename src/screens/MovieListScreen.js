import React, { useContext, useEffect } from 'react';
import MoviesGrid from '../components/MoviesGrid';
import { AppContext } from '../context/AppContext';

const MovieListScreen = () => {
    const [{ feed }, { updateMovies }] = useContext(AppContext);

    useEffect(() => {
        updateMovies();
    }, []);

    return <MoviesGrid list={feed}/>;
};

export default MovieListScreen;