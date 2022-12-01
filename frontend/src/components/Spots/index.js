import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSpots } from "../../store/spots";
import SpotCard from "./SpotCard";
import './Spots.css'

const SpotList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const spotsObj = useSelector(state => state.spots.allSpots)
    const spots = Object.values(spotsObj);

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    return (
        <div className="spot-index">
            <div className="spot-container">
                {spots.map((spot) => (
                    <div key={spot.id} className="spot-card" onClick={() => history.push(`/spots/${spot.id}`)}>
                        <SpotCard spot={spot} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpotList;
