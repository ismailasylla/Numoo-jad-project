import styled from 'styled-components';
import { colors } from '../../../constants';

export const Container = styled.div`
  background-color: white;
  display: flex;
  margin: 0px 0px;
  padding-top: 40px;
  padding-bottom: 35px;
`;

export const Content = styled.div`
  width: 85%;
  margin: 0px auto;
`;

export const Type = styled.span`
  display: inline-block;
  background-color: #EEE;
  color: #AAA;
  padding: 2px 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    color: white;
    background-color:  ${colors.primaryLight};
  }
`;

export const TitleBg = styled.div`
  color: ${colors.primaryMedium};
  font-size: 20px;
  font-family: 'Lexend'
  /* font-weight: bold; */
  text-align: right;
  margin-bottom: 10px;
`;