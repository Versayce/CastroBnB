import { useDispatch } from 'react-redux';
import { deleteReview } from "../../store/reviews";
import { useSelector } from 'react-redux';
import { useState } from 'react';




const SpotReviews = ({ review }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    //const showDeleteForRelatedUser = sessionUser?.id === review.userId
    const showDeleteForRelatedUser = sessionUser?.id === review.userId

    return (
        <div id='user-reviews-wrapper'>
            <div id="user-reviews">
                <div className='review-content'>
                    <div id='username'>{`${review.User?.firstName}: `}</div>
                    <div>{review.review}</div>
                </div>
                <div className='review-content'>
                    <div className="fa-solid fa-star fa-xs" />
                    <div className='review-star'>{review.stars}</div>
                </div>
            </div>
                {showDeleteForRelatedUser ? <span className='review-delete-button'><div id='delete-button' onClick={() => dispatch(deleteReview(review.id))}>Delete</div></span> : <span id='star-spacing'></span>}
        </div>
    )
}


export default SpotReviews;
