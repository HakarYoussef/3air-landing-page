import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FrictionlessCard from '../FrictionlessExperience/FrictionlessCard';
import SubHeader from '../Subheader/SubHeader';
import './NFTsStyle.scss';
import { motion } from 'framer-motion';

function NFTsandOwnership() {
  return (
    <>
      <Container>
        <SubHeader subHeaderText={'NFTs & Ownership'} />
        <motion.div
          className="nftMainContainer"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            staggerChildren: 0.5,
          }}
        >
          <p>NFTs grant you access to the Internet - first time ever</p>
          <div className="nftContainer">
            <div className="nftWidgets">
              <FrictionlessCard
                CardText={
                  'Users buy, share, and resell internet services as an NFT'
                }
                CardImage={'assets/nftIcon.svg'}
              />
            </div>
            <div className="nftWidgets">
              <FrictionlessCard
                CardText={
                  'Affordable, decentralized mesh internet for everyone'
                }
                CardImage={'assets/chainIcon.svg'}
              />
            </div>
            <div className="nftWidgets">
              <FrictionlessCard
                CardText={'Super fast and stable broadband for businesses'}
                CardImage={'assets/speedIcon.svg'}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
}

export default NFTsandOwnership;
