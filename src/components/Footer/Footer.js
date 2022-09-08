import React from 'react';
import './Footer.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <>
      <Container className="footerwrapper" id="footer">
        <img
          src="./assets/Logo.svg"
          alt="Footer-Logo"
          className="footer-logo"
        />
        <Row className="footer-wrap">
          <Col xl={4} lg={4} md={4} sm={12}>
            <p className="footer-intro">
              <span>Connectivity</span> and Banking for the Next Billion
            </p>
            <p className="copyright">© 2022 3air, All Rights Reserved</p>
          </Col>
          <Col xl={2} lg={2} md={2} sm={6} xs={6}>
            <ul className="footer-links">
              <li>
                <a
                  href="https://docs.3air.io/whitepaper/"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="https://docs.3air.io/litepaper/"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  Litepaper
                </a>
              </li>
              <li>
                <a
                  href="https://docs.3air.io/tokenomics/3air-tokenomics/"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  Tokenomics
                </a>
              </li>
            </ul>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6} xs={6}>
            <ul className="footer-links">
              <li>
                <a
                  href="https://app.3air.io/"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  3air Application
                </a>
              </li>
              <li>
                <a
                  href="https://docs.3air.io/legal/privacy-policy/"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
          <Col
            xl={3}
            lg={3}
            md={3}
            sm={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Container className="socialmedia">
              <Row>
                <Col xl={3} lg={3} md={3} sm={3} xs={3} className="firstsocial">
                  <a
                    href="https://twitter.com/3aircrypto/"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/twitter.svg" alt="twitter" />
                  </a>
                </Col>

                <Col xl={3} lg={3} md={3} sm={3} xs={3} className="firstsocial">
                  <a
                    href="https://t.me/my3air/"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/telegram.svg" alt="telegram" />
                  </a>
                </Col>
                <Col xl={3} lg={3} md={3} sm={3} xs={3} className="firstsocial">
                  <a
                    href="https://www.linkedin.com/company/3air-crypto/"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/linkedin2.svg" alt="linkedin" />
                  </a>
                </Col>

                <Col xl={3} lg={3} md={3} sm={3} xs={3} className="firstsocial">
                  <a
                    href="https://www.tiktok.com/@3aircrypto"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/tiktok.svg" alt="tiktok" />
                  </a>
                </Col>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                  className="secondsocial"
                >
                  <a
                    href="https://discord.com/invite/3air/"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/discord.svg" alt="discord" />
                  </a>
                </Col>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                  className="secondsocial"
                >
                  <a
                    href="https://www.youtube.com/c/3aircrypto"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/youtube.svg" alt="youtube" />
                  </a>
                </Col>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                  className="secondsocial"
                >
                  <a
                    href="https://www.instagram.com/3air.crypto/"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/instagram.svg" alt="instagram" />
                  </a>
                </Col>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={3}
                  xs={3}
                  className="secondsocial"
                >
                  <a
                    href="https://www.facebook.com/3aircrypto"
                    target={'_blank'}
                    rel="noopener noreferrer"
                  >
                    <img src="./assets/fb.svg" alt="facebook" />
                  </a>
                </Col>
              </Row>
            </Container>
            <p className="copyright2">© 2022 3air, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
