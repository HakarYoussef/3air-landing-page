import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
// import Container from 'react-bootstrap/esm/Container';
import FrictionlessCard from '../FrictionlessExperience/FrictionlessCard';
import SubHeader from '../Subheader/SubHeader';
import './EdicationStyles.scss';

function Edication() {
  return (
    <>
      <Container className="fluid EdicationContainer">
        <div className="ediction-description">
          <SubHeader
            subHeaderText={'Education & Empowerment'}
            firstText={'Learn about blockchain with learn & earn incentives'}
            secondText={
              '3air is the bridge between the physical world and Web3. Our on-ground teams provide education to users with Learn & Earn incentives:'
            }
          />
        </div>
        <Container>
          <Row className="EdicationBottom">
            <Col
              xl={7}
              lg={7}
              md={7}
              sm={12}
              xsm={12}
              className="EdicationLeftSide"
            >
              <FrictionlessCard
                CardImage={process.env.PUBLIC_URL+ '/assets/newUserIcon.svg'}
                CardText={'Staked tokens for each new user'}
              />
              <FrictionlessCard
                CardImage={process.env.PUBLIC_URL+ '/assets/bagIcon.svg'}
                CardText={'Student sponsoring and job creation'}
              />
              <FrictionlessCard
                CardImage={process.env.PUBLIC_URL+ '/assets/giftIcon.svg'}
                CardText={'Tokenized rewards system for grades'}
              />
            </Col>
            <Col
              xl={5}
              lg={5}
              md={5}
              sm={12}
              xsm={12}
              className="EdicationImageWrapper"
            >
              <Image src={process.env.PUBLIC_URL+'/assets/EdicationIllustration.svg'} width={'100%'} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Edication;
