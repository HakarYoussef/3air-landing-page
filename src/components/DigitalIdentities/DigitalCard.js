import React from 'react';
import './DigitalStyles.scss';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { motion } from 'framer-motion';

function DigitalCard({ CardImage, CardText }) {
  return (
    <>
      <Container
        as={motion.div}
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          staggerChildren: 0.5,
        }}
      >
        <Card className="digitalCardContainer" border="0">
          <div>
            <Card.Img
              variant="top"
              src={CardImage}
              width={'108px'}
              height={'96px'}
            />
          </div>
          <Card.Body>
            <Card.Text>{CardText}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default DigitalCard;
