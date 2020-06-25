// import { get } from 'lodash';
import * as actions from "../../consts/actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case actions.SEARCH_MOVIE_START:
      return { ...state, isLoading: true };
    case actions.SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movieResults: null };
    case actions.SEARCH_MOVIE_COMPLETE:
      return { ...state, isLoading: false, movieResults: action.results.data };

    case actions.SEARCH_MOVIE_BY_ID_START:
      return { ...state, isLoading: true, movieResult: null };
    case actions.SEARCH_MOVIE_BY_ID_ERROR:
      return { ...state, isLoading: false, movieResult: null };
    case actions.SEARCH_MOVIE_BY_ID_COMPLETE:
      return { ...state, isLoading: false, movieResult: action.movie.data };

    default:
      return { ...state };
  }
}
