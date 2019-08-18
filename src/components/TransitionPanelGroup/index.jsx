import React from 'react';
import { TransitionState } from 'gatsby-plugin-transition-link';

// Components
import TransitionPanel from '../TransitionPanel';

// Context
import { usePage } from '../../context/PageContext';

// Styles
import { Container } from './styles';

const TransitionPanelGroup = () => {
  const {
    data: { panelData },
  } = usePage();

  const {
    colors: [primaryColor, ...restColors],
  } = panelData;

  return (
    <TransitionState>
      {transState => {
        const state =
          transState.transitionStatus === 'entered'
            ? panelData.state
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
