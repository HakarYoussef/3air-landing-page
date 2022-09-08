import React from 'react';
import './SubscriptionStyles.scss';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { motion } from 'framer-motion';

function Subscription() {
  return (
    <>
      <Container>
        <div className="topHrLine" />

        <motion.div
          className="subContainer"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            staggerChildren: 0.5,
          }}
        >
          <h1>Register now to stay up-to-date!</h1>
          <InputGroup>
            <Form.Control
              placeholder="Email"
              aria-label="Recipient's email"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              SUBSCRIBE
            </Button>
          </InputGroup>
        </motion.div>
      </Container>
    </>
  );
}

export default Subscription;
