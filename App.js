
import React from 'react';
import {
  Nav,
  NavDropdown,
  Navbar
} from 'react-bootstrap';
import {
  Link,
  Route as RouteElement,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import ContactForm from './ContactForm';
import DestinationDetail from './DestinationDetail';
import DestinationList from './DestinationList';

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar className="custom-navbar" expand="lg" variant="dark">
          <Navbar.Brand className="brand-heading">
            <Link to="/" className="nav-link">TOUR WITH US</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <Link to="/travel" className="dropdown-item">
                  Travel
                </Link>
                <Link to="/destinations" className="dropdown-item">
                  Destinations
                </Link>
                <Link to="/experience" className="dropdown-item">
                  Experience
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        
        <div className="container">
          <Routes>
            <RouteElement path="/" element={<DestinationList />} />
            <RouteElement path="/destination/:id" element={<DestinationDetail />} />
            <RouteElement path="/contact" element={<ContactForm />} />
          
          </Routes>
        </div>

        {/* Footer */}
        <footer className="custom-footer">
          <div className="footer-section">
            <h3>Connect with us</h3>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact us</h3>
            <p>Email: contact@tourwithus.com</p>
            <p>Phone: +91 123 456 789</p>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and offers.</p>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
