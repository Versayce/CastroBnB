import { useDispatch } from 'react-redux';
import { deleteReview } from "../../store/reviews";
import { useSelector } from 'react-redux';
import { useState } from 'react';




const SpotReviews = ({ review }) => {
    // console.log('SpotReviews REVIEW: ', review.User)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const showDeleteForRelatedUser = sessionUser?.id === review.userId

    return (
        <div id='user-reviews-wrapper'>
            <div id="user-reviews">
                <div id='username'>{`${review.User?.firstName}: `}</div>
                <div>{review.review}</div>
                {showDeleteForRelatedUser && <span className='review-delete-button'><div id='delete-button' onClick={() => dispatch(deleteReview(review.id))}>Delete</div></span>}
            </div>
        </div>
    )
}


export default SpotReviews;
