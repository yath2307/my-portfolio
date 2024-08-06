import React, {useEffect, useRef} from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import {srConfig} from '@config';
import sr from '@utils/sr';
import {usePrefersReducedMotion} from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  width: max-content;

  .personal-life-header {
    margin-top: 40px;
  }
  
  .font-small {
    font-size: var(--fz-lg);
  }
  
  .center-align {
    text-align: center;
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    //grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({theme}) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--white);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealContainer.current, srConfig());
    }, []);

    const skills = ['Programming Languages: Java, C++, JavaScript and Python.', 'Back-end: Spring Boot, Micronaut and Flask along with API Gateway\n' +
    'management using Kong.', 'Front-end: Angular, GWT, React and Gatsby.', 'Event-Driven Architecture: RMQ, Kafka, and AWS EventBridge.', 'Data Storage & Processing: Relational databases (MariaDB, PostgreSQL) and NoSQL databases\n' +
    '(MongoDB), along with caching solutions (Redis), rule engines (Drools), and search platforms (OpenSearch).', 'DevSecOps: Vulnerability management tools like Snyk, DefectDojo, DependencyTrack, and ThreatMapper.', 'Infrastructure & Automation: Docker, Kubernetes, Ansible, Terraform and Jenkins for\n' +
    'CI/CD and automation tasks.'];

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hello! My name is Yatharth and I’m a technology enthusiast working as a software engineer
                            with more than 4 years of experience now.
                            <br></br><br></br>Since childhood,
                            I've harboured a deep fascination with mathematics and problem-solving. This passion
                            naturally evolved
                            into a love for computer programming during my college years at IIT BHU, where I earned my
                            Bachelor's
                            degree in Electronics Engineering in 2021.
                            {/*<br></br><br></br>During my college, I’ve had the privilege of working as an intern at*/}
                            {/*<br></br><a href="https://mykaarma.com/">myKaarma</a> (A year long internship)*/}
                            {/*<br></br><a href="https://www.rivia.ai/">Rivia.AI</a> (3 months internship in a newly found startup)*/}
                            <br></br><br></br>Following graduation, I embarked on my software
                            development
                            journey at <a href="https://mykaarma.com/">myKaarma</a>, where I was surrounded by brilliant
                            minds and a fast-paced
                            environment. This
                            experience was instrumental in honing my programming skills and propelling me into a
                            confident and
                            well-rounded developer. I've had the privilege of driving multiple major projects solo,
                            leading each to
                            successful completion.
                        </p>

                        <p>
                            I also recently{' '}
                            <a href="https://medium.com/@yatharthgupta230799">
                                started writing blogs
                            </a>{' '}
                            that is mainly focused on Software Development Ideas, technologies and core concepts.
                        </p>

                        <p>Here are a few technologies I’ve been working with:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <StaticImage
                            className="img"
                            src="../../images/yatharth_gupta.jpg"
                            width={500}
                            quality={100}
                            formats={['AUTO', 'WEBP', 'AVIF']}
                            alt="Headshot"
                        />
                    </div>
                    <div>
                        <h2 className="personal-life-header center-align">Personal Life:</h2>
                        <p className="center-align font-small">I'm a gymholic guy and loves sports. I regularly play Badminton, Table Tennis and Cricket. In
                            my free time I really enjoy watching Anime with a cup of coffee and a packet of chips. I'm
                            not much into movies but enjoy watching good recommendations (especially horror!).
                            I'm interested in finance and trading as well and enjoy reading articles and exploring good
                            investment options.
                            <br></br>I want to start my own company or business someday
                            and waiting for a good opportunity to strike and in the meantime I'll continue to get better and
                            hone my skills.</p>
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
