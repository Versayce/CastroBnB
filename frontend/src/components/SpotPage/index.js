import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spots";

function SpotPage () {
    const dispatch = useDispatch();
    const params = useParams();
    const { spotId } = params;
    
    useEffect(() => {
        dispatch(getOneSpot(spotId))
    }, [dispatch])
    
    const spot = useSelector(state => state.spots.oneSpot);
    console.log('spot: ', spot)
    if(spot === null) return null
    return (
        <div className="spot-page">
            <img src={spot.SpotImages[0]?.url ?? spot.previewImage} className="spot-image" />
            <p>{spot.name}</p>
            <p>{spot.description}</p>
            <p>{spot.address}</p>
        </div>
    );
}


export default SpotPage;
