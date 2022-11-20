import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { DemoLogin } from "./DemoLogin";
import { useHistory } from "react-router-dom";
import { MODAL_TYPE } from ".";

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
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={() => history.push(`/spots/current`)}>My Spots</button>
          </li>
          <li>
            <button onClick={() => {
              setShowModal(MODAL_TYPE.createSpot);
            }}>Create Spot</button>
          </li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>) :
        (<ul className="profile-dropdown">
          <li>
            <button onClick={() => {
              setLogin(true)
              setShowModal(MODAL_TYPE.login)
            }}>Log In</button>
          </li>
          <li>
            <button onClick={() => {
              setLogin(false)
              setShowModal(MODAL_TYPE.signup)
            }}>Sign Up</button>
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
