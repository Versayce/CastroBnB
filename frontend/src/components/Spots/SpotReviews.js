import { useDispatch } from 'react-redux';
import { deleteReview, getSpotReviews } from "../../store/reviews";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



const SpotReviews = ({ review }) => {
    // console.log('SpotReviews REVIEW: ', review.User)
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const newReview = useSelector(state => state.Reviews)
    // console.log('SpotReviews SESSION USER: ', newReview)
    //console.log('SpotReviews SESSION USER ID: ', id)
    // const userId = sessionUser?.id
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
