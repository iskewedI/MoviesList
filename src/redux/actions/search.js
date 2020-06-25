import * as actions from '../../consts/actionTypes';

export const searchMovie = payload => {
    return ({
        type: actions.SEARCH_MOVIE_START,
        payload 
    });
} 

export const searchMovieById = payload => ({
    type: actions.SEARCH_MOVIE_BY_ID_START,
    payload
})