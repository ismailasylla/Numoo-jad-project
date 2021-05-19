import styled from "styled-components";
import { colors } from "../../../constants";

export const About = styled.span`
display: block;
color: ${colors.secondaryTextLight};
font-size: 17px;
font-weight: 400;
font-family: 'Lexend';
width: 100%;
`;

export const Avatar = styled.img`
  border-radius: 18px;
  height: 170px;
  width: 170px;
`;
export const Container = styled.div`
  display: flex;
`;
export const CardHeader = styled.div`
  margin-top: 5px;
  margin-left: 15px;
`;

export const Location = styled(About)`
  display: inline;
  font-size: 16px;
`;