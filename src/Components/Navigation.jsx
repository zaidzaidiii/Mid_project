import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai'; // Import the AiOutlineHome icon

function Navigation(props) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('loggedin');
    navigate('/');
  };
  

  const brandStyles = {
    color: '#FEDC01',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyles = {
    color: '#FEDC01',
    fontSize: '18px',
    textDecoration: 'none',
    fontWeight: 'bold',
    margin: '0 15px',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.2s ease-in-out',
    padding: '10px'
  };

  const cartIconStyles = {
    fontSize: '20px',
    margin: '0 5px',
  };

  // Add a new style object for the toggle button
  const toggleButtonStyles = {
backgroundColor:'',
    color: 'black' ,
    
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: 'black', color: 'black' }}>
      <Container>
        {/* Logo */}
        <Link to="/" style={brandStyles}>
          <i>ShopX</i>
        </Link>

        {/* Collapse toggle with the new style */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={toggleButtonStyles} />

        {/* Navbar items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
           
            {/* Home */}
            <Link to="/Categories" style={linkStyles}>
              <AiOutlineHome style={cartIconStyles} /> {/* Add the AiOutlineHome icon */}
              Home
              {/* If you want to show a number in the cart, you can use the following code */}
              {/* <sup style={cartBadgeStyles}>{'3'}</sup> */}
            </Link>

           
           
            {/* Logout */}
            <Link to="/" style={linkStyles} onClick={handleLogOut}>
              <IoLogOutOutline style={cartIconStyles} />
              Logout
            </Link>

            {/* Cart */}
            <Link to="/CartList" style={linkStyles}>
              <FaShoppingCart style={cartIconStyles} />
              Cart
              {/* If you want to show a number in the cart, you can use the following code */}
              {/* <sup style={cartBadgeStyles}>{'3'}</sup> */}
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
