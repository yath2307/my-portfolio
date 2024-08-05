import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email, phone } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    margin-left: 20px;
  }
  
  .center-align {
    justify-content: center;
  }
  
  .center-align::after {
    display: none !important;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading center-align">Contact Me</h2>
        <p>If you're interested in working together, have any questions, or just want to say hello, feel free to reach out!
          <br></br><br></br>
          Address: 266, Green Park Main, Bareilly, Uttar Pradesh, 243006
          <br></br>
          All social media profiles attached to the buttons.
        </p>
        <a className="email-link" href={`mailto:${email}`}>Email</a>
        <a className="email-link" href={`tel:${phone}`}>Call</a>
    </StyledContactSection>
  );
};

export default Contact;
