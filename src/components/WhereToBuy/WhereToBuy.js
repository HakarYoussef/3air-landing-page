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
        <h2 className="wheretobuyTitleLeft">Live on</h2>
        <Container className="wheretobuySubSectionLeft">
          <a href="https://coinmarketcap.com/currencies/3air/" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + '/assets/coinmarketcap.svg'} alt="CoinMarketCap" width="180" height="56" />
          </a>
          { width <= 767 ? (<br/>) : (<></>) }
          <a href="https://www.coingecko.com/en/coins/3air" target="_blank" rel="noreferrer">
            <img src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png" alt="CoinGecko" width="140" height="39" />
          </a>
        </Container>
      </div>
      <div className="wheretobuySectionRight">
        <h2 className="wheretobuyTitleRight">Where to Buy</h2>
        <Container className="wheretobuySubSectionRight">
          <a href="https://www.mexc.com/exchange/3AIR_USDT" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + '/assets/mexc-global.svg'} alt="MEXC Global"/>
          </a>
          { width <= 767 ? (<br/>) : (<></>) }
          <a href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0x596834746B5b78F31A089EE7853fa595682824B7" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + '/assets/pancakeswap.svg'} alt="PancakeSwap" width="160" height="56" />
          </a>
          { width <= 767 ? (<br/>) : (<></>) }
          <a href="https://http://app.3air.io" target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + '/assets/airLogoWhite.svg'} alt="3Air" height="27" />
          </a>
        </Container>
      </div>
    </Container>
  );
}

export default WhereToBuy;
