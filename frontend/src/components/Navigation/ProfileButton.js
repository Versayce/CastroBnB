import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { DemoLogin } from "./DemoLogin";
import { useHistory } from "react-router-dom";
import Navigation, { MODAL_TYPE } from ".";
import './Navigation.css'

function ProfileButton({ user, setLogin, setShowModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    history.push('/')
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="profile-button" onClick={openMenu}>
        <i className="fa-solid fa-user" />
      </div>
      {showMenu && (user ? 
        (<ul className="profile-dropdown">
          <div className='profile-dropdown-user-info'>
            <span>{user.username}</span>
            <span>{user.email}</span>
          </div>
          <li>
            <div className="profile-dropdown-buttons" onClick={() => history.push(`/spots/current`)}>My Spots</div>
          </li>
          <li>
            <div className="profile-dropdown-buttons" onClick={() => {
              setShowModal(MODAL_TYPE.createSpot);
            }}>Create Spot</div>
          </li>
          <li>
            <div className="profile-dropdown-buttons" onClick={logout}>Log Out</div>
          </li>
        </ul>) :
        (<ul className="profile-dropdown">
          <li>
            <div className="profile-dropdown-buttons" onClick={() => {
              setLogin(true)
              setShowModal(MODAL_TYPE.login)
            }}>Log In</div>
          </li>
          <li>
            <div className="profile-dropdown-buttons" onClick={() => {
              setLogin(false)
              setShowModal(MODAL_TYPE.signup)
            }}>Sign Up</div>
          </li>
          <li>
            <DemoLogin />
          </li>
        </ul>)
      )}
    </>
  );
}

export default ProfileButton;
