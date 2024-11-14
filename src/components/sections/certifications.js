import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from "styled-components";
import {Icon} from "../icons";

const StyledTabPanel = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 5px;

    .cred-button {
        ${({ theme }) => theme.mixins.smallButton};
        margin-left: 30px;

        svg {
            width: 20px;
            height: 20px;
            margin-top: -4px;
        }
    }
    
    .subheading {
        color: var(--green);
    }
    
    .parent-div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
    
    .main-cred-div {
        //margin-bottom: 40px;
    }

    ul {
        ${({ theme }) => theme.mixins.fancyList};
    }
`;

const Certifications = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/certificates/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              heading
              credentials
              platform
              issued
              credentialId
            }
          }
        }
      }
    }
  `);

  const certificates = data.jobs.edges;

  return (
    <StyledTabPanel id="certifications" role="tabpanel">
      <h2 className="numbered-heading">My Certifications:</h2>

      <div className="inner">
        <div className="parent-div">
          {certificates.map(({ node }, index) => {
            const { frontmatter } = node;
            const { heading, credentials, platform, issued, credentialId } = frontmatter;

            return (
              <div key={index} className="main-cred-div">
                <div className="cred-div">
                  <ul>
                    <li>
                      {heading}
                      <br />
                      <span className="subheading">Issued: {issued}</span>
                      <br />
                      <span className="subheading">Credential ID: {credentialId}</span>
                    </li>
                  </ul>
                </div>
                <a className="cred-button" href={credentials}>
                  View Certificate <Icon name="External" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </StyledTabPanel>
  );
};

export default Certifications;
