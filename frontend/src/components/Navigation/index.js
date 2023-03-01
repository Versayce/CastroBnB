import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { Modal } from '../../context/Modal';
import Signup from '../SignupFormModal/Signup';
import Login from '../LoginFormModal/Login'
import CreateSpotForm from '../CreateSpotFormModal/CreateSpotForm';
import CreateSpot from '../CreateSpotFormModal/CreateSpot';
import './Navigation.css';
import SearchBar from '../Search/SearchBar';


export const MODAL_TYPE = { login: 'login', signup: 'signup', createSpot: 'createSpot' };

const getModalForType = (modalType, setShowModal) => {
  switch(modalType) {
    case MODAL_TYPE.login:
      return <Login setShowModal={setShowModal} />
    case MODAL_TYPE.signup:
      // return <SignupForm setShowModal={setShowModal} />
      return <Signup setShowModal={setShowModal} />
    case MODAL_TYPE.createSpot:
      return <CreateSpot setShowModal={setShowModal} />
      // return <CreateSpot setShowModal={setShowModal} />
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
        <SearchBar />
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
