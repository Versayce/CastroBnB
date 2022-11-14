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
    //console.log('spots: ', spots)
    dispatch(loadSpots(spots))
}

const initialState = {}

const spotReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_SPOTS:
            const newState = { ...state}
            console.log('action payload: ', action.payload)
            return newState
        default:
            return state
    }
}

export default spotReducer;
