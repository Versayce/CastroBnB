import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotsCurrent } from "../../store/spots";
import CurrentUserSpotCard from "./UserSpotCard";
import './SpotCard.css'
import styled from 'styled-components'
import { deleteBookingById, getBookings } from "../../store/bookings";


const CurrentUserSpots = () => {
    const dispatch = useDispatch();

    const spotsObj = useSelector(state => state.spots.allSpots);
    const spots = Object.values(spotsObj);

    const userBookingsObj = useSelector(state => state.bookings.userBookings)
    const userBookings = Object.values(userBookingsObj);

    console.log('USER COMPONENT========', userBookingsObj)

    const handleDelete = (bookingId) => {
        dispatch(deleteBookingById(bookingId))
    }

    useEffect(() => {
        dispatch(getSpotsCurrent())
        dispatch(getBookings())
    }, [dispatch])

    return (
        <div className="spot-index">
            <div className="page">
                <UserBookings>
                    <h2>Bookings</h2>
                    {userBookings.length ? userBookings.map((booking) => (
                        <Booking key={booking.id}>
                            <p>{booking.Spot.name}</p>
                            <StyledButton onClick={() => handleDelete(booking.id)}>Cancel Booking</StyledButton>
                        </Booking>
                    )) : <h2 style={{marginTop: 40}}>No bookings have been added. Locations you've booked will show up here!</h2>}
                </UserBookings>

                <div className="spot-container">
                    {spots.length ? spots.map((spot) => (
                        <div key={spot.id} className="spot-card">
                            <CurrentUserSpotCard spot={spot} />
                        </div>
                    )) : <h1 style={{marginTop: 40}}>No listings have been added. Please add a listing.</h1>}
                    
                </div>
            </div>
        </div>
    )
}

export default CurrentUserSpots;

const UserBookings = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    overflow-y: scroll;
    border: solid red 2px;
`
const Booking = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    border: solid green 2px;
    padding: 10px;
`

const StyledButton = styled.button`

`
