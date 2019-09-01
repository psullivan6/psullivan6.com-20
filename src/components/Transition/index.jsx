import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

// Utilities
import { rhythm } from '../../utils/typography';
import { durationUnitless, duration } from '../../styles/transition';

// Components
import TransitionPanel from '../TransitionPanel';

import styled, { css, keyframes } from 'styled-components';

const wipe = keyframes`
  from {
    right: 300%;
  }
  to {
    right: 0%;
  }
`;

const halfDuration = `${durationUnitless / 2}ms`;

const Container = styled.main`
  width: 100%;
  background-color: white;

  ${props =>
    props.status === 'entering' &&
    css`
      z-index: 1;
      position: absolute;
      right: 300%;
      animation: ${wipe} ${duration} ease;
    `}

  ${props =>
    props.status === 'exiting' &&
    `
    opacity: 0;
    background: #ccc;
    transition: opacity ${halfDuration} ease ${halfDuration}, background ${duration} ease;
  `}
`;

const Transition = ({ children, location, isHomepage }) => (
  <TransitionGroup component={null}>
    <ReactTransition
      key={location.pathname}
      timeout={{ enter: durationUnitless, exit: durationUnitless }}
    >
      {status => (
        <Container status={status} isHomepage={isHomepage}>
          <section
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
            }}
          >
            {children}
          </section>
          <TransitionPanel
            status={status}
            quantity={3}
            isHomepage={isHomepage}
          />
        </Container>
      )}
    </ReactTransition>
  </TransitionGroup>
);

export default Transition;
