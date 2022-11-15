import './Spots.css'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSpot } from '../../store/spots';


export default function SpotCard({ spots }){
    let history = useHistory();
    const spot = useSelector(state => state.spots.oneSpot)
    console.log('spot: ', spot)

    const clickHandler = () => {
        history.push(`/spots/1`)
    }
    //console.log('spots: ', spots)
    return (
        spots.map((spot) => (
            <div key={spot.id} className="spot-card" onClick={clickHandler}>
                <img src={spot.previewImage} className="spot-image" />
                <div className='spot-info-container'>
                    <div className='spot-info'>
                        <p style={{fontWeight: 'bold'}}>{`${spot.city}, ${spot.state}`}</p>
                        <p>{spot.name}</p>
                        <p>{`$${spot.price} night`}</p>
                    </div>
                    <div className='spot-rating'>
                        <p>{`AVG Rating: ${spot.avgRating}`}</p>
                    </div>
                </div>
            </div>
        ))
    )
}
