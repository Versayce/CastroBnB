import { csrfFetch } from "./csrf"

const LOAD_SPOTS = 'spots/load'
const LOAD_ONE_SPOT = 'spots/loadOne'
const DELETE_SPOT = 'spots/delete'
const ADD_SPOT = 'spots/add'
const ADD_SPOT_IMAGE = 'spots/spotId/addimages'
const EDIT_SPOT = '/spots/spotId/edit'

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

export const editSpot = (spot) => {
    return {
        type: EDIT_SPOT,
        spot
    }
}

export const addSpotImage = (spotImage, spotId) => {
    return {
        type: ADD_SPOT_IMAGE,
        spotImage,
        spotId
    }
}

export const getSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots'); //use csrf fetch for all requests
    
    if(res.ok){
        const data = await res.json();
        dispatch(loadSpots(data.Spots))
    }
}

export const getSpotsCurrent = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots/current'); //use csrf fetch for all requests
    
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
    //console.log('create spot param data: ', spot)
    const {address, city, state, country, name, description, price, imageUrl} = spot
    const lat = 37.76;
    const lng = -122.47;
    const res = await csrfFetch('/api/spots/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        })
    });
    //console.log('create res: ', res)

    if(res.ok) {
        const data = await res.json();
        const spotId = data.id
        if(imageUrl !== undefined) {
            dispatch(createSpotImage(spotId, imageUrl))
        }
        //console.log('data: ', data)
        dispatch(addSpot(data))
        return res;
    }
}

export const editSpotById = (spot) => async (dispatch) => {
    const {address, city, state, country, name, description, price, imageUrl, id} = spot
    console.log('ididididididid', id)
    const lat = 37.76;
    const lng = -122.47;
    const res = await csrfFetch(`/api/spots/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price,
        })
    })

    if(res.ok) {
        const data = await res.json();
        console.log('edit spot action data: ', data)
        if(imageUrl !== undefined) {
            dispatch(createSpotImage(id, imageUrl))
        }
        dispatch(editSpot(data))
    }
}

export const createSpotImage = (spotId, imageUrl) => async (dispatch) => {
    console.log('image data: ', imageUrl)
    const preview = true;
    const res = await csrfFetch(`/api/spots/${spotId}/images`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "spotId": spotId,
            "url": imageUrl,
            preview
        })
    })

    if(res.ok) {
        const data = await res.json();
        console.log('data: ', data)
        dispatch(addSpotImage(data, spotId))
    }
}

const initialState = { allSpots: [], oneSpot: null }

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
            return {
                ...state,
                allSpots: [...state.allSpots, action.spot],
                // oneSpot: action.spot
            }
        
        case EDIT_SPOT:
            return {
                ...state,
                allSpots: [...state.allSpots, action.spot],
                //oneSpot: action.spot
            }
        
        case ADD_SPOT_IMAGE:
            const spot = state.allSpots.find(spot => spot.id === action.spotId)
            const updatedSpot = {...spot, previewImage: action.spotImage.url, SpotImages: [...(spot.SpotImages ?? []), action.spotImage]}
            //const updatedSpot = {...spot, SpotImages: [...(spot.SpotImages ?? []), action.spotImage]} //TEST MORE
            return {
                ...state,
                allSpots: state.allSpots.map(spot => {
                   if (spot.id === updatedSpot.id) return updatedSpot
                   return spot;
                }),
                //oneSpot: updatedSpot
            }

        default:
            return state
    }
}

export default spotReducer;
