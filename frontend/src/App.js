import React, { useState } from 'react';
import './App.css'; // Importing CSS

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirmation password
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState(''); // New state for email
  const [message, setMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Sign In and Sign Up

  const handleSignUp = () => {
    // Validate passwords
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return; // Prevent further processing if passwords don't match
    }

    // Handle sign up logic, including validation and API calls
    setMessage('Account created successfully!');
  };

  const handleSignIn = () => {
    // Handle sign in logic with username and password
    // For example, simulating a successful sign-in:
    setMessage('Sign in successful! ');
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="/spotifylogo.jpg" alt="Spotify Logo" />
      </div>

      <h1 className="heading">
        {isSignUp ? 'Create Your Account' : 'Sign In'}
      </h1>

      {isSignUp ? (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
            />
          </div>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.value)}
            className="input"
          />
        </div>
      )}

      <button
        className={`button ${isSignUp ? 'signup' : 'signin'}`}
        onClick={isSignUp ? handleSignUp : handleSignIn}
      >
        {isSignUp ? 'Create Account' : 'Sign In'}
      </button>

      <p className="message">{message}</p>

      <div className="toggle">
        <span>
          {isSignUp
            ? 'Already have an account? '
            : "Don't have an account yet? "}
        </span>
        <button
          className="toggle-button"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default App;