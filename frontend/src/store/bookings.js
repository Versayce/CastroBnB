import { csrfFetch } from "./csrf"

const LOAD_CURRENT_BOOKINGS = '/bookings/load/current'
const DELETE_BOOKING = '/bookings/delete'


//------------------------------ ACTIONS ------------------------------//
export const loadCurrentBookings = (bookings) => {
    return {
        type: LOAD_CURRENT_BOOKINGS,
        bookings
    }
}

export const deleteBooking = (bookingId) => {
    return {
        type: DELETE_BOOKING,
        bookingId
    }
}


//------------------------------ THUNKS ------------------------------//
export const createBookingsBySpotId = (bookingInfo) => async () => {
    const {spotId, startDate, endDate} = bookingInfo
    const res = await csrfFetch(`/api/spots/${spotId}/bookings`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'startDate': startDate,
            'endDate': endDate
        })
    })
    if(res.ok) {
        res.message = "Successfully Created Booking"
        const data = await res.json();
        return data
    }
}

export const editBookingsById = (bookingInfo) => async () => {
    const {bookingId, startDate, endDate} = bookingInfo
    console.log('IN BOOKING THUNK', bookingInfo)
    const res = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'startDate': startDate,
            'endDate': endDate
        })
    })
    if(res.ok) {
        res.message = "Successfully Edited Booking"
        const data = await res.json();
        return data
    }
}

export const getBookings = () => async (dispatch) => {
    const res = await csrfFetch('/api/bookings/current')

    if(res.ok){
        const data = await res.json();
        dispatch(loadCurrentBookings(data.Bookings))
    }
}

export const deleteBookingById = (bookingId) => async (dispatch) => {
    const res = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
    })

    if(res.ok){
        const data = await res.json();
        console.log('THUNK DATA', data)
        dispatch(deleteBooking(bookingId))
    }
}


//------------------------------ REDUCER ------------------------------//

const initialState = { userBookings: {}, oneBooking: {} }
const bookingReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOAD_CURRENT_BOOKINGS:
            {
                const newState = { userBookings: {}, oneBooking: {} };
                console.log('INSIDE REDUCER BOOKINGS', action.bookings)
                action.bookings.forEach(booking => {
                    newState.userBookings[booking.id] = booking
                });
                return newState;
            }

        case DELETE_BOOKING:
            {
                const newState = { userBookings: {...state.userBookings}, oneBooking: {...state.oneBooking} };
                console.log('INSIDE REDUCER BOOKINGS', action.booking)
                delete newState.userBookings[action.bookingId]
                delete newState.oneBooking[action.bookingId]
                return newState;
            }

        default:
            return state
    }
}

export default bookingReducer
