import axios from 'axios'

export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL"
export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL"
export const DELETE_SMURF_START = "DELETE_SMURF_START"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL"


//this will initially fetch the smurfs
export const getSmurfs = () => dispatch => { 
    dispatch({type: FETCH_SMURF_START})

    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    
}

export const addSmurf = (smurf) => dispatch => {
    dispatch({type: ADD_SMURF_START})

    axios.post('http://localhost:3333/smurfs/', smurf)
        .then(res => {
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
}

export const murderSmurf = () => dispatch => {
    //fill in for stretch
}