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
            <Wrapper>
                <UserBookings>
                    <h2>Bookings:</h2>
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
            </Wrapper>
        </div>
    )
}

export default CurrentUserSpots;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const UserBookings = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    overflow-y: scroll;
    /* border: solid red 2px; */

    /* margin: 0px 200px 0px 200px; */
    width: 600px;
    font-family: 'Manrope', sans-serif;
`
const Booking = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    padding: 10px;
    background-color: #ebebeb;
    &:hover {
        background-color: #e4e4e4;
    }
`

const StyledButton = styled.button`
    margin-top: 0px;
    border: none;
    padding: 3px 6px 3px 6px;
    border-radius: 3px;
    background-color: rgb(63, 63, 63);
    color: white;
    font-size: 10pt;
    position: relative;
    overflow: hidden;
    justify-content: center;
    &:hover {
        background-color: rgb(227, 28, 95);
        cursor: pointer;
    }
`
