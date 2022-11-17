import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSpots, getOneSpot } from "../../store/spots";
import CurrentUserSpotCard from "./UserSpotCard";
import './Spots.css'
import { Modal } from "../../context/Modal";
import EditSpotForm from "../EditSpotForm/EditSpotForm";

const CurrentUserSpots = () => {
    const [showModal, setShowModal] = useState()
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const { spotId } = params;

    const sessionUser = useSelector(state => state.session.user);
    const { id } = sessionUser;
    
    const spotsObj = useSelector(state => state.spots.allSpots);
    const spots = Object.values(spotsObj);
    const filteredSpots = spots.filter(spot => spot.ownerId === id)

    const oneSpot = useSelector(state => state.spots.oneSpot);
    console.log('Current User Spots: ', oneSpot)

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    //console.log('spots: ', spots)
    //console.log('spotsOBJ: ', spotsObj)
    return (
        <div className="spot-container">
            {filteredSpots.map((spot) => (
                <div key={spot.id} className="spot-card" onClick={() => history.push(`/spots/${spot.id}`)}>
                    <CurrentUserSpotCard spot={spot} setShowModal={setShowModal}/>
                </div>
            ))}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSpotForm setShowModal={setShowModal} spot={oneSpot} />
                </Modal>
            )}
        </div>
    )
}

export default CurrentUserSpots;
