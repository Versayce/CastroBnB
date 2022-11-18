import { csrfFetch } from "./csrf"

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
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`); //use csrf fetch for all requests
    console.log('GET REVIEW RES: ', res)
    if(res.ok){
        const data = await res.json();
        console.log('GET REVIEW DATA: ', data)
        dispatch(loadSpotReviews(data))
    }
}

export const createSpotReview = (spotReview) => async (dispatch) => {
    const { review, stars } = spotReview
    const res = await csrfFetch(`/api/spots/${review.id}/reviews`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            review,
            stars
        })
    }); //use csrf fetch for all requests
    
    if(res.ok){
        const data = await res.json();
        console.log('CREATE SPOT DATA: ', data)
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

const initialState = { Reviews: [] }
const reviewReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_SPOT_REVIEWS:
            {
                console.log('action.reviews: ', action.reviews.Reviews)
                const newState = { Reviews: [] };
                action.reviews.Reviews.forEach(review => {
                    newState.Reviews[review.id] = review
                });
                return newState;
            }

        case ADD_REVIEW:
            {
                const newState = { Reviews: [] };
                newState.Reviews[action.review.id] = action.review;
                return newState;
            }

        case DELETE_REVIEW:
            {
                const newState = { Reviews: [...state.Reviews] };
                delete newState.Reviews[action.reviewId];
                return newState;
            }

        case EDIT_REVIEW:
            {
                const newState = { Reviews: [...state.Reviews] };
                newState.Reviews[action.review.id] = action.review;
                return newState;
            }

        default:
            return state;
    }
}

export default reviewReducer