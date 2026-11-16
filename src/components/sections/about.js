import React, {useEffect, useRef} from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import {srConfig} from '@config';
import sr from '@utils/sr';
import {usePrefersReducedMotion} from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .personal-life-header {
    margin-top: 40px;
  }
  
  .font-small {
    font-size: var(--fz-lg);
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

      .skill-group {
        color: var(--lightest-slate);
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

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
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

    const skills = [
      { group: 'AI Frameworks', items: ['LangChain', 'LangGraph', 'PydanticAI', 'Flowise'] },
      { group: 'AI Techniques', items: ['RAG', 'agentic workflows', 'prompt engineering', 'tool calling', 'multi-tool orchestration'] },
      { group: 'AI Infra', items: ['pgvector', 'MCP servers', 'OpenAI & Anthropic APIs'] },
      { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'C++'] },
      { group: 'Back-end', items: ['Spring Boot', 'Micronaut', 'Flask', 'Kong'] },
      { group: 'Front-end', items: ['Angular', 'React', 'GWT', 'Gatsby'] },
      { group: 'Databases', items: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Redis', 'OpenSearch'] },
      { group: 'Event Systems', items: ['RabbitMQ', 'Kafka', 'AWS EventBridge', 'Drools'] },
      { group: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins'] },
      { group: 'DevSecOps', items: ['Snyk', 'DefectDojo', 'Dependency-Track', 'ThreatMapper'] },
    ];

    return (
      <StyledAboutSection id="about" ref={revealContainer}>
        <h2 className="numbered-heading">About Me</h2>

        <div className="inner">
          <StyledText>
            <div>
              <p>
                Hello! I'm Yatharth. Since childhood I've loved mathematics and problem-solving, and
                at IIT BHU, where I earned my Bachelor's in Electronics Engineering in 2021, that
                turned into a love for programming.
              </p>
              {/*<br></br><br></br>During my college, I’ve had the privilege of working as an intern at*/}
              {/*<br></br><a href="https://mykaarma.com/">myKaarma</a> (A year long internship)*/}
              {/*<br></br><a href="https://www.rivia.ai/">Rivia.AI</a> (3 months internship in a newly found startup)*/}

              <p>
                I joined <a href="https://mykaarma.com/">myKaarma</a> full-time after graduating,
                following a year there as an intern. Its brilliant people and fast pace made me a
                well-rounded engineer, and I've driven several major projects solo, from design to
                production. These days I lead a team, run the mkOS project and build AI agents that
                people across the company use.
              </p>

              <p>
                I also write about software development ideas, technologies and core concepts on{' '}
                <a href="https://medium.com/@yatharthgupta230799">Medium</a>.
              </p>

              <p>Here are the technologies I work with most:</p>
            </div>

            <ul className="skills-list">
              {skills.map(({ group, items }) => (
                <li key={group}>
                  {/* Non-breaking spaces inside each tag and before each dot, so lines only break between tags. */}
                  <span className="skill-group">{group}:</span>{' '}
                  {items.map(item => item.replace(/ /g, ' ')).join(' · ')}
                </li>
              ))}
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
              <h2 className="personal-life-header">Personal Life:</h2>
              <p className="font-small">
                I'm a bit of a workaholic, but I also love sports and working out at the gym. I
                regularly play badminton, table tennis and cricket. In my free time I enjoy anime with
                a hot cup of coffee. I'm not much into movies, but I never say no to a good
                recommendation (especially horror!).
              </p>
              <p className="font-small">
                I'm also into finance and trading, and enjoy reading about markets and exploring good
                investment options. One day I'd love to build a company of my own; until then, I'm
                focused on getting better at what I do.
              </p>
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>
    );
};

export default About;
