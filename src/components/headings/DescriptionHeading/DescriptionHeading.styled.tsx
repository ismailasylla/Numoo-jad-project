import styled from "styled-components";
import { colors } from '../../../constants';

export const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

interface TextProps {
  isGreyed?: string;
}

export const Text = styled.span<TextProps>`
  color: ${props => props.isGreyed ? `${colors.secondaryTextLight}` : `${colors.primaryLight}`};
  font-size: 20px;
  font-weight: 400;
  font-family: 'Lexend';
`;