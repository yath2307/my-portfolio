import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '@config';
import { KEY_CODES } from '@utils';
import { useOnClickOutside } from '@hooks';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--accent);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${({ $menuOpen }) => ($menuOpen ? '0.12s' : '0s')};
    transform: rotate(${({ $menuOpen }) => ($menuOpen ? '225deg' : '0deg')});
    transition-timing-function: cubic-bezier(
      ${({ $menuOpen }) => ($menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19')}
    );

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--accent);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${({ $menuOpen }) => ($menuOpen ? '100%' : '120%')};
      top: ${({ $menuOpen }) => ($menuOpen ? '0' : '-10px')};
      opacity: ${({ $menuOpen }) => ($menuOpen ? 0 : 1)};
      transition: ${({ $menuOpen }) => ($menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)')};
    }

    &:after {
      width: ${({ $menuOpen }) => ($menuOpen ? '100%' : '80%')};
      bottom: ${({ $menuOpen }) => ($menuOpen ? '0' : '-10px')};
      transform: rotate(${({ $menuOpen }) => ($menuOpen ? '-90deg' : '0')});
      transition: ${({ $menuOpen }) => ($menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)')};
    }
  }
`;

const StyledSidebar = styled.aside`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--surface);
    box-shadow: -10px 0px 30px -15px var(--shadow);
    z-index: 9;
    transform: translateX(${({ $menuOpen }) => ($menuOpen ? 0 : 100)}vw);
    visibility: ${({ $menuOpen }) => ($menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
    }

    a {
      ${({ theme }) => theme.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useOnClickOutside(wrapperRef, closeMenu);

  // While the menu is open: Escape closes it, Tab stays inside it, and widening the window past the
  // mobile breakpoint closes it.
  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const focusables = [buttonRef.current, ...navRef.current.querySelectorAll('a')];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const onKeyDown = e => {
      if (e.key === KEY_CODES.ESCAPE || e.key === KEY_CODES.ESCAPE_IE11) {
        closeMenu();
        buttonRef.current.focus();
      } else if (e.key === KEY_CODES.TAB) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const onResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <StyledMenu>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <StyledHamburgerButton
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          $menuOpen={menuOpen}
          aria-label="Menu"
          aria-expanded={menuOpen}>
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar $menuOpen={menuOpen} aria-hidden={!menuOpen}>
          <nav ref={navRef}>
            {navLinks && (
              <ol>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link to={url} onClick={closeMenu}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ol>
            )}

            <a className="resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Menu;
