import styled from 'styled-components';

const bezier = 'cubic-bezier(.77,.47,.57,.97)';
const speed_fast = '0.25s';

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 100%;
  width: 40%;
  height: 100%;
  background-color: ${props => props.color};

  /* inactive */
  transition: right 0.25s ease 0.15s, width 0.25s ease 0.2s;

  ${props =>
    props.state === 'peeking' &&
    `
    right: calc(100% - 30px);
  `}

  ${props =>
    props.state === 'exiting' &&
    `
      right: 0;
      width: 100%;
      transition: right 0.6s ${bezier}, width 0.6s ${bezier}, background-color 0.3s ease;
    `}
`;
