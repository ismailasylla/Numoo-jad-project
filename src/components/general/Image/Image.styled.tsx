import styled from 'styled-components';
import { colors } from '../../../constants';

interface ContainerProps {
  imageURL: string;
}

export const Container = styled.img<ContainerProps>`
  background: ${props => props.imageURL && `url(${props.imageURL}) no-repeat center center fixed`}; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 300px;
`;