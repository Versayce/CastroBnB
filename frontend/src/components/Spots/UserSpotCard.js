import './SpotCard.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSpot } from '../../store/spots';
import { useState } from 'react';

import { Modal } from '../../context/Modal';
import EditSpotForm from '../EditSpotForm/EditSpotForm';


export default function CurrentUserSpotCard({ spot }){
    const history = useHistory();
    const [showModal, setShowModal] = useState()
    const dispatch = useDispatch();
    //console.log('spot from currentspotcard: ', spot)

    return (
        <>
            <div onClick={() => history.push(`/spots/${spot.id}`)}>
                <img src={spot.previewImage} className="spot-image" />
                <div className='spot-info-container'>
                    <div className='spot-info'>
                        <p className='spot-card-title' style={{fontWeight: 'bold'}}>{`${spot.city}, ${spot.state}`}</p>
                        <p>{spot.address}</p>
                        <p>{spot.name}</p>
                        <div className='price-container'>
                            <p style={{fontWeight: 'bold'}}>{`$${spot.price}`}</p>    
                            <p>night</p>
                        </div>
                    </div>
                    <div className='spot-rating-container'>
                        <div className='spot-rating'>
                                <div className="fa-solid fa-star fa-xs" />
                                <p>{`${spot.avgRating}`}</p>
                        </div>
                    </div>
                </div>

                <div className='spot-card-button-wrapper'>
                    <a class='button' className='spot-card-buttons' onClick={(event)=> {
                        event.stopPropagation();
                        dispatch(deleteSpot(spot.id))}
                    }>DELETE</a>

                    <a class='button' className='spot-card-buttons' onClick={(event)=> {
                        event.stopPropagation();
                        setShowModal(true)
                        }
                    }>EDIT</a>
                </div>

            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSpotForm setShowModal={setShowModal} spot={spot} />
                </Modal>
            )}
        </>
        )
}
