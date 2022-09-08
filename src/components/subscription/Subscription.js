import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import Reaptcha from 'reaptcha';
import './SubscriptionStyles.scss';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { motion } from 'framer-motion';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState({
    note: '',
    status: '',
  });

  const recaptchaRef = React.useRef();

  const onVerify = async (recaptchaResponse) => {
    const token = recaptchaResponse;

    if (!token) {
      setNote({
        note: 'Something went wrong. Please try again.',
        status: 'error',
      });
      return setSubmitting(false);
    }

    try {
      const data = JSON.stringify({ email, recaptcha_token: token });

      await fetch(
        'https://mailproxy.3air.io/api/sendgrid/v1/subscribe?tags=blog',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
          },
          body: data,
        }
      )
        .then(() => {
          setNote({
            note: 'Thank you for subscribing.',
            status: 'success',
          });
          return setSubmitting(false);
        })
        .catch(() => {
          setNote({
            note: 'Something went wrong. Please try again.',
            status: 'error',
          });
          return setSubmitting(false);
        });
    } catch (error) {
      setNote({
        note: 'Something went wrong. Please try again.',
        status: 'error',
      });
      return setSubmitting(false);
    }
  };

  const subscribe = async (e) => {
    console.log('subscribe clicked');
    e.preventDefault();
    setSubmitting(true);
    setNote({
      note: '',
      status: '',
    });

    const regex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,7})+$/);
    if (!regex.test(email)) {
      setNote({
        note: 'Email error. Please enter a valid email and try again.',
        status: 'error',
      });
      return setSubmitting(false);
    }
    console.log('correct email type');
    console.log(recaptchaRef);
    recaptchaRef.current.execute();

  };
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
          <form id="newsletter" onSubmit={subscribe}>
            <InputGroup>
              <Reaptcha
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onVerify={onVerify}
              />
              <Form.Control
                placeholder="Email"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                variant="outline-secondary"
                id="button-addon2"
                disabled={submitting}
              >
                SUBSCRIBE
              </Button>
              <div id="subscribe-note" className={note.note ? note.status : ''}>
                {note.note}
              </div>
            </InputGroup>
          </form>
        </motion.div>
      </Container>
    </>
  );
}

export default Subscription;