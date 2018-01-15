import axios from 'axios';
import qs from 'qs';
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

import getCities from '../../services/api';

export function getCityData() {
  return {
    type: FETCHING_CITY_DETAILS
  }
}

export function getCityDataSuccess(data) {
  return {
    type: FETCHING_CITY_DETAILS_SUCCESS,
    data,
  }
}

export function getCityDataFailure() {
  return {
    type: FETCHING_CITY_DETAILS_FAILURE
  }
}

export function fetchCityData() {
  return (dispatch) => {
    dispatch(getCityData())
    return getCities()
      .then((data) => {
        dispatch(getCityDataSuccess(data))
        return data;
      })
      .catch((err) => {
        console.log('err:', err);
        dispatch(getCityDataFailure());
        return err;
      })
  }
}

export function getWeatherData() {
  return {
    type: FETCHING_WEATHER
  }
}

export function getWeatherDataSuccess(data) {
  return {
    type: FETCHING_WEATHER_SUCCESS,
    data,
  }
}

export function getWeatherDataFailure() {
  return {
    type: FETCHING_WEATHER_FAILURE
  }
}

export function fetchWeatherData(q, appid, units) {
  console.log(q, appid, units);
  return (dispatch) => {
    dispatch(getWeatherData())
    return axios.get('http://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          q: q,
          appid: '2a52d5d378406463d7f492655ae21161',
          units: 'metric'
        }
      }
    )
      .then(function (response) {
        console.log('response', response);
        dispatch(getWeatherDataSuccess(response.data))
        return response.data;
      })
      .catch(function (error) {
        console.log('error', error);
        dispatch(getWeatherDataFailure());
        return error;
      });
  }
}

export function addFavorite(data) {
  return {
    type: ADD_FAVORITE,
    data
  }
}

export function addFavoriteCity(data) {
  console.log('add', data);
  return (dispatch) => {
    dispatch(addFavorite(data))
  }

}

export function removeFavorite(data) {
  return {
    type: REMOVE_FAVORITE,
    data
  }
}

export function removeFavoriteCity(data) {
  console.log('remove', data);
  return (dispatch) => {
    dispatch(removeFavorite(data))
  }

}