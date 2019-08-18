import styled, { css, keyframes } from 'styled-components';
import { durationUnitless } from '../../styles/global';

const shrink = keyframes`
  from { width: 80%; }
  to { width: 40%; }
`;

export const Container = styled.section`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 100%;
  width: 80%;
  height: 100%;
  background-color: rebeccapurple;

  ${props =>
    props.status === 'entering' &&
    css`
      animation: ${shrink} ${durationUnitless / 10}ms ease;
    `}
`;
