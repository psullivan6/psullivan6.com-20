import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Container } from './styles';

const TransitionPanel = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

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
