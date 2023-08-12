import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem('user'));

    if (loggedInUser && input.email === loggedInUser.email && input.password === loggedInUser.password) {
      localStorage.setItem('loggedin', true);
      alert('Login successful.');
      navigate('/Categories');
    } else {
      alert('Invalid Email or Password');
    }
  };


  
  return (
    <>
      <div
        className="container"
        style={{
          fontFamily: 'sans-serif',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: '#f1f1f1',
        }}
      >
        <Form
          className="col-lg-6"
          onSubmit={handleLogin}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '20px',
            background: 'black',
            color: 'white',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 className="text-center pt-5" style={{ fontSize: '1.8rem' }}>
            Login
          </h3>

          <Form.Group className="p-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Enter email"
              style={{ width: '100%', marginBottom: '10px' }}
            />
          </Form.Group>

          <Form.Group className="p-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Password"
              style={{ width: '100%', marginBottom: '10px' }}
            />

            <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
              Don't have an Account? <Link to="/SignUp">Register here</Link>
            </p>
          </Form.Group>

          <div className="text-center">
            <Button
              className="col-lg-6 bg-white text-dark fw-bold"
              type="submit"
              style={{
                width: '40%',
                marginBottom: '10px',
                transition: 'background-color 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f7f7f7';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
              }}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
