import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FrictionlessCard from '../FrictionlessExperience/FrictionlessCard';
import SubHeader from '../Subheader/SubHeader';
import './DefiAndBankingStyles.scss';
import { motion } from 'framer-motion';

function DefiAndBanking() {
  return (
    <>
      <Container className="fluid">
        <SubHeader
          subHeaderText={'DeFi & Banking'}
          firstText={
            'Banking the unbanked - Old promise, new approach (that works!)'
          }
          secondText={
            'Use crypto, credit cards, bank transfers or cash to access decentralized lending, borrowing, yield farming, and more.'
          }
        />
      </Container>

      <motion.div
        className=" BottomSectionContainer"
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          staggerChildren: 0.5,
          duration: 0.4,
        }}
      >
        <Container className="cardIconsContainer">
          <motion.div></motion.div>
          <FrictionlessCard
            CardText={'Staking & farming'}
            CardImage={'assets/moneyIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Safer lending'}
            CardImage={'assets/handIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Bandwidth sharing'}
            CardImage={'assets/bandIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Vast ecosystem growth opportunities'}
            CardImage={'assets/EcoIcon.svg'}
          />
          <FrictionlessCard
            CardText={'Play and earn and Learn and earn apps'}
            CardImage={'assets/gameIcon.svg'}
          />
        </Container>
      </motion.div>
    </>
  );
}

export default DefiAndBanking;
