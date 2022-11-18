import './Spots.css'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpot, getOneSpot } from '../../store/spots';
import { useEffect } from 'react';
import { createSpot } from '../../store/spots';


export default function SpotCard({ spot }){
    //console.log('spot: ', spot)
    return (
            <div>
                <img src={spot.previewImage} className="spot-image" />
                <div className='spot-info-container'>
                    <div className='spot-info'>
                        <p style={{fontWeight: 'bold'}}>{`${spot.city}, ${spot.state}`}</p>
                        <p>{spot.name}</p>
                        <p>{`$${spot.price} night`}</p>

                    </div>
                    <div className='spot-rating'>
                        <p>{`Stars: ${spot.avgRating}`}</p>
                    </div>
                </div>
            </div>
        )
}
