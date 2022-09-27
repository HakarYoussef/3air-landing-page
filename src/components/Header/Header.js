import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import './Header.scss';
import CountdownTimer from '../Countdown/CountdownTimer';

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

  const unixEndDate = new Date(Date.UTC(2022, 8, 22, 10, 0, 0));
  const initialCountdownTimer = {
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  };

  const [countdownSettings, setCountdownSettings] = useState(unixEndDate);
  const [countdownTimer, setCountdownTimer] = useState({ ...initialCountdownTimer });

  const playTimer = () => {
    const now = new Date();

    const distance = (countdownSettings - now) / 1000;

    if (distance > 0) {
      setCountdownTimer(prevCountdownTimer => {
        return {
          ...prevCountdownTimer,
          days: parseInt(distance / (60 * 60 * 24), 10),
          hours: parseInt(distance % (60 * 60 * 24) / (60 * 60), 10),
          mins: parseInt(distance % (60 * 60) / (60), 10),
          secs: parseInt(distance % 60, 10)
        };
      });
    }
    else {
      setCountdownSettings( null );
      setCountdownTimer({ ...initialCountdownTimer });
    }
  };

  useEffect(() => {
    let timer = null;
    
    if (unixEndDate) {
      timer = setInterval(() => { 
        playTimer(unixEndDate);}
        , 1000);
    }

    return () => {
      clearInterval(timer);
      timer = null;
    }
  }, []);

  return (
    <Navbar
      className={fix ? (unixEndDate > new Date() && countdownSettings ? 'headerWrapperFixed' : 'headerWrapperFixed headerWrapperMove')
                      : (unixEndDate > new Date() && countdownSettings ? 'headerWrapper' : 'headerWrapper headerWrapperMove')}
      expand="lg"
    >
      <div className={ unixEndDate > new Date() && countdownSettings ? "countdown" : "countdownHidden" }>
        <CountdownTimer countdownTimer={countdownTimer} unixEndDate={countdownSettings} />
      </div>
      <Container className={unixEndDate > new Date() && countdownSettings ? "header" : "header headerMove"}>
        <Navbar.Brand href="#">
          {fix ? (
            <Image
              className="header-brand"
              src={process.env.PUBLIC_URL+'/assets/airLogoWhite.svg'}
              height={'38px'}
              width={'94px'}
            />
          ) : (
            <Image
              className="header-brand"
              src={process.env.PUBLIC_URL+'/assets/Logo.svg'}
              height={'48px'}
              width={'114px'}
            />
          )}
        </Navbar.Brand>
        <div className="nav-items">
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <div
            className={fix ? (unixEndDate > new Date() &&countdownSettings ? 'burger-menu-fixed' : 'burger-menu-fixed burget-menu-move')
                            : (unixEndDate > new Date() && countdownSettings ? 'burger-menu' : 'burger-menu burget-menu-move')}
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
              Token
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
              href="https://app.3air.io/"
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
