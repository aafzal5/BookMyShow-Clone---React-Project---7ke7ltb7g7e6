import React, { useState } from "react";
import UserLoginForm from "./UserLoginForm";
import UserSignUpForm from "./UserSignupForm";

const UserInfo = (props) => {
  const [loginOrSignUp, setLoginOrSignUp] = useState(false);
  const checkForLoginOrSignUp = () => {
    setLoginOrSignUp(true);
  };
  const upLiftTheState = (arg) => {
    props.stateUpLisft(arg);
  };

  const signUpCheck = () => {
    props.functionCall();
  };

  return (
    <>
      {loginOrSignUp ? (
        <UserLoginForm
          functionCall={signUpCheck}
          stateUpLisft={upLiftTheState}
        />
      ) : (
        <UserSignUpForm flagSet={checkForLoginOrSignUp} />
      )}
    </>
  );
};

export default UserInfo;
