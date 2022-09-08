import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './Header.scss';
import { useState } from 'react';

export default function Header() {
  const [fix, setFix] = useState(false);
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener('scroll', setFixed);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <Navbar
      className={fix ? 'headerWrapperFixed' : 'headerWrapper'}
      expand="lg"
    >
      <Container className="header">
        <Navbar.Brand href="#">
          {fix ? (
            <Image
              className="header-brand"
              src="./assets/airLogoWhite.svg"
              height={'38px'}
              width={'94px'}
            />
          ) : (
            <Image
              className="header-brand"
              src="./assets/Logo.svg"
              height={'48px'}
              width={'114px'}
            />
          )}
        </Navbar.Brand>
        <div className="nav-items">
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <div
            className={fix ? 'burger-menu-fixed' : 'burger-menu'}
            onClick={updateMenu}
          >
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>

          <Nav className={menu_class}>
            <Nav.Link onClick={updateMenu} href="#team">
              Team
            </Nav.Link>

            <Nav.Link
              onClick={updateMenu}
              href="https://blog.3air.io/"
              target={'_blank'}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={updateMenu}
              href="https://docs.3air.io/tokenomics/3air-tokenomics/"
              target={'_blank'}
            >
              Tokenomics
            </Nav.Link>
            <Nav.Link
              target={'_blank'}
              onClick={updateMenu}
              href="https://app.3air.io/"
            >
              App
            </Nav.Link>

            <Nav.Link
              onClick={updateMenu}
              target="_blank"
              href="https://blog.3air.io/early-staking-pools/"
            >
              Staking
            </Nav.Link>
            <Nav.Link onClick={updateMenu} href="#footer">
              Contact
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
