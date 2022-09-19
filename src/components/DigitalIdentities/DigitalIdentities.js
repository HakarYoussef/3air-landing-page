import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import DigitalCard from './DigitalCard';
import SubHeader from '../Subheader/SubHeader';
import './DigitalStyles.scss';

function DigitalIdentities() {
  return (
    <Container className="fuild CardContainerWrapper">
      <SubHeader
        subHeaderText={'Digital Identities'}
        firstText={'Trustless, secure, and private'}
        secondText={
          'Users can check credit scores, medical history, and proof of education verifiable directly on the blockchain'
        }
      />
      <div className="CardContainerBottom">
        <DigitalCard
          CardText={'Easy, cheap, and trustless from anywhere in the world'}
          CardImage={process.env.PUBLIC_URL+ '/assets/easyIcon.svg'}
        />
        <DigitalCard
          CardText={'Effective identification solution'}
          CardImage={process.env.PUBLIC_URL+ '/assets/eyeIcon.svg'}
        />
        <DigitalCard
          CardText={'Identity-as-a-service by ISPs for additional revenue'}
          CardImage={process.env.PUBLIC_URL+ '/assets/fingerPrintIcon.svg'}
        />
        <DigitalCard
          CardText={'Potentially recognizable throughout the ecosystem'}
          CardImage={process.env.PUBLIC_URL+ '/assets/identityIcon.svg'}
        />
      </div>
    </Container>
  );
}

export default DigitalIdentities;
