import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL, DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAIL} from '../actions/index'

const initialState = {
    isWaiting: false,
    currentSmurfs: [
        {
            name: "TestCase",
            age: 200,
            height: "5cm",
            id: 0
        }
    ],
    deletedSmurfs: [
        {
            name: "Dead Weight",
            age: 500,
            height: "10cm",
            id: new Date()
        }
    ] 
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        //fetch smurf actions
        case FETCH_SMURF_START:
            return {
                ...state,
                isWaiting: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isWaiting: false,
                currentSmurfs: action.payload
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isWaiting: false
            }
        //add smurf actions
        case ADD_SMURF_START:
            return {
                ...state,
                isWaiting: true
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                isWaiting: false
            }
        case ADD_SMURF_FAIL:
            return {
                ...state,
                isWaiting: false
            }
        //delete smurf actions
        case DELETE_SMURF_START:
            return {
                ...state,
                isWaiting: true
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                isWaiting: false
            }
        case DELETE_SMURF_FAIL:
            return {
                ...state,
                isWaiting: false
            }
        //default action
        default: 
            return state
        
    }
    
}