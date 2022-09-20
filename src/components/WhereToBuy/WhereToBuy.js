import React, { useState, useEffect } from 'react';
import './WhereToBuy.scss';
import Container from 'react-bootstrap/Container';
import { FaCheckCircle } from 'react-icons/fa';

function WhereToBuy() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Container className="wheretobuyContainer">
      <div className="wheretobuySectionLeft">
        <Container className="wheretobuySubSectionLeft">
          <h2 className="wheretobuyTitle">Where To Buy</h2>
          <p className="wheretobuyPara">
            Want some 3AIR at presale prices?
            <br/>
            There's a voucher up on <a href="https://solv.finance/" target="_blank" className="solvFinance" rel="noreferrer">Solv.finance</a>
          </p>
          {
            width > 767 ? (
              <>
                <div className="wheretobuyCheckList">
                  <FaCheckCircle />&nbsp;No whitelisting&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FaCheckCircle />&nbsp;No KYC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FaCheckCircle />&nbsp;No minimum
                </div>
                <p></p>
              </>
            ) : (
              <>
                <p className="wheretobuyCheckList">
                  <FaCheckCircle />&nbsp;No whitelisting
                </p>
                <p className="wheretobuyCheckList">
                  <FaCheckCircle />&nbsp;No KYC
                </p>
                <p className="wheretobuyCheckList">
                  <FaCheckCircle />&nbsp;No minimum
                </p>
              </>
            )
          }
          <p>
            All you have to do is connect to your wallet.
          </p>
          <a className="wheretobuyGetithere btn btn-primary" href="https://app.solv.finance/marketplace/vesting?network=bsc-mainnetNo" target="_blank" rel="noreferrer">
            Get it here
          </a>
        </Container>
      </div>
      <div className="wheretobuySectionRight">
        <img src={process.env.PUBLIC_URL + '/assets/WhereToBuy.png'} alt="SOLV PROTOCOL"/>
      </div>
    </Container>
  );
}

export default WhereToBuy;
