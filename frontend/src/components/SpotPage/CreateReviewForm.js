import React, { startTransition, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpotReview } from "../../store/reviews";

function CreateReviewForm({ spotId, setIsShown }) {
    const dispatch = useDispatch();
  
    const spot = useSelector(state => state.spots.oneSpot)
    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews.Reviews)

    const [review, setReview] = useState("");
    const [stars, setStars] = useState(0);
    const [errors, setErrors] = useState([]);
    
    
    //console.log("This is the user:", user)
    //console.log('review form spotId: ', spotId)
    console.log('review form stars: ', stars)

    const handleSubmit = async (e) => {
      e.preventDefault();

      const editedSpot = {
          // "User": user,
        review,
        stars
      }

      if(Number(stars) > 5 || Number(stars) <= 0) {
        return setErrors(['Rating must be a number from 1-5'])
      }
      if(review.length < 10) {
        return setErrors(['Review length must be 10 or greater'])
      }

      
      return dispatch(createSpotReview(editedSpot, spotId))
        .then(() => setIsShown(false))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.message) setErrors([data.message]);
        })
    };

    return (
      <form id="form-review" onSubmit={handleSubmit}>
        
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Review"
            required
            />
        
        <label>Stars</label>
          <input
            min='0'
            type="number"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            required
            />
        
        <div>
          {errors.map((error, idx) => <p id="review-form-error" key={idx}>{error}</p>)}
        </div>

        <span className='form-button'>
          <input id='submit-review-button' type="submit" value='Submit Review' />
        </span>
      </form>
    );
}


export default CreateReviewForm
