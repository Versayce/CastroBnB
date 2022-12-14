import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';
import Signup from '../SignupFormModal/Signup';
import LoginForm from '../LoginFormModal/LoginForm';
import CreateSpotForm from '../CreateSpotFormModal/CreateSpotForm';
import './Navigation.css';


export const MODAL_TYPE = { login: 'login', signup: 'signup', createSpot: 'createSpot' };

const getModalForType = (modalType, setShowModal) => {
  switch(modalType) {
    case MODAL_TYPE.login:
      return <LoginForm setShowModal={setShowModal} />
    case MODAL_TYPE.signup:
      // return <SignupForm setShowModal={setShowModal} />
      return <Signup setShowModal={setShowModal} />
    case MODAL_TYPE.createSpot:
      return <CreateSpotForm setShowModal={setShowModal} />
  }
}

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState();
  const [login, setLogin] = useState(true);

  return (
    <div className='navbar'>
      <div className='nav-elements'>
        <div className='home-button'>
          <NavLink id="logo-link" exact to="/">
            <span id="logo-text">Castrobnb</span>
          </NavLink>
        </div>
        <div>
          {isLoaded && <ProfileButton user={sessionUser} setLogin={setLogin} setShowModal={setShowModal} />}
        </div>
        {showModal && (
          <Modal onClose={() => setShowModal(undefined)}>
            {getModalForType(showModal, setShowModal)}
            {/* {login ? <LoginForm setShowModal={setShowModal} /> : <SignupForm setShowModal={setShowModal}/>} */}
          </Modal>
        )}
      </div>
    </div>
  );
}


export default Navigation;
