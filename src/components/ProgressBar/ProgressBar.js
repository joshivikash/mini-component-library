/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  small: {
    '--height': 8,
    '--border-radius': 4,
  },
  medium: {
    '--height': 12,
    '--border-radius': 4,
  },
  large: {
    '--height': 24,
    '--padding': 4,
    '--border-radius': 8,
  },
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--border-radius);
  height: var(--height);
  width: 100%;
  `;
  
  const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value}%;
  height: 100%;
`;

const BarWrapper = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  const style = styles[size];
  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  return <ProgressBarWrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{
    '--height': style['--height'] + 'px',
    '--padding': style['--padding'] + 'px',
    '--border-radius': style['--border-radius'] + 'px',
  }}><BarWrapper><Bar value={value}/></BarWrapper></ProgressBarWrapper>;
};

export default ProgressBar;
