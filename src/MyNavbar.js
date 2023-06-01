import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './css/MyNavbar.css';
import Button from '@mui/material/Button';
import Packages from './Packages';
import logo from './images/logo.png';

function MyNavbar() {

    // const { user } = JSON.parse(localStorage.getItem('currentUser'));

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>

                    <NavLink to="/" className='brand'>
                        <Navbar.Brand href="/" >
                            <img src={logo} alt="image" width="150" height="30" className="d-inline-block align-center" />
                        </Navbar.Brand>
                    </NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className='ms-auto'>

                            <Button >
                                <NavLink to='/' className="navbar">Home</NavLink>
                            </Button>
                            <Button >
                                <NavLink to='/services' className="navbar">Services</NavLink>
                            </Button>

                            <Button >
                                <NavLink to='/packages' className="navbar">Packages</NavLink>
                            </Button>

                            <Button >
                                <NavLink to='/contactUs' className="navbar">Contact Us</NavLink>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <>

            </>
        </>
    )
}

export default MyNavbar;

//  {/* <NavLink to="/" className="navbar">Home</NavLink> */}

//  <Button >
//  <NavLink to='/hotels' className="navbar">Hotels</NavLink>
// </Button>

// <Button >
//  <NavLink to="/listyourbusiness" className="navbar">List your business</NavLink>
// </Button>

// <Button >
//  <NavLink to='/hireATripDesigner' className="navbar">Hire a trip designer</NavLink>
// </Button>

// <Button >
//  <NavLink to='/restaurants' className="navbar">Restaurants </NavLink>
// </Button>

// <Button >
//  <NavLink to='/contactUs' className="navbar">Contact us</NavLink>
// </Button>
// <NavDropdown title="Explore" id="basic-nav-dropdown" className="navbar">
//  {/* <NavDropdown.Item >Wish list</NavDropdown.Item> */}


//  <NavDropdown.Item >
//      <NavLink to='/bookTicket' className='dropdown_css'>Book Tickets  </NavLink>
//  </NavDropdown.Item>

//  {/* <NavDropdown.Item >Events</NavDropdown.Item> */}
//  {/* <NavDropdown.Divider /> */}
//  <NavDropdown.Item >
//      <NavLink to='/feedback' className='dropdown_css'> Feedback </NavLink>
//  </NavDropdown.Item>

//  <NavDropdown.Item>
//      <NavLink to='/aboutus' className='dropdown_css'> About us </NavLink>
//  </NavDropdown.Item>

//  <NavDropdown.Item>
//      <NavLink to='/review' className='dropdown_css'> Write a review</NavLink>
//  </NavDropdown.Item>

//  <NavDropdown.Item>
//      <NavLink to='/ourteam' className='dropdown_css'> Our Team</NavLink>
//  </NavDropdown.Item>

//  <NavDropdown.Item>
//      <NavLink to='/faq' className='dropdown_css'> FAQs</NavLink>
//  </NavDropdown.Item>

// </NavDropdown>

// <Button >
//  <NavLink to="/signup" className="navbar ">Login/SignUp</NavLink>
// </Button>

// {/* <Button >{user.email.substring(0, user.email.length - 10)} </Button> */}
