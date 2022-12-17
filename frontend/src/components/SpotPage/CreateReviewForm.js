import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpotReview } from "../../store/reviews";

function CreateReviewForm({ spotId, setIsShown }) {
    const dispatch = useDispatch();
  
    const spot = useSelector(state => state.spots.oneSpot)
    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews.Reviews)

    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");
    const [errors, setErrors] = useState([]);
    
    
    //console.log("This is the user:", user)
    //console.log('review form spotId: ', spotId)
    //console.log('review form stars: ', stars)

    const handleSubmit = async (e) => {
      e.preventDefault();

      const editedSpot = {
          // "User": user,
          review,
          stars
        }

      if (review.length > 10) {
        setErrors([]);
        return dispatch(createSpotReview(editedSpot, spotId))
          .then(() => setIsShown(false))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.message) setErrors([data.message]);
          })
      };

      if(review.length < 10) {
        return setErrors(['Review length must be 10 or greater'])
      }

    };


      return (
        <form id="form-review" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          
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
          

          <span className='form-button'>
            <input id='submit-review-button' type="submit" value='Submit Review' />
          </span>
        </form>
      );

}


export default CreateReviewForm
