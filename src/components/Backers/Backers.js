import React from 'react';
import Container from 'react-bootstrap/Container';
import './Backer.scss';

function Backers() {
  return (
    <>
      <Container className="backersContainer">
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
          BACKERS
        </h2>
        <Container className="logosContainerBackers">
          <img height={38} src={process.env.PUBLIC_URL+'/assets/cv.svg'} alt="Backers" />

          <img height={38} src={process.env.PUBLIC_URL+'/assets/co.svg'} alt="Backers" />

          <img height={36} src={process.env.PUBLIC_URL+'/assets/acacia.svg'} alt="Backers" />

          <img height={36} src={process.env.PUBLIC_URL+'/assets/capital.svg'} alt="Backers" />

          <img height={42} src={process.env.PUBLIC_URL+'/assets/helion.svg'} alt="Backers" />

          <img height={42} src={process.env.PUBLIC_URL+'/assets/cvvc.png'} alt="Backers" />
        </Container>
      </Container>
    </>
  );
}

export default Backers;
