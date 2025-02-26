import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for redirection
import './SignIn.css'; // CSS for styling

const SignIn = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await fetch('http://localhost:2002/api/users/signin', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
          });
  
          const data = await response.json();
          if (response.ok) {
              // Store the token in localStorage for use in other requests
              localStorage.setItem('authToken', data.token);
              navigate('/home');  // Redirect to home page after successful login
          } else {
              console.error('Error:', data.message);
              alert(data.message || 'Sign In failed! Please try again.');
          }
      } catch (error) {
          console.error('Error:', error);
      }
    };


    //--------------------------------------------------------------------------------------
  


    return (
        <div className="signin-container rock">
            <h2>Sign In to Organic Food</h2>
            <form className='sunrise' onSubmit={handleSubmit}>
                <input className='royal'
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <input className='royal'
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
                <button className="sign-in-button marine" type="submit">Sign In</button>
            </form>
            <div className='raje'>
            <p>
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
            <p>
                <a href="/forgot-password">Forgot Password?</a>
            </p>
            </div>
        </div>
    );
};

export default SignIn;
