import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotReviews } from "../../store/reviews";
import { getOneSpot } from "../../store/spots";
import SpotReviews from "../Spots/SpotReviews";
import CreateReviewForm from "./CreateReviewForm";

function SpotPage () {
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const { spotId } = params;
    
    useEffect(() => {
        dispatch(getOneSpot(spotId));
        dispatch(getSpotReviews(spotId));
    }, [dispatch])
    
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.oneSpot);
    const reviewsObj = useSelector(state => state.reviews.Reviews)
    const reviews = Object.values(reviewsObj)
    //console.log('SPOT REVIEWS SESSION USER: ', sessionUser)
    
    //console.log('ORIGINAL spotId', spot.id)
    
    const { id } = sessionUser
    //console.log('SPOT REVIEWS SESSION USER ID: ', id)
    
    const handleClick = () => {
        setIsShown(current => !current);
        // setIsShown(true);
      };
    

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
                    //console.log('mapping spot reviews: ', review),
                    <SpotReviews key={review.id} review={review} sessionUser={sessionUser} />
                    // <div key={review.id}>
                    //     <p>{review.review}</p>
                    //     <button onClick={() => dispatch(deleteReview(review.id))}>Delete</button>
                    // </div>
                ))}
            <div>
                <button className="create-review-button" onClick={handleClick}>CREATE REVIEW</button>   
                {isShown && (
                    <CreateReviewForm setIsShown={setIsShown} spotId={spotId} />
                )} 
            </div>
            </div>
        </div>
    );
}


export default SpotPage;
