import { csrfFetch } from "./csrf"

const LOAD_SPOTS = 'spots/load'
const LOAD_ONE_SPOT = 'spots/loadOne'
const DELETE_SPOT = 'spots/delete'
const ADD_SPOT = 'spots/add'
const ADD_SPOT_IMAGE = 'spots/spotId/addimages'
const EDIT_SPOT = '/spots/spotId/edit'
const LOAD_CURRENT_SPOTS = '/spots/load/current'


//------------------------------ ACTIONS ------------------------------//

export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    }
}

export const loadCurrentSpots = (spots) => {
    return {
        type: LOAD_CURRENT_SPOTS,
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
    console.log('edit spot action info: ', spot)
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


//------------------------------ THUNKS ------------------------------//

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
        dispatch(loadCurrentSpots(data.Spots))
    }
}

export const getOneSpot = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}`)

    if(res.ok) {
        const data = await res.json();
        dispatch(loadOneSpot(data)) 
    }
}

export const deleteSpot = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE', 
    })

    if(res.ok) {
        dispatch(removeSpot(spotId)) 
    }
}

export const createSpot = (spot) => async (dispatch) => {  //make a fetch request for image within this thunk
    const {address, city, state, country, name, description, price, imageUrl} = spot.createSpotData
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
            price,
            "previewImage": undefined
        })
    });

    if(res.ok) {
        const data = await res.json();
        const spotId = data.id
        if(imageUrl !== undefined) {
            const preview = true;
            const res2 = await csrfFetch(`/api/spots/${spotId}/images`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "spotId": spotId,
                    "url": imageUrl,
                    preview
                })
            })
            const imageData = await res2.json();
            data.previewImage = imageData.url
        }

        dispatch(addSpot(data))
        return res;
    }
}

export const editSpotById = (spot) => async (dispatch) => {  //make a fetch request for image within this thunk
    const {address, city, state, country, name, description, price, previewImage, spotId, avgRating} = spot.editSpotData
    console.log('1st data instance: ', spot.editSpotData)
    const lat = 37.76;
    const lng = -122.47;
    const res = await csrfFetch(`/api/spots/${spotId}`, {
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
            avgRating,
        })
    })
    if(res.ok) {
        const data = await res.json();
        console.log('First Response Data: ', data)
        if(previewImage !== undefined || previewImage !== null) {
            const preview = true;
            const res2 = await csrfFetch(`/api/spots/${spotId}/images`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "spotId": spotId,
                    "url": previewImage,
                    preview
                })
            })
            const imageData = await res2.json();
            console.log('Second Response Data ', imageData)
            console.log('edit thunk image data: ', imageData)
            data.previewImage = imageData.url
            console.log('edit thunk data prev image: ', data.previewImage)
        }
        data.avgRating = avgRating;
        dispatch(editSpot(data))
        // dispatch(getSpotsCurrent())
    }
}

//------------------------------ REDUCER ------------------------------//

const initialState = { allSpots: {}, oneSpot: {} }
const spotReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_SPOTS:
            {
                const newState = { allSpots: {...state.allSpots}, oneSpot: {...state.oneSpot} };
                action.spots.forEach(spot => {
                    newState.allSpots[spot.id] = spot
                });
                return newState;
            }

        case LOAD_CURRENT_SPOTS:
            {
                const newState = { allSpots: {}, oneSpot: {} };
                action.spots.forEach(spot => {
                    newState.allSpots[spot.id] = spot
                });
                return newState;
            }

        case LOAD_ONE_SPOT:
            {
                const newState = { allSpots: {}, oneSpot: {...action.spot} };
                newState.oneSpot = {...action.spot};
                newState.oneSpot.SpotImages = [...action.spot.SpotImages]
                return newState
            }

        case DELETE_SPOT:
            {
                const newState = { allSpots: {...state.allSpots}, oneSpot: {...state.oneSpot}};
                delete newState.allSpots[action.spotId]
                return newState
            }
        
        case ADD_SPOT:
            {
                const newState = { allSpots: {...state.allSpots}, oneSpot: {} };
                newState.allSpots[action.spot.id] = action.spot;
                return newState;
            }
        
        case EDIT_SPOT:
            {
                const newState = { allSpots: {...state.allSpots}, oneSpot: {} };
                newState.allSpots[action.spot.id] = action.spot;
                newState.oneSpot = action.spot
                newState.oneSpot.previewImage = action.spot.previewImage
                return newState;
            }
        
        case ADD_SPOT_IMAGE:
            const spot = state.allSpots.find(spot => spot.id === action.spotId)
            const updatedSpot = {...spot, previewImage: action.spotImage.url, SpotImages: [...(spot.SpotImages ?? []), action.spotImage]}
            return {
                ...state,
                allSpots: state.allSpots.map(spot => {
                   if (spot.id === updatedSpot.id) return updatedSpot
                   return spot;
                }),
            }

        default:
            return state
    }
}

export default spotReducer;
