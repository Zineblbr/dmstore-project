import React from "react";
import "./forgotPassword.css";

function ForgotPassword() {
  return (
    <>
      <div className="reset__psw__container">
        <div className="reset__psw__header">
          <h1>Réinitialiser votre mot de passe</h1>
          <p>
            Nous vous enverrons un e-mail pour réinitialiser votre mot de passe.
          </p>
          <input type="email" placeholder="Email" />
        </div>
        <div className="reset__psw__btn">
          <button className="reset__psw__submitbtn">Submit</button>
          <button className="reset__psw__cancelbtn">Cancel</button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
