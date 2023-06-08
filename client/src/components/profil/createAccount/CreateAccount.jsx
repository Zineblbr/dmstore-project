import React, { useState, useEffect } from "react";
import "./createAccount.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateAccount() {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
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
    const newUser = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      password: formValues.password,
    };
    e.preventDefault();

    axios
      .post("http://localhost:3000/register", newUser)
      .then((response) => {
        // Ici, seuls les code d'erreur de la plage 200 sont traités
        // console.log(response.data);

        // console.log("response");
        // console.log(response);
        alert("Compte créé avec succès!");

        navigate("/Login");
      })
      .catch((error) => {
        // Ici, seuls les code d'erreur des plages 400 & 500 sont traités

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
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            alert(error.response.data.message);
          } else {
            alert(error.message);
          }
        }
      });
  };

  return (
    <>
      <div className="create__account__container">
        <form onSubmit={handleSubmit}>
          <div className="create__account__header">
            <input
              type="text"
              placeholder="Nom"
              name="firstname"
              value={formValues.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Prénom"
              name="lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
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
          </div>
          <button className="create__account__btn">Connexion</button>
        </form>
        <div className="create__account__footer">
          <NavLink className="create__account__links">
            Retour au magasin
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
