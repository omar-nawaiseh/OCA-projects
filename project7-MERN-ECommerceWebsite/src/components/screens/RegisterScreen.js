import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import GoogleLogin from 'react-google-login';


const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      const defaultImg = "https://www.billerickson.net/wp-content/plugins/avatar-privacy/public/images/mystery.svg"
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("email", email);
      localStorage.setItem("defaultImg", defaultImg);
      history.push("/");
      window.location.reload(false);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("emailProfile", response.profileObj.email);
    localStorage.setItem("nameProfile", response.profileObj.name);
    localStorage.setItem("imageUrlProfile", response.profileObj.imageUrl);
    localStorage.setItem("googleSessionAccessToken", response.accessToken);
    history.push("/");
    window.location.reload(false);
  };
  return (
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
       <button type="submit" className="btn btn-primary">
      Register
</button>
<GoogleLogin
        clientId="281683508823-kpnlbpnusqefec25eqa8m6c52g3n0kse.apps.googleusercontent.com"
        buttonText="Login By google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="btngoogle"
  />
        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
