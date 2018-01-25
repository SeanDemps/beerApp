import { adaptBeerData } from './app-adapters';

import breweryService from '../services/breweryService';

const actionTypes = {
  START_BEER_LOAD: 'START_BEER_LOAD',
  BEER_LOADED: 'BEER_LOADED',
  BEER_LOAD_ERROR: 'BEER_LOAD_ERROR',
  DISPLAY_BREWERY_CARD: 'DISPLAY_BREWERY_CARD',
  HIDE_BREWERY_CARD: 'HIDE_BREWERY_CARD'
};

// should separate out displayBreweryCard logic from data load data, and use a combine reducers function elsewhere.
export const reducer = (state = [], action) => {
    switch (action.type) {
      case actionTypes.START_BEER_LOAD:
        return {
          ...state,
          loading: true
        }
      case actionTypes.BEER_LOADED:
        return {
          ...state,
          beerInfo: action.data.beerInfo,
          breweryInfo: action.data.breweryInfo,
          loading: false
        }
      case actionTypes.BEER_LOAD_ERROR:
        return {
          ...state,
          error: action.error
        }
      case actionTypes.DISPLAY_BREWERY_CARD:
        return {
          ...state,
          shouldDisplayBreweryCard: true
        }
      case actionTypes.HIDE_BREWERY_CARD:
        return {
          ...state,
          shouldDisplayBreweryCard: false
        }
      default:
        return state
    }
  }

function startBeerLoad() {
  return {
    type: actionTypes.START_BEER_LOAD
  }
};

function beerLoaded(data) {
  return {
    type: actionTypes.BEER_LOADED,
    data
  }
};

function beerLoadError(error) {
  return {
    type: actionTypes.BEER_LOAD_ERROR,
    error
  }
};
  
export function fetchBeer() {
  return function(dispatch) {
    dispatch(startBeerLoad());
    return breweryService.getBeer().then(data => {
      const adaptedData = adaptBeerData(data);
      dispatch(beerLoaded(adaptedData));
    }).catch(error => {
      beerLoadError(error);
    })
  };
}

export function displayBreweryCard() {
  return {
    type: actionTypes.DISPLAY_BREWERY_CARD
  }
}

export function hideBreweryCard() {
  return {
    type: actionTypes.HIDE_BREWERY_CARD
  }
}