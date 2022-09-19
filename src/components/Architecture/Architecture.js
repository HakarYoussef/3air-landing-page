import React, { useState, useEffect } from 'react';
import './ArchitectureStyle.scss';
import Container from 'react-bootstrap/esm/Container';

function Architecture() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Container className="archContainer">
        <h2>Architecture</h2>
      </Container>
      <Container fluid className="archMain">
        <Container fluid className="archInner">
          <div className="archImage">
            {
              width > 767 ? (
                <img className="archImgVertical" src={process.env.PUBLIC_URL+'/assets/architectureImgHorizontal.png'} alt="Architecture" />
              ) : (
                <img className="archImgVertical" src={process.env.PUBLIC_URL+'/assets/architectureImgVertical.png'} alt="Architecture" />
              )
            }
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Architecture;
