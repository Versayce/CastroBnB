import { csrfFetch } from "./csrf"

const LOAD_SPOTS = 'spots/load'

export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    }
}

export const getSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots'); //use csrf fetch for all requests

    if(res.ok){
        const data = await res.json();
        dispatch(loadSpots(data.Spots))
    }
}

const initialState = { allSpots: {}, oneSpot: {}}

const spotReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_SPOTS:
            const newState = { allSpots : {}, oneSpot: {}}
            //console.log('action payload: ', action.spots)
            action.spots.forEach(spot => {
                newState.allSpots[spot.id] = spot
            });
            return newState
        default:
            return state
    }
}

export default spotReducer;
