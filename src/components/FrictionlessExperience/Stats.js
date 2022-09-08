import React from 'react';
import './StatsStyle.scss';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

function Stats({ StatNum, StatText }) {
  return (
    <Container
      as={motion.div}
      className="numTextContainer"
      initial={{ y: 75, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        staggerChildren: 0.5,
      }}
    >
      <div className="statNum">{StatNum}</div>
      <div className="statText">{StatText}</div>
    </Container>
  );
}

export default Stats;
