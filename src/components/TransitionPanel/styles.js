import styled, { css, keyframes } from 'styled-components';
import { durationUnitless } from '../../styles/transition';

const shrink = keyframes`
  from { width: 200%; }
  to { width: 5%; }
`;

const getShrink = originalWidth => keyframes`
  from { width: ${originalWidth}%; }
  to { width: ${originalWidth * 0.5}%; }
`;

export const Container = styled.section`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 100%;
  width: 200%;
  height: 100%;
  background-color: #d6e03d;

  ${props =>
    props.status === 'entering' &&
    css`
      animation: ${shrink} ${durationUnitless}ms ease;
    `}
`;

const widthCalc = index => 100 - 6 * (index * index) - 12 * index;

export const Panel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => `${widthCalc(props.index)}%`};
  height: 100%;
  background-color: ${props => props.color};

  ${props =>
    props.status === 'entering' &&
    css`
      animation: ${getShrink(widthCalc(props.index))} ${durationUnitless}ms ease
        forwards;
    `}
`;
