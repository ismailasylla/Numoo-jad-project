import styled from "styled-components";
import { colors } from '../../../constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  color: ${colors.secondaryTextLight};
  display: inline;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Lexend';
  width: 100%;
`;
export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;