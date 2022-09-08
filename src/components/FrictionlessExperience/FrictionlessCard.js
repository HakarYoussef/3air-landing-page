import React from 'react';
import Card from 'react-bootstrap/Card';
import './FrictionlessCard.scss';

function FrictionlessCard({ CardText, CardImage }) {
  return (
    <>
      <Card bg="transparent" className="cardContainer" border="0">
        <Card.Img style={{ height: '2.5rem' }} variant="top" src={CardImage} />
        <Card.Body>
          <Card.Text style={{ fontSize: '1rem', marginTop: '10px' }}>
            {CardText}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default FrictionlessCard;
