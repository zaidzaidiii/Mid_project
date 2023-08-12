import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    email: '',
    date: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.email === '' || input.password === '' || input.name === '') {
      alert('Please Fill All Fields');
    } else {
      localStorage.setItem('user', JSON.stringify(input));
      alert('Registration successful. You can now log in.');
      navigate('/');
    }
  };

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f1f1f1',
      }}
    >
      <section
        className="d-flex justify-content-center"
        style={{
          flexWrap: 'wrap',
          maxWidth: '800px',
          width: '100%',
          padding: '20px',
        }}
      >
        <div
          className="leftData"
          style={{
            width: '100%',
            background: '#ffffff',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            margin: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontFamily: 'sans-serif',
          }}
        >
          <h3
            className="col-lg-6 text-center pt-5"
            style={{ fontSize: '1.8rem' }}
          >
            Sign Up
          </h3>
          <Form
            className="col-lg-6"
            onSubmit={handleSubmit}
            style={{ maxWidth: '400px', margin: '0 auto' }} // Added max width and centering
          >
            <Form.Group className="p-3">
              <Form.Control
                type="name"
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Your Name"
                style={{ width: '100%', marginBottom: '10px' }}
              />
            </Form.Group>
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
                placeholder="Enter Email"
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
            </Form.Group>
            <p className="mt-3" style={{ fontSize: '0.9rem' }}>
              Already have an Account <Link to="/">Login</Link>
            </p>
            <Button
              variant="success"
              className="text-center fw-bold text-dark"
              type="submit"
              style={{
                width: '100%', // Changed to full width on smaller screens
                marginBottom: '10px',
                backgroundColor: 'white',
                transition: 'background-color 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f7f7f7';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
              }}
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
