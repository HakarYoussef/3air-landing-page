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
          <img height={36} src={process.env.PUBLIC_URL+'/assets/iceaddis.svg'} alt="Partners" />

          <img height={22} src={process.env.PUBLIC_URL+'/assets/it.png'} alt="Partners" />

          <img height={36} src={process.env.PUBLIC_URL+'/assets/tele.png'} alt="Partners" />

          <img height={58} src={process.env.PUBLIC_URL+'/assets/africa.png'} alt="Partners" />

          <img height={38} src={process.env.PUBLIC_URL+'/assets/hero.png'} alt="Partners" />

          <img height={32} src={process.env.PUBLIC_URL+'/assets/skale.svg'} alt="Partners" />

          <img height={32} src={process.env.PUBLIC_URL+'/assets/unilend.png'} alt="Partners" />

          <img height={32} src={process.env.PUBLIC_URL+'/assets/bitliberte.png'} alt="Partners" />

          <img height={48} src={process.env.PUBLIC_URL+'/assets/knit.png'} alt="Partners" />

          <img height={48} src={process.env.PUBLIC_URL+'/assets/ame.png'} alt="Partners" />

          <img height={48} src={process.env.PUBLIC_URL+'/assets/nest.png'} alt="Partners" />
        </Container>
      </Container>
    </>
  );
}

export default Partners;
