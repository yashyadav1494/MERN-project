import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for redirection
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:2002/api/users/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('A reset link has been sent to your email.');
                navigate('/signin'); // Redirect to sign-in page after request
            } else {
                alert(data.message || 'Failed to send reset email.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form className='sunrise' onSubmit={handleSubmit}>
                <input className='royal'
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <button className='marine' type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
