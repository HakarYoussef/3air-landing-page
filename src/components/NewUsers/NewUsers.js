import React, { useEffect, useState } from 'react';
import './NewUsers.scss';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

function NewUsers() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  });

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
            {width > 767 ? (
              <img src={process.env.PUBLIC_URL+'/assets/users-diagram.svg'} alt="user-diagram-lg" />
            ) : (
              <img src={process.env.PUBLIC_URL+'/assets/diagram-1-mobile.svg'} alt="user-diagram-sm" />
            )}
          </div>
        </Container>
      </Container>
      <Container className="doll">
        <div className="users-doll">
          <img
            src={process.env.PUBLIC_URL+'/assets/users-doll.svg'}
            alt="doll"
            height={330}
            width={270}
          />
        </div>
      </Container>
    </div>
  );
}

export default NewUsers;
