import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSpotReview } from "../../store/reviews";

function CreateReviewForm( {spotId} ) {
    const dispatch = useDispatch();
  
    const spot = useSelector(state => state.spots.oneSpot)
    const user = useSelector(state => state.session.user)
    const reviews = useSelector(state => state.reviews.Reviews)

    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");
    const [errors, setErrors] = useState([]);

    //console.log('review form spotId: ', spotId)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editedSpot = {
            review,
            stars
          }
        //add conditionals for error throwing
        setErrors([]);
          return dispatch(createSpotReview(editedSpot, spotId))
          //.then(setShowModal(false))
        //   .catch(
        //   async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors);
        //   }
        // );
      };


      return (
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Review
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </label>
          <label>
            Stars
            <input
              type="text"
              value={stars}
              onChange={(e) => setStars(e.target.value)}
              required
            />
          </label>

          <button type="submit">Create Review</button>
        </form>
      );

}


export default CreateReviewForm
