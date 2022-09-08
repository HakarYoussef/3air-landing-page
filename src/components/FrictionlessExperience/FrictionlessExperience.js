import React from 'react';
import SubHeader from '../Subheader/SubHeader';
import FrictionlessCard from './FrictionlessCard';
import './FrictionlessExperienceStyle.scss';
import Stats from './Stats';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

function FrictionlessExperience() {
  return (
    <Container className="friction">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{
          staggerChildren: 0.5,
        }}
      >
        <h5 className="HeaderFirstLine">A frictionless experience into</h5>
        <h4 className="HeaderSecondLine">Web3, accessible to all</h4>
      </motion.div>
      <SubHeader
        subHeaderText={'Connectivity & Entertainment'}
        firstText={'Broadband high-speed Internet, TV and IP Telephony'}
        secondText={
          '3air uses innovative, proprietary technology to provide broadband high-speed internet wirelessly through the air.'
        }
      />
      <motion.div className="CardContainer">
        <motion.div
          className="frictionCards"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            staggerChildren: 0.5,
            duration: 0.4,
          }}
        >
          <FrictionlessCard
            CardImage={'assets/hammerIcon.svg'}
            CardText={'No need to dig trenches'}
          />
        </motion.div>
        <motion.div
          className="frictionCards"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            staggerChildren: 0.5,
            duration: 0.43,
          }}
        >
          <FrictionlessCard
            CardImage={'assets/tvIcon.svg'}
            CardText={'Digital TV at home and in the app'}
          />
        </motion.div>
        <motion.div
          className="frictionCards"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            staggerChildren: 0.5,
            duration: 0.45,
          }}
        >
          <FrictionlessCard
            CardImage={'assets/ipTelephoneIcon.svg'}
            CardText={'IP Telephony to facilitate businesses'}
          />
        </motion.div>
        <motion.div
          className="frictionCards"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            staggerChildren: 0.5,
            duration: 0.47,
          }}
        >
          <FrictionlessCard
            CardImage={'assets/badgeIcon.svg'}
            CardText={'Stable, reliable and affordable'}
          />
        </motion.div>
      </motion.div>

      <Container
        as={motion.div}
        className="statsContainer"
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          staggerChildren: 0.5,
        }}
      >
        <div className="statsStyle">
          <motion.div
            className="statsFirstBlock"
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              staggerChildren: 0.5,
              duration: 0.3,
            }}
          >
            <Stats StatNum={'1,000+'} StatText={'Mbps/user'} />
            <div className="statssecondBlock">
              <Stats StatNum={'50km'} StatText={'base station range'} />
            </div>
          </motion.div>

          <motion.div
            className="statsFirstBlock"
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              staggerChildren: 0.5,
              duration: 0.33,
            }}
          >
            <Stats StatNum={'15,000'} StatText={'users/base station'} />{' '}
            <div className="statssecondBlock">
              <Stats
                StatNum={'17,000 Mbps'}
                StatText={'base station (x240 faster than mobile)'}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Container>
  );
}

export default FrictionlessExperience;
