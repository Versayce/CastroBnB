import { csrfFetch } from "./csrf"

const LOAD_SPOTS = 'spots/load'
const LOAD_ONE_SPOT = 'spots/loadOne'

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

export const getSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots'); //use csrf fetch for all requests
    
    if(res.ok){
        const data = await res.json();
        dispatch(loadSpots(data.Spots))
    }
}

export const getOneSpot = ( spotId ) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/1`)

    if(res.ok) {
        const data = await res.json();
        //console.log('data: ', data)
        dispatch(loadOneSpot(data)) 
    }
}

const initialState = { allSpots: {}, oneSpot: {}}

const spotReducer = (state = initialState, action) => {
    const newState = { allSpots : {}, oneSpot: {}}
    switch(action.type) {

        case LOAD_SPOTS:
            //console.log('action payload: ', action.spots)
            action.spots.forEach(spot => {
                newState.allSpots[spot.id] = spot
            });
            return newState

        case LOAD_ONE_SPOT:
            //console.log('newstate: ', newState)
            newState.oneSpot = action.spot;
            return newState;

        default:
            return state
    }
}

export default spotReducer;
