import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotReviews } from "../../store/reviews";
import { getOneSpot } from "../../store/spots";

function SpotPage () {
    const dispatch = useDispatch();
    const params = useParams();
    const { spotId } = params;
    
    useEffect(() => {
        dispatch(getOneSpot(spotId));
        dispatch(getSpotReviews(spotId));
    }, [dispatch])
    
    const spot = useSelector(state => state.spots.oneSpot);
    const reviewsObj = useSelector(state => state.reviews.Reviews)
    const reviews = Object.values(reviewsObj)
    console.log('SPOT REVIEWS: ', reviews)

    if(spot === null) return null
    return (
        <div className="spot-page">
            <div className="spot-details">
                <img src={spot.previewImage} className="spot-image" />
                <p>{spot.name}</p>
                <p>{spot.description}</p>
                <p>{spot.address}</p>
            </div>
            <div className="spot-reviews" reviews={reviews}>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default SpotPage;
