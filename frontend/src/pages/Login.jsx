import React, { useEffect, useState } from "react";
import "../style/login.css";
import BannerImage from "../assests/Images/services-banner.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
  });

  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const MyNav = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    const validationErrors = {};

    if (formData.UserName.trim() === "") {
      validationErrors.username = "Please enter your username.";
    }

    if (formData.Password.trim() === "") {
      validationErrors.password = "Please enter your password.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Perform login logic here, such as making an API request
    const headers = {
      "Content-Type": "multipart/form-data",
      "x-api-key": "123456789123456789",
    };

    axios
      .post(
        "https://pro.seawindsolution.com/MODEL/Webservices/Signin",
        formData,
        { headers }
      )
      .then((res) => {
        if (res.data.IsSuccess === false) {
          setApiResponse(res.data.Message);
        } else {
          setApiResponse(res.data.Message);
          sessionStorage.setItem("InfluncerData", JSON.stringify(res.data));
          window.location.replace("/RF");
          MyNav("/RF"); // You can set any success message you want

        }

        // Reset form data and errors
        setFormData({
          UserName: "",
          Password: "",
        });
        setErrors({});
      })
      .catch((error) => {
        console.error("API error:", error);
        setApiResponse("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later.");
      });
  };

  const handleForgotPassword = () => {
    // Handle forgot password functionality
    // Example: Show a forgot password modal or navigate to the forgot password page
    alert("Forgot password functionality is not implemented in this example.");
  };

  const handleCreateAccount = () => {
    // Handle create account functionality
    // Example: Show a create account form or navigate to the create account page
    alert("Create account functionality is not implemented in this example.");
  };

  const handleGoogleLogin = () => {
    // Handle Google login functionality
    // Example: Perform Google OAuth login or show a Google login popup
    alert(
      "Sign in with Google functionality is not implemented in this example."
    );
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login functionality
    // Example: Perform Facebook OAuth login or show a Facebook login popup
    alert(
      "Sign in with Facebook functionality is not implemented in this example."
    );
  };

  return (
    <div>
      <Helmet>
        <title>Influencer Market | Login</title>
        <meta name="Login" content="This is my page Login." />
      </Helmet>
      <div className="login-container">
        <div className="inner-page-banner">
          <img src={BannerImage} alt="" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          {apiResponse && <div className="api-response">{apiResponse}</div>}
          <h2>Login</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              required
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit">Sign in</button>
          <div className="login-options">
            <button type="button" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
            <button type="button" onClick={handleCreateAccount}>
              Create Account
            </button>
          </div>
          <div className="social-login">
            <button type="button" onClick={handleGoogleLogin}>
              Sign in with Google
            </button>
            <button type="button" onClick={handleFacebookLogin}>
              Sign in with Facebook
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginForm;
