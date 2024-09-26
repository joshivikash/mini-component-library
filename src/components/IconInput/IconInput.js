import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    '--height':36,
    '--font-size':18,
    '--border-thickness':2,
    '--icon-size':24,
  },
  small: {
    '--height':24,
    '--font-size':14,
    '--border-thickness':1,
    '--icon-size':16,
  },
};

const IconWrapper = styled(Icon)`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color:inherit;
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
  
  const InputWrapper = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  font-family: Roboto;
  font-weight: 700;
  font-size:var(--font-size);
  color:inherit;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  if(!styles) {
    throw new Error(`Unknown size passed to Input: ${size}`);
  }
  return <Wrapper>
            <VisuallyHidden>{label}</VisuallyHidden>
            <IconWrapper id={icon} size={styles['--icon-size']}/>
            <InputWrapper type="text" placeholder={placeholder} style={{
              '--height': styles['--height']/16 + 'rem',
              '--font-size': styles['--font-size']/16 + 'rem',
              '--border-thickness': styles['--border-thickness'] + 'px',
              '--width': width + 'px',
            }}/>
    </Wrapper>;
};

export default IconInput;
