import styled from 'styled-components';
import { colors } from '../../../constants';

export const Container = styled.div`
  background-color: ${colors.secondaryTextLight};
  padding: 40px 0px;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const Content = styled.div`
  width: 85%;
  margin: 0px auto; 
  margin-top: 18vh;
`;

export const TitleBg = styled.div`
  font-size: 60px;
  font-weight: 450;
  font-family: 'Lexend';
  color: white;
  line-height: 70px;
`;

export const TitleSm = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 300;
  font-family: 'Lexend';
  line-height: 38px;
`;
export const TitleSmWrapper = styled.div`
  margin-top: 40px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

