import { seedfinderConstants } from '../constants';

const initialState = { fetching: false, breeders: [] }

export function seedfinder(state = initialState, action) {
  switch (action.type) {

    case seedfinderConstants.GET_BREEDER_REQUEST:
      return {
        fetching: true
      };
    case seedfinderConstants.GET_BREEDER_SUCCESS:
      return {
        breeder: action.breeder,
        fetching: false
      }
    case seedfinderConstants.GET_BREEDER_FAILURE:
      return {
        err: action.err,
        fetching: false
      }

    case seedfinderConstants.GET_STRAIN_REQUEST:
      return {
        fetching: true
      }
    case seedfinderConstants.GET_STRAIN_SUCCESS:
      return {
        strain: action.strain,
        fetching: false
      }
    case seedfinderConstants.GET_STRAIN_FAILURE:
      return {
        err: action.err,
        fetching: false
      }
    case seedfinderConstants.GET_BREEDERS_REQUEST:
      return {
        fetching: true
      };
    case seedfinderConstants.GET_BREEDERS_SUCCESS:
      return {
        breeders: action.breeders,
        fetching: false
      }
    case seedfinderConstants.GET_BREEDERS_FAILURE:
      return {
        err: action.err,
        fetching: false
      }

    case seedfinderConstants.SEARCH_STRAIN_REQUEST:
      return {
        fetching: true
      }
    case seedfinderConstants.SEARCH_STRAIN_SUCCESS:
      return {
        results: action.results,
        fetching: false
      }
    case seedfinderConstants.SEARCH_STRAIN_FAILURE:
      return {
        err: action.err,
        fetching: false
      }

    default:
      return state
  }
}