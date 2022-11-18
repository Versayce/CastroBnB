import './Spots.css'
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
                        <p style={{fontWeight: 'bold'}}>{`${spot.city}, ${spot.state}`}</p>
                        <p>{spot.name}</p>
                        <p>{`$${spot.price} night`}</p>

                        <button onClick={(event)=> {
                            event.stopPropagation();
                            dispatch(deleteSpot(spot.id))}
                        }>DELETE</button>

                        <button onClick={(event)=> {
                            event.stopPropagation();
                            setShowModal(true)
                            }
                        }>EDIT</button>
                        
                    </div>
                    <div className='spot-rating'>
                        <p>{`Stars: ${spot.avgRating}`}</p>
                    </div>
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
