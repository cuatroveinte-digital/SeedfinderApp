import { seedfinderConstants } from '../constants'
import { seedfinderService } from '../services'

export const seedfinderActions = {
  getBreeders,
  searchStrain, 
  getStrain,
  getBreeder
}

function getBreeder(id) {
  return dispatch => {
    dispatch(request())
    seedfinderService.getBreeder(id)
    .then(
      breeder => {
        dispatch(success(breeder))
      },
      err => {
        dispatch(failure(err.toString()))
      }
    )
  }

  function request() { return { type: seedfinderConstants.GET_BREEDER_REQUEST } }
  function success(breeder) { return { type: seedfinderConstants.GET_BREEDER_SUCCESS, breeder } }
  function failure(err) { return { type: seedfinderConstants.GET_BREEDER_FAILURE, err } }
}

function getStrain(strain, breeder) {
  return dispatch => {
    dispatch(request())
    seedfinderService.getStrain(strain, breeder)
    .then(
      strain => {
        dispatch(success(strain))
      },
      err => {
        dispatch(failure(err.toString()))
      }
    )
  }

  function request() { return { type: seedfinderConstants.GET_STRAIN_REQUEST } }
  function success(strain) { return { type: seedfinderConstants.GET_STRAIN_SUCCESS, strain } }
  function failure(err) { return { type: seedfinderConstants.GET_STRAIN_FAILURE, err } }
}

function getBreeders() {
  return dispatch => {
    dispatch(request())
    seedfinderService.getBreeders()
      .then(
        breedersList => {
          dispatch(success(breedersList))
        },
        err => {
          dispatch(failure(err.toString()))
        }
      )
  }

  function request() { return { type: seedfinderConstants.GET_BREEDERS_REQUEST } }
  function success(breedersList) { return { type: seedfinderConstants.GET_BREEDERS_SUCCESS, breedersList } }
  function failure(err) { return { type: seedfinderConstants.GET_BREEDERS_FAILURE, err } }

}

function searchStrain(query) {
  return dispatch => {
    dispatch(request())
    seedfinderService.search(query)
      .then(
        results => {
          dispatch(success(results))
        },
        err => {
          dispatch(failure(err.toString()))
        }
      )
  }

  function request() { return { type: seedfinderConstants.SEARCH_STRAIN_REQUEST } }
  function success(results) { return { type: seedfinderConstants.SEARCH_STRAIN_SUCCESS, results } }
  function failure(err) { return { type: seedfinderConstants.SEARCH_STRAIN_FAILURE, err } }

}