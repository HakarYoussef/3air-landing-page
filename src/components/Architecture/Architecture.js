import React from 'react';
import './ArchitectureStyle.scss';
import Container from 'react-bootstrap/esm/Container';

function Architecture() {
  return (
    <>
      <Container className="archContainer">
        <h2>Architecture</h2>
      </Container>
      <Container fluid className='archMain'>
        <Container fluid className='archInner'>
          <div className='archImage'>
              <img src="./assets/architectureImg.svg" alt='Architecture'/>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Architecture;