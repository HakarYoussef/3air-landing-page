import React from 'react';
import './Hero.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import HeroImage from '../heroImage/heroImage';

function Hero() {
  return (
    <>
      <Container fluid className="main-hero">
        <Container className="hero">
          <Row>
            <Col xl={8} lg={8} md={12} sm={12} xsm={12}>
              <div className="connectivity">
                <h1>
                  Connectivity <br />
                  <span>
                    and Banking <br />
                  </span>
                  <span className="billion">for the Next Billion</span>
                </h1>
              </div>
              <div className="limitless">
                <h2>Limitless Potential</h2>
                <p>
                  The world's first blockchain platform that enables individuals
                  and businesses to thrive on Web3 by providing broadband
                  internet connectivity.
                  <br />
                  <br />3 billion people cannot access blockchain services
                  because they are not connected to the internet. We use
                  proprietary technology to build broadband infrastructure where
                  others have failed.
                </p>
              </div>
              <div>
                <ButtonGroup className="hero-btns">
                  <Button
                    className="litepaper"
                    href="https://docs.3air.io/litepaper/"
                    target="_blank"
                  >
                    <div className="btnInside">
                      LITEPAPER
                      <img src="assets/whitearrow.svg" alt="arrow" />
                    </div>
                  </Button>
                  <Button
                    className="asal-join"
                    href="https://t.me/my3air"
                    target="_blank"
                  >
                    <div className="main-join">
                      <div className="btnInside">
                        <span className="join">Join our Community</span>
                        <img src="assets/gredientarrow.svg" alt="arrow" />
                      </div>
                    </div>
                  </Button>
                </ButtonGroup>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xsm={12}></Col>
          </Row>
        </Container>
      </Container>
      <div className="heroContainer">
        <HeroImage />
      </div>
    </>
  );
}

export default Hero;
