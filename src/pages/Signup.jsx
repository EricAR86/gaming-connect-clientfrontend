import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    country: "",
    platform: ""
  });
  const { username, password, email, country, platform } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
      email,
      country,
      platform,
    };
    console.log(credentials)

    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-username">Username</label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="Text"
          value={username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          name="email"
          placeholder="example@email.com"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        <label htmlFor="input-country">Country</label>
        <input
          id="input-country"
          type="text"
          name="country"
          placeholder="Insert your Country"
          value={country}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-platform">Preferred Platform</label>
        <input
          id="input-platform"
          type="text"
          name="platform"
          placeholder="Xbox, PlayStation, PC"
          value={platform}
          onChange={handleInputChange}
          required
        />



        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
