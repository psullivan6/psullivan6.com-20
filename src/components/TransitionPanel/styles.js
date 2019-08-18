import styled, { css } from 'styled-components';

const panelStyles = [
  css`
    width: 40%;
    transition: width 0.9s ease 0.24s;
  `,
  css`
    width: 21%;
    transition: width 0.9s ease 0.3s;
  `,
  css`
    width: 6%;
    transition: width 0.9s ease 0.36s;
  `,
];

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${props => props.color};
  ${props => panelStyles[props.index]};

  ${props =>
    props.state === 'exiting' &&
    `
    width: 100%;
  `}
`;
