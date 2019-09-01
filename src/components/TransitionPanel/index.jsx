import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

// Styles
import { Container, Panel } from './styles';

// [TODO] Make this dynamic
const TEST_colors = ['#0076c0', '#004b91', '#00274c', 'teal'];

const TransitionPanel = ({ quantity, status, ...rest }) => {
  const children = Array(quantity).fill({});

  return (
    <Container status={status} {...rest}>
      {children.map((_child, index) => (
        <Panel
          key={uuid()}
          color={TEST_colors[index]}
          index={index}
          status={status}
        />
      ))}
    </Container>
  );
};

TransitionPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TransitionPanel.defaultProps = {
  children: null,
};

export default TransitionPanel;
