import axios from 'axios'

export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const SMURF_FAILURE = 'SMURF_FAILURE'
export const SMURF_LOAD = 'SMURF_LOAD'

export const getSmurf = () => dispatch => {
    
    dispatch({type: SMURF_LOAD})
    
    
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: SMURF_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: SMURF_FAILURE, payload: error.res})
    })
}