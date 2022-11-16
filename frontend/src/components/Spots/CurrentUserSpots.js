import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSpots, getOneSpot } from "../../store/spots";
import CurrentUserSpotCard from "./UserSpotCard";
import './Spots.css'

const CurrentUserSpots = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const { spotId } = params;

    const sessionUser = useSelector(state => state.session.user);
    const { id } = sessionUser;
    const spotsObj = useSelector(state => state.spots.allSpots);
    const spots = Object.values(spotsObj);
    const filteredSpots = spots.filter(spot => spot.ownerId === id)
    //console.log('Current User Spots: ', id)

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    //console.log('spots: ', spots)
    //console.log('spotsOBJ: ', spotsObj)
    return (
        <div className="spot-container">
            {filteredSpots.map((spot) => (
                <div key={spot.id} className="spot-card" onClick={() => history.push(`/spots/${spot.id}`)}>
                    <CurrentUserSpotCard spot={spot} />
                </div>
            ))}
        </div>
    )
}

export default CurrentUserSpots;
