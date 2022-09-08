import React from 'react';
import './NewUsers.scss';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

function NewUsers() {
  return (
    <div>
      <Container fluid className="newusers">
        <Container>
          <motion.div
            className="billions"
            initial={{ y: 75, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              staggerChildren: 0.5,
            }}
          >
            <h2>Billions of new users.</h2>
            <h3>Unlimited potential for all.</h3>
          </motion.div>
          <div className="users-diagram">
            <img src="./assets/users-diagram.svg" alt="bg" />
          </div>
        </Container>
      </Container>
      <Container className="doll">
        <div className="users-doll">
          <img
            src="./assets/users-doll.svg"
            alt="bg"
            height={330}
            width={270}
          />
        </div>
      </Container>
    </div>
  );
}

export default NewUsers;
