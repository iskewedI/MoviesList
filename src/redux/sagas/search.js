import { put, call, takeLatest } from 'redux-saga/effects';

import * as actions from '../../consts/actionTypes';

import { apiCall } from '../api';

export function* searchMovie( data ) {
    const payload = data.payload;

    try{ 
        const results = yield call( apiCall, `&s=${payload.movieName}`, null, null, 'GET' )
        if( typeof results.data.Error !== "undefined" ){
            yield put( { type: actions.SEARCH_MOVIE_ERROR, error: results.data.Error} );
        }else{
            yield put( { type: actions.SEARCH_MOVIE_COMPLETE, results } );
        }

    } catch( error ) {
        yield put( { type: actions.SEARCH_MOVIE_ERROR, error} );
    }
}
export function* searchMovieById( data ){
    const payload = data.payload;

    try{
      const movie = yield call( apiCall, `&i=${payload.movieId}`, null, null, 'GET' )
      yield put( { type: actions.SEARCH_MOVIE_BY_ID_COMPLETE, movie} );
    } catch ( error ) {
        yield put( { type: actions.SEARCH_MOVIE_BY_ID_ERROR, error} );
    }
}

export default function* search() {
    yield takeLatest( actions.SEARCH_MOVIE_START, searchMovie );
    yield takeLatest( actions.SEARCH_MOVIE_BY_ID_START, searchMovieById );
}