import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';
import LoginForm from '../LoginFormModal/LoginForm';
import CreateSpotForm from '../CreateSpotFormModal/CreateSpotForm';
import EditSpotForm from '../EditSpotForm/EditSpotForm';

export const MODAL_TYPE = { login: 'login', signup: 'signup', createSpot: 'createSpot' };

const getModalForType = (modalType, setShowModal) => {
  switch(modalType) {
    case MODAL_TYPE.login:
      return <LoginForm setShowModal={setShowModal} />
    case MODAL_TYPE.signup:
      return <SignupForm setShowModal={setShowModal} />
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
      <ul className='nav-elements'>
        <li>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && <ProfileButton user={sessionUser} setLogin={setLogin} setShowModal={setShowModal} />}
        </li>
        {showModal && (
          <Modal onClose={() => setShowModal(undefined)}>
            {getModalForType(showModal, setShowModal)}
            {/* {login ? <LoginForm setShowModal={setShowModal} /> : <SignupForm setShowModal={setShowModal}/>} */}
          </Modal>
        )}
      </ul>
    </div>
  );
}


export default Navigation;
