import { csrfFetch } from "./csrf"

const LOAD_SPOTS = 'spots/load'
const LOAD_ONE_SPOT = 'spots/loadOne'
const DELETE_SPOT = 'spots/delete'
const ADD_SPOT = 'spots/add'

export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    }
}

export const loadOneSpot = (spot) => {
    return {
        type: LOAD_ONE_SPOT,
        spot
    }
}

export const removeSpot = (spotId) => {
    return {
        type: DELETE_SPOT,
        spotId
    }
}

export const addSpot = (spot) => {
    return {
        type: ADD_SPOT,
        spot
    }
}

export const getSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots'); //use csrf fetch for all requests
    
    if(res.ok){
        const data = await res.json();
        dispatch(loadSpots(data.Spots))
    }
}

export const getOneSpot = (spotId) => async (dispatch) => {
    //console.log('Thunk Data: ', spotId)
    const res = await csrfFetch(`/api/spots/${spotId}`)

    if(res.ok) {
        const data = await res.json();
        //console.log('data: ', data)
        dispatch(loadOneSpot(data)) 
    }
}

export const deleteSpot = (spotId) => async (dispatch) => {
    //console.log('Thunk Data: ', spotId)
    const res = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE', 
    })

    if(res.ok) {
        //const data = await res.json();
        //console.log('data: ', data)
        dispatch(removeSpot(spotId)) 
    }
}

export const createSpot = (spot) => async (dispatch) => {
    const res = await csrfFetch('/api/spots/', {
        method: 'POST',
        headers: {'ContentType': 'application/json'},
        body: JSON.stringify(spot)
    })

    if(res.ok) {
        const data = await res.json()
        console.log('data: ', data)
        dispatch(addSpot(data))
    }
}

const initialState = { allSpots: {}, oneSpot: null }

const spotReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_SPOTS:
            return {
                ...state, 
                allSpots: action.spots
            }

        case LOAD_ONE_SPOT:
            return {
                ...state,
                oneSpot: action.spot
            };

        case DELETE_SPOT:
            return {
                ...state,
                allSpots: state.allSpots.filter(spot => spot.id !== action.spotId)
            }
        
        case ADD_SPOT:
            console.log('action data: ', action.spot)
            return {
                ...state,
                allSpots: state.allSpots.push(action.spot)
            }

        default:
            return state
    }
}

export default spotReducer;
