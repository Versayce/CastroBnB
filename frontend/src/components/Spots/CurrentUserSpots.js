import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpotsCurrent } from "../../store/spots";
import CurrentUserSpotCard from "./UserSpotCard";
import './SpotCard.css'


const CurrentUserSpots = () => {
    const dispatch = useDispatch();

    const spotsObj = useSelector(state => state.spots.allSpots);
    const spots = Object.values(spotsObj);
    //console.log('current user spots: ', spotsObj)

    useEffect(() => {
        dispatch(getSpotsCurrent())
    }, [dispatch])

    return (
        <div className="spot-index">
            <div className="page">
                <div className="spot-container">
                    {spots.map((spot) => (
                        <div key={spot.id} className="spot-card">
                            <CurrentUserSpotCard spot={spot} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CurrentUserSpots;
