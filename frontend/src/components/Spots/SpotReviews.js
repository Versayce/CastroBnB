import { useDispatch } from 'react-redux';
import { deleteReview } from "../../store/reviews";
import { useSelector } from 'react-redux';


const SpotReviews = ({ review }) => {
    //console.log('SpotReviews REVIEW: ', review)
    const sessionUser = useSelector(state => state.session.user);
    //console.log('SpotReviews SESSION USER: ', sessionUser)
    const { id } = sessionUser
    //console.log('SpotReviews SESSION USER ID: ', id)
    const dispatch = useDispatch();
    if(id === review.userId)
    return (
        <div>
            <div>{review.review}</div>
            <button onClick={() => dispatch(deleteReview(review.id))}>Delete</button>
        </div>
    )
}


export default SpotReviews;
