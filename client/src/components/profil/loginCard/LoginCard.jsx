import React, { useState, useEffect } from "react";
import "./loginCard.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginCard() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setFormErrors({});
  }, [formValues]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const loginNow = {
      email: formValues.email,
      password: formValues.password,
    };
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", loginNow)
      .then((response) => {
        // Ici, seuls les code d'erreur de la plage 200 sont traités
        // console.log(response.data);

        // console.log("response");
        // console.log(response);
        alert("Welcom");
        navigate("/");

        // navigate("/Login");
      })
      .catch((error) => {
        // Ici, seuls les code d'erreur des plages 400 & 500 sont traités

        // console.log("error");
        // console.log(error);

        if (
          error.response &&
          error.response.data &&
          error.response.data.field
        ) {
          setFormErrors({
            ...formErrors,
            [error.response.data.field]: error.response.data.message,
          });
        } else {
          alert(error.response.data.message);
        }
      });
  };

  return (
    <div className="profil__card__container">
      <form onSubmit={handleSubmit}>
        <div className="profil__card__header">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && (
            <p className="error__message">{formErrors.email}</p>
          )}
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && (
            <p className="error__message">{formErrors.password}</p>
          )}
          <button className="profil__card__btn">Sign In</button>
        </div>
      </form>

      <div className="profil__card__footer">
        <Link to="/ForgotPasswordP" className="profil__card__links">
          Mot de passe oublié ?
        </Link>
        <Link to="/CreateAccountP" className="profil__card__links">
          Créer un compte
        </Link>
        <Link to="/" className="profil__card__links">
          Retourner au magasin
        </Link>
      </div>
    </div>
  );
}

export default LoginCard;
