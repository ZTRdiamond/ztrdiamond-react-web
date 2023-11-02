import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import logo_unclicked from '../assets/icons/3strip-nbg.webp';
import logo_clicked from '../assets/icons/2strip-nbg.webp';

function NavbarComponent(props) {
  const { items } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [collapseStyle, setCollapseStyle] = useState({});

  const toggleIcon = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked) {
      setCollapseStyle({ display: 'block', transitionDuration: '0.0s' });
    } else {
      setCollapseStyle({ display: 'none', transitionDuration: '0.0s' });
    }
  }, [isClicked]);

  const handleNavLinkClick = () => {
    setIsClicked(false);
  };

  return (
    <Navbar className="navBarContainer sticky-top" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h2 className="headerNav">ZTRdiamond</h2>
        </Navbar.Brand>
        <Navbar.Toggle className="menuNav" aria-controls="basic-navbar-nav" onClick={toggleIcon}>
          <img src={isClicked ? logo_clicked : logo_unclicked} alt="menu" width="40px" height="40px" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" style={collapseStyle}>
          <Nav className="me-auto listNav" style={collapseStyle}>
            {items.map((item) => (
              <Nav.Link
                key={item.id}
                className="listItemNav"
                as={NavLink}
                href={item.path}
                onClick={handleNavLinkClick}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
