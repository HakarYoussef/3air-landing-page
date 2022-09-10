import React from 'react';
import Container from 'react-bootstrap/Container';
import './PartnersStyles.scss';

function Partners() {
  return (
    <>
      <Container className="partnersContainer">
        <h2
          style={{
            color: '#EC1651',
            fontWeight: 800,
            fontSize: '38px',
            lineHeight: '53px',
            marginTop: '80px',
            marginBottom: '30px',
          }}
        >
          PARTNERS
        </h2>

        <Container className="logosContainer">
          <img height={36} src="./assets/iceaddis.svg" alt="Partners" />

          <img height={22} src="./assets/it.png" alt="Partners" />

          <img height={36} src="./assets/tele.png" alt="Partners" />

          <img height={58} src="./assets/africa.png" alt="Partners" />

          <img height={38} src="./assets/hero.png" alt="Partners" />

          <img height={32} src="./assets/skale.svg" alt="Partners" />
        </Container>
      </Container>
    </>
  );
}

export default Partners;
