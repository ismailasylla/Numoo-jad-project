import styled from 'styled-components';
import { colors } from '../../../constants';

export const Container = styled.div`
  background-color: ${colors.primaryMedium};
  padding: 40px 0px;
  position: relative;
  overflow: hidden;
  height: 400px;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0px auto; 
`;

export const TitleBg = styled.div`
  color: white;
  font-size: 30px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: bold;
`;
export const TitleSm = styled.div`
  color: #EEE;
`;

export const Circle = styled.div`
  border: 20px solid ${colors.secondary};
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -150px;
`;
export const CircleBig = styled.div`
  border: 40px solid ${colors.primary};
  border-radius: 50%;
  width: 400px;
  height: 400px;
  position: absolute;
  top: -180px; right: 100px;
`;