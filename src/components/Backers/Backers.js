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
          <img height={36} src="./assets/cv.svg" alt="Backers" />

          <img height={36} src="./assets/co.svg" alt="Backers" />

          <img height={36} src="./assets/acacia.svg" alt="Backers" />

          <img height={36} src="./assets/capital.svg" alt="Backers" />

          <img height={36} src="./assets/helion.svg" alt="Backers" />
        </Container>
      </Container>
    </>
  );
}

export default Backers;
