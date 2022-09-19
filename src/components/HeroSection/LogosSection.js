import React from 'react';
import './LogosSection.scss';
import Container from 'react-bootstrap/Container';

function LogosSection() {
  return (
    <>
      <Container className="logos-sec">
        <h2 className="feature">Featured in</h2>
        <Container className="featuredContainer">
          <img height={28} src={process.env.PUBLIC_URL+'/assets/cointelegraph.svg'} alt="company-logo" />

          <img height={28} src={process.env.PUBLIC_URL+'/assets/bitcoin.png'} alt="company-logo" />

          <img height={28} src={process.env.PUBLIC_URL+'/assets/investing.svg'} alt="company-logo" />

          <img height={28} src={process.env.PUBLIC_URL+'/assets/bitcoinist.svg'} alt="company-logo" />

          <img height={28} src={process.env.PUBLIC_URL+'/assets/cp.svg'} alt="company-logo" />

          <img height={28} src={process.env.PUBLIC_URL+'/assets/yahoo.svg'} alt="company-logo" />

          <img height={28} src={process.env.PUBLIC_URL+'/assets/amb.png'} alt="company-logo" />
        </Container>
      </Container>
    </>
  );
}

export default LogosSection;
