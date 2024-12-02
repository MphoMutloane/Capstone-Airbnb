import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useUser } from "./admin/userContext"; // Import useUser
import "./Login.css";
import AdminHeader from "./layouts/AdminHeader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser(); // Get setUser from context
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        setUser(authUser.user.email); // Set user email in context
        navigate("/admin/view-listings");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setUser(authUser.user.email); // Set user email in context
        navigate("/admin/view-listings");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
    
      <AdminHeader />
      <div className="login">
        <div className="login_container">
          <h1>Sign-in</h1>
          <form>
            <h5>Email</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
          <p>Forgot password?</p>
        </form>
        <p>
          By signing in you agree to the Airbnb Clone Terms & Conditions...
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Airbnb Account
        </button>
        </div>
      </div>
    </>
  );
};

export default Login;
