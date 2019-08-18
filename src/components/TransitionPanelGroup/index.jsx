import React from 'react';
import { TransitionState } from 'gatsby-plugin-transition-link';

// Components
import TransitionPanel from '../TransitionPanel';

// Styles
import { Container } from './styles';

const TransitionPanelGroup = props => {
  console.log('props', props);
  const {
    colors: [primaryColor, ...restColors],
  } = props;

  return (
    <TransitionState>
      {transState => {
        const state =
          transState.transitionStatus === 'entered'
            ? props.state
            : transState.transitionStatus;

        return (
          <Container color={primaryColor} state={state}>
            {restColors.map((color, index) => (
              <TransitionPanel
                key={color}
                color={color}
                index={index}
                state={state}
              />
            ))}
          </Container>
        );
      }}
    </TransitionState>
  );
};

export default TransitionPanelGroup;
