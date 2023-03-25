import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaUser } from "react-icons/fa";
import Overlay from "./Overlay";
import UserInfo from "./UserInfo";
import "../styles/NavbarStyle.css";

const Navbar = (props) => {
  
  const [movieName, setMovieName] = useState("");
  const [styleIcon, setStyleIcon] = useState({ fontSize: "1.5rem" });
  const [login, setLogin] = useState(false);

  let userName = {
    status: false,
    name: "Sign Up",
  };

  const searchTheMovieName =  (name) => {
    setMovieName(name);
    // setStyleIcon({
    //   fontSize: "1.5rem",
    // });
    props.searchMovie(name);
  };

  const changeStyleAfterClick = () => {
    setStyleIcon({
      ...styleIcon,
      color: "red",
    });
  };

  const loginStatusCheck = (e) => {
    e.stopPropagation();
    setLogin(true);
  };

  const signUpCheck = () => {
    setLogin(false);
  };

  if (sessionStorage.getItem("login") !== null) {
    const loginSession = JSON.parse(sessionStorage.getItem("login"));
    userName = {
      status: loginSession.status,
      name: loginSession.name,
    };
  }

  const stateUpLisft = (arg) => {
    userName = {
      status: true,
      name: arg,
    };
    sessionStorage.setItem("login", JSON.stringify(userName));
    props.checkForLoginStatus();
  };

  const clickOnLogo = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="styleNavBar">
      <div id="nav-bar">
        <div className="logo">
          <NavLink className='nav-link' to="/">
            <h1
              className="linkLogo"
              onClick={clickOnLogo}
            >BookMyMovie</h1>
          </NavLink>
        </div>
        <div className="right-side">
          <div className="input-container giveSameStyle">
            <input
              type="text"
              className="searchBar scarchClass"
              placeholder="Search for Movies . . ."
              value={movieName}
              onChange={(e)=>searchTheMovieName(e.target.value)}
            />
          </div>
          <div className="login-wraper">
            <NavLink to="/wishlist">
              <div
                className="favorite giveSameStyle"
                onClick={changeStyleAfterClick}
              >
                <FaRegHeart 
                  style={{fontSize: "1.5rem", color: "white",}}
                />
              </div>
            </NavLink>

            <div className="loginInfo giveSameStyle" onClick={loginStatusCheck}>
              {login && (
                <Overlay functionCall={signUpCheck}>
                  <UserInfo
                    functionCall={signUpCheck}
                    stateUpLisft={stateUpLisft}
                  />
                </Overlay>
              )}
              <FaUser /> {userName.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
