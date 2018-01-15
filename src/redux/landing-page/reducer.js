import {  
  FETCHING_CITY_DETAILS,
  FETCHING_CITY_DETAILS_SUCCESS,
  FETCHING_CITY_DETAILS_FAILURE,

  FETCHING_WEATHER,
  FETCHING_WEATHER_SUCCESS,
  FETCHING_WEATHER_FAILURE,

  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './constants'

const initialState = {
  cityDetails: null,
  weatherData: null,
  favorites: [],
  isFetching: false,
  error: false
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_CITY_DETAILS:
      return {
        ...state,
        cityDetails: null,
        isFetching: true
      }
    case FETCHING_CITY_DETAILS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        cityDetails: action.data
      }
    case FETCHING_CITY_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case FETCHING_WEATHER:
      return {
        ...state,
        weatherData: null,
        isFetching: true
      }
    case FETCHING_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        weatherData: action.data
      }
    case FETCHING_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: action.data,
        isFetching: false,
        error: false
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.data,
        isFetching: false,
        error: false
      }
    default:
      return state
  }
}