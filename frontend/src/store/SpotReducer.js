const LOAD_SPOTS = 'spots/load'

export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        payload: spots
    }
}

export const getSpots = () => async (dispatch) => {
    const res = await fetch('/api/spots')
    const spots = await res.json();
    dispatch(loadSpots(spots))
}

const initialState = {}
const spotReducer = (state = initialState, action) => {
    const newState = {...state}
    console.log('new State: ', newState)
    switch(action.type) {
        case LOAD_SPOTS:
            return newState
        default:
            return state
    }
}

export default spotReducer;
