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
            <img src={spot.SpotImages[0]?.url ?? 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2F1998-subaru-22b-sti-1998-subaru-1653928866.jpg&imgrefurl=https%3A%2F%2Fwww.roadandtrack.com%2Fnews%2Fa40144114%2Fyou-can-buy-the-fifth-subaru-22b-sti%2F&tbnid=mHqcLjpYrCGTLM&vet=12ahUKEwiduOXOyrH7AhVWno4IHb8NBHIQMygEegUIARDrAQ..i&docid=sC5xlhxBSFCUqM&w=940&h=627&q=subaru%2022b&ved=2ahUKEwiduOXOyrH7AhVWno4IHb8NBHIQMygEegUIARDrAQ'} className="spot-image" />
            <p>{spot.name}</p>
            <p>{spot.description}</p>
            <p>{spot.address}</p>
        </div>
    );
}


export default SpotPage;
