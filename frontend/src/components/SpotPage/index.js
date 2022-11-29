import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotReviews } from "../../store/reviews";
import { getOneSpot } from "../../store/spots";
import SpotReviews from "../Spots/SpotReviews";
import CreateReviewForm from "./CreateReviewForm";
import './SpotPage.css'

function SpotPage () {
    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const { spotId } = params;
    
    
    const sessionUser = useSelector(state => state.session.user);
    const reviewsObj = useSelector(state => state.reviews.Reviews);
    const spot = useSelector(state => state.spots.oneSpot);
    const reviews = Object.values(reviewsObj);
    const images = spot.SpotImages;


    useEffect(() => {
        dispatch(getOneSpot(spotId));
        dispatch(getSpotReviews(spotId));
    }, [dispatch]);
    

    //console.log('SINGLE SPOT PAGE SPOT: ', spot)
    //console.log('SPOT REVIEWS SESSION USER: ', sessionUser)
    //console.log('ORIGINAL spotId', spot.id)
    
    const handleClick = () => {
        setIsShown(current => !current);
        // or use setIsShown(true);
      };
    

    if(spot === null) return null
    return (
        <div className="spot-page-index">
            <div className="spot-page-wrapper">
                <h1 id="spot-title">{spot.name}</h1>
                <div className="spot-page-subheader">
                    <h3 id="host-status">Superhost</h3>
                    <ul><li><h3 id="spot-location">{`${spot.city}, ${spot.state}`}</h3></li></ul>
                </div>
                <div className="spot-image-container">
                    <div className="spot-first-image">
                        <img src={spot.previewImage} className="spot-image-inside" />
                    </div>
                    <div className="spot-secondary-images-container">
                        {/* ADD REMAINING IMAGES HERE */}
                        {spot.SpotImages && spot.SpotImages.length !== 0 && 
                            spot.SpotImages.slice(1, 5).map(image => (<img className='secondary-image' key={image.id} src={image.url}></img>))
                            //spot.SpotImages.map(image => (<img src={image.url}></img>)) // use after fixing issue with backend previewimages
                            // <>
                            //     <img src={spot.SpotImages[1].url}></img>
                            //     <img src={spot.SpotImages[2].url}></img>
                            //     <img src={spot.SpotImages[3].url}></img>
                            //     <img src={spot.SpotImages[4].url}></img>
                            // </>
                        }
                    </div>
                </div>

                <div id="spot-info">
                    <div className="spot-details">
                        <div className="spot-titles">
                            <h1>{`Hosted By: ${spot.Owner?.firstName}`}</h1>
                            <h3>{spot.address}</h3>
                        </div>
                        <h4>{spot.description}</h4>
                    </div>

                    <div id="review-section">
                        <h1>Reviews</h1>

                        <div className="spot-reviews" reviews={reviews}>
                            {reviews.map((review) => (
                                <SpotReviews key={review.id} review={review} />
                            ))}
                        </div>

                        <div className="spot-review-form">
                            <span id='review-form-button'>
                                <input type="submit" onClick={handleClick} value='Leave a Review' />
                            </span>
                            {isShown && (
                                <CreateReviewForm setIsShown={setIsShown} spotId={spotId} />
                            )} 
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    );
}


export default SpotPage;
