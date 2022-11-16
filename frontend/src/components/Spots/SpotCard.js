import './Spots.css'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpot, getOneSpot } from '../../store/spots';
import { useEffect } from 'react';


export default function SpotCard({ spot }){
    //console.log('spot: ', spot)
    const dispatch = useDispatch();
    return (
            <div>
                <img src={spot.previewImage} className="spot-image" />
                <div className='spot-info-container'>
                    <div className='spot-info'>
                        <p style={{fontWeight: 'bold'}}>{`${spot.city}, ${spot.state}`}</p>
                        <p>{spot.name}</p>
                        <p>{`$${spot.price} night`}</p>
                        <button onClick={(event)=> {
                            event.stopPropagation();
                            dispatch(deleteSpot(spot.id))}
                        }>DELETE</button>
                    </div>
                    <div className='spot-rating'>
                        <p>{`AVG Rating: ${spot.avgRating}`}</p>
                    </div>
                </div>
            </div>
        )
}
