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
        console.log('get current spots data: ', data)
        dispatch(loadCurrentSpots(data.Spots))
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

export const createSpot = (spot) => async (dispatch) => {  //make a fetch request for image within this thunk
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
            price,
            "previewImage": undefined
        })
    });
    //console.log('create res: ', res)

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
            console.log('imagedata: ', imageData.url)
            data.previewImage = imageData.url
        }
        dispatch(addSpot(data))
        return res;
    }
}

export const editSpotById = (spot) => async (dispatch) => {  //make a fetch request for image within this thunk
    const {address, city, state, country, name, description, price, previewImage, spotId} = spot
    console.log('preview image id', previewImage)
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
        })
    })
    if(res.ok) {
        const data = await res.json();
        if(previewImage !== undefined) {
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
            console.log('imagedata: ', imageData.url)
            data.previewImage = imageData.url
        }
        console.log('edit spot action data: ', data.previewImage)
        dispatch(editSpot(data))
    }
}

export const createSpotImage = (spotId, imageUrl) => async (dispatch) => { //not being used currently
    //console.log('image data: ', imageUrl)
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
        //console.log('data: ', data)
        dispatch(addSpotImage(data, spotId))
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
                const newState = { allSpots: {...state.allSpots},  oneSpot: {...state.oneSpot} };
                newState.oneSpot = action.spot;
                return newState;
            }

        case DELETE_SPOT:
            {
                const newState = { allSpots: {...state.allSpots}, oneSpot: {...state.oneSpot}};
                delete newState.allSpots[action.spotId]
                //delete newState.oneSpot[action.spotId]
                return newState
            }
            // return {
            //     ...state,
            //     allSpots: state.allSpots.filter(spot => spot.id !== action.spotId)
            // }
        
        case ADD_SPOT:
            {
                // console.log('add spot action: ', action.spot);
                const newState = { allSpots: {...state.allSpots}};
                newState.allSpots[action.spot.id] = action.spot;
                return newState;
            }
            // return {
            //     ...state,
            //     allSpots: [...state.allSpots, action.spot],
            //     // oneSpot: action.spot
            // }
        
        case EDIT_SPOT:
            {
                console.log('EDIT ACTION SPOT: ', action.spot)
                const newState = { allSpots: {...state.allSpots}, oneSpot: {...state.oneSpot}};
                console.log('ALL SPOTS FROM EDIT SPOT NEWSTATE: ', newState.allSpots)
                newState.allSpots[action.spot.id] = action.spot;
                return newState;
            }
            // console.log('edit reducer action', action.spot)
            // return {
            //     ...state,
            //     allSpots: [...state.allSpots, action.spot],
            //     //oneSpot: action.spot
            // }
        
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
