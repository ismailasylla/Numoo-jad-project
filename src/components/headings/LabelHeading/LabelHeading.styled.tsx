import styled from "styled-components";
import { colors } from '../../../constants';

interface ContainerProps {
  center?: string;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-bottom: 5px;
  text-align: ${props => props.center ? `center` : `start`};
`;

interface TextProps {
  isGreyed?: string;
}

export const Text = styled.span<TextProps>`
  color ${props => props.isGreyed ? `${colors.secondaryText}` : `${colors.primaryLight}`};
  font-size: 18.5px;
  font-weight: 600;
  font-family: 'Lexend';
`;