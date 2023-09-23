import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          navigate("/");
        })
        .catch((error) => {
          setErr(true);
        });
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Maddy's Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="email" placeholder="email" />
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
          />
          <button>Sign In</button>
          {err && <span>Something went wrong...</span>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
