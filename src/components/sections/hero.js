import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px 30px;
    margin-top: 50px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
  }

  .hero-social {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    color: var(--light-slate);

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Hero = () => {
    const one = <h1 className="medium-heading">Hi, my name is</h1>;
    const two = <h2 className="big-heading">Yatharth Gupta</h2>;
    const three = <h3 className="medium-heading">I build AI agents and the platforms that apps run on.</h3>;
  const four = (
    <p>
      I'm a Senior Software Engineer and Team Lead at myKaarma. Right now I'm leading mkOS, the new
      platform that all of our dealership apps plug into, and building AI agents that teams across the
      company use. I also write about software engineering on{' '}
      <a href="https://medium.com/@yatharthgupta230799" target="_blank" rel="noreferrer">
        Medium
      </a>
      .
    </p>
  );
  const five = (
    <div className="hero-actions">
      <a className="email-link" href="/#projects">
        See my work
      </a>
      <ul className="hero-social">
        {socialMedia.map(({ name, url }) => (
          <li key={name}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </StyledHeroSection>
  );
};

export default Hero;
