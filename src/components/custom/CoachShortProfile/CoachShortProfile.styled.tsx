import styled from "styled-components";
import { colors } from "../../../constants";

export const Container = styled.div`
  display: flex;
`;
export const CardHeader = styled.div`
  margin-left: 10px;
`;
export const Name = styled.span`
  display: block;
  color: ${colors.primaryLight};
  `;
export const About = styled.span`
  display: block;
  font-weight: bold;
`;
export const Location = styled.span`
  display: block;
  color: #AAA;
`;