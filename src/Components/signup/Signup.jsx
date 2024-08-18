import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from '../firebase_config/Config';
import "./signup.css"

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); 
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
