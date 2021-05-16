import styled from 'styled-components';
import { colors } from '../../../constants';

interface NavBtnLinkProps {
  fill?: string;
  disabled?: boolean;
}

export const Container = styled.button<NavBtnLinkProps>`
  border-radius: 4px;
  padding: 10px 30px;
  width: 100%;
  background: ${props => props.fill ? `${colors.primaryMedium}` : '#FFF'};
  color: ${props => props.fill ? '#FFF' : `${colors.primaryMedium}`};
  border: ${props => props.fill ? 'none' : `1px solid ${colors.primaryMedium}`};
  outline: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &.hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.primaryMedium} !important;
  }
`;