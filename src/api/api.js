const API_KEY = '9119ad863218cdaf1444afb520deb736';

const API_ENDPOINT = 'https://api.themoviedb.org/3/movie';
const POSTERS_ENDPOINT = 'https://image.tmdb.org/t/p/original'
const MOVIES_LIST_ROUTE = '/popular';
const MOVIE_DETAILS_ROUTE = '/credits'

const getMoviesListUrl = () => `${API_ENDPOINT}${MOVIES_LIST_ROUTE}?api_key=${API_KEY}`;
const getPosterUrl = (posterPath) => `${POSTERS_ENDPOINT}${posterPath}?api_key=${API_KEY}`;
const getCastUrl = (id) => `${API_ENDPOINT}/${id}${MOVIE_DETAILS_ROUTE}?api_key=${API_KEY}`;

export { getMoviesListUrl, getPosterUrl, getCastUrl };