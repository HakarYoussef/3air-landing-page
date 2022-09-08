import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import DigitalCard from './DigitalCard';
import './DigitalStyles.scss';
import SubHeader from '../Subheader/SubHeader';

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
          CardImage={'assets/easyIcon.svg'}
        />
        <DigitalCard
          CardText={'Effective identification solution'}
          CardImage={'assets/eyeIcon.svg'}
        />
        <DigitalCard
          CardText={'Identity-as-a-service by ISPs for additional revenue'}
          CardImage={'assets/fingerPrintIcon.svg'}
        />
        <DigitalCard
          CardText={'Potentially recognizable throughout the ecosystem'}
          CardImage={'assets/identityIcon.svg'}
        />
      </div>
    </Container>
  );
}

export default DigitalIdentities;
