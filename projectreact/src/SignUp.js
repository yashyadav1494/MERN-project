import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for redirection
import './SignUp.css'; // CSS for styling

const SignUp = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    
    const navigate= useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Log the user data to verify the fields are correct
      console.log(user);
  
      try {
          const response = await fetch('http://localhost:2002/api/users/signup', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
          });
  
          const data = await response.json(); // Check the response from the backend
          if (response.ok) {
              console.log('Response:', data); // Log success response
              navigate('/signin');
          } else {
              console.error('Error:', data.message); // Log error message
              alert(data.message || 'Sign Up failed! Please try again.');
          }
      } catch (error) {
          console.error('Error:', error); // Log if any error occurs during request
      }
  };
  

    return (
        <div className="signup-container">
            <h2>Sign Up for Organic Food</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
                <button className="sign-up-button" type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
