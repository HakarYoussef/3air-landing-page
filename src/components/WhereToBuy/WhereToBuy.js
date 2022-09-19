import React from 'react';
import './WhereToBuy.scss';
import Container from 'react-bootstrap/Container';
import { FaCheckCircle } from 'react-icons/fa';

function WhereToBuy() {
  return (
    <Container className="wheretobuyContainer">
      <div className="wheretobuySectionLeft">
        <h2 className="wheretobuyTitle">Where To Buy</h2>
        <p className="wheretobuyPara">
          Want some 3AIR at presale prices?
          <br/>
          There's a voucher up on <a href="https://solv.finance/" target="_blank" class="solvFinance" rel="noreferrer">Solv.finance</a>
        </p>
        <p className="wheretobuyCheckList">
          <FaCheckCircle />&nbsp;No whitelisting&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaCheckCircle />&nbsp;No KYC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaCheckCircle />&nbsp;No minimum
        </p>
        <p>
          All you have to do is connect to your wallet.
        </p>
        <a className="wheretobuyGetithere btn btn-primary" href="https://app.solv.finance/marketplace/vesting?network=bsc-mainnetNo" target="_blank" rel="noreferrer">
          Get it here
        </a>
      </div>
      <div className="wheretobuySectionRight">
        <img src={process.env.PUBLIC_URL + '/assets/WhereToBuy.png'} alt="SOLV PROTOCOL"/>
      </div>
    </Container>
  );
}

export default WhereToBuy;
