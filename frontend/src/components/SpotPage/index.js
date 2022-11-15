import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spots";

function SpotPage () {
    const dispatch = useDispatch();
    const params = useParams();
    //const { spotId } = params;
    const spot = useSelector(state => state.spots.oneSpot)
    console.log('spot: ', spot)

    useEffect(() => {
        dispatch(getOneSpot())
    }, [dispatch])

    return (
        <div className="spot-page">
            <p>{spot.address}</p>
        </div>
    );
}


export default SpotPage;
