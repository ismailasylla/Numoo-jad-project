import styled from "styled-components";
import { colors } from '../../../constants';

interface TextProps {
  isGreyed?: string;
}

export const Text = styled.span<TextProps>`
  color: ${props => props.isGreyed ? `${colors.secondaryTextLight}` : `${colors.primaryLight}`};
  font-size: 20px;
  font-weight: 400;
  font-family: 'Lexend';
  width: 100%;
`;