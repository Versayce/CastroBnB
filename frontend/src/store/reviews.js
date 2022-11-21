import { csrfFetch } from "./csrf"
import { REMOVE_USER } from "./session"

const LOAD_SPOT_REVIEWS = 'reviews/load'
const DELETE_REVIEW = 'reviews/delete'
const ADD_REVIEW = 'reviews/add'
const EDIT_REVIEW = '/reviews/reviewId/edit'


//------------------------------ ACTIONS ------------------------------//

export const loadSpotReviews = (reviews) => {
    return {
        type: LOAD_SPOT_REVIEWS,
        reviews
    }
}

export const addSpotReview = (review) => {
    console.log('ACTION DATA FOR REVIEW: ', review)
    return {
        type: ADD_REVIEW,
        review
    }
}

export const EditSpotReview = (review) => {
    return {
        type: EDIT_REVIEW,
        review
    }
}

export const removeSpotReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

//------------------------------ THUNKS ------------------------------//

export const getSpotReviews = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`); 
    //console.log('GET REVIEW RES: ', res)
    if(res.ok){
        const data = await res.json();
        //console.log('GET REVIEW DATA: ', data)
        dispatch(loadSpotReviews(data))
    }
}

export const createSpotReview = (spotReview, spotId) => async (dispatch) => {
    //console.log('THUNK: createSpotReview: ', spotReview, 'ID VAL: ', spotId)
    const { review, stars, User } = spotReview
    console.log('THUNK USER', User)
    //console.log('THUNK: createSpotReview stars VAL: ', stars)
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            User,
            review,
            stars
        })
    });

    console.log('response: ', res)
    
    if(res.ok){
        const data = await res.json();
        console.log('CREATE SPOT REVIEW DATA: ', data)
        dispatch(addSpotReview(data))
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(removeSpotReview(reviewId))
    }
}

//------------------------------ REDUCER ------------------------------//

const initialState = { Reviews: {} }
const reviewReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_SPOT_REVIEWS:
            {
                //console.log('action.reviews: ', action.reviews.Reviews)
                const newState = { Reviews: {} };
                action.reviews.Reviews.forEach(review => {
                    newState.Reviews[review.id] = review
                });
                return newState;
            }

        case ADD_REVIEW:
            {
                const newState = { Reviews: {...state.Reviews} };
                newState.Reviews[action.review.id] = action.review;
                return newState;
            }

        case DELETE_REVIEW:
            {
                const newState = { Reviews: {...state.Reviews} };
                delete newState.Reviews[action.reviewId];
                return newState;
            }

        case EDIT_REVIEW:
            {
                const newState = { Reviews: [...state.Reviews] };
                newState.Reviews[action.review.id] = action.review;
                return newState;
            }

        // case REMOVE_USER:
        //     {
        //         return initialState;
        //     }

        default:
            return state;
    }
}

export default reviewReducer
