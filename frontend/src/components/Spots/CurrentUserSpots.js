import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotsCurrent } from "../../store/spots";
import CurrentUserSpotCard from "./UserSpotCard";
import './SpotCard.css'


const CurrentUserSpots = () => {
    const dispatch = useDispatch();

    const spotsObj = useSelector(state => state.spots.allSpots);
    const spots = Object.values(spotsObj);
    console.log('current user spots: ', spots.length)

    useEffect(() => {
        dispatch(getSpotsCurrent())
    }, [dispatch])

    return (
        <div className="spot-index">
            <div className="page">
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
