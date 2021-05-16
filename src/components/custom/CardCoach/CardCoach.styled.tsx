import styled from "styled-components";
import { colors } from "../../../constants";

export const Container = styled.div`
  float: left;
  width: 50%;
`;
export const CardContent = styled.div`
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const Footer = styled.span`
  display: flex;
  padding: 5px 0px;
`;
export const Tag = styled.span`
  background-color: #EEE;
  color: #AAA;
  padding: 2px 10px;
  margin-right: 5px;
  border-radius: 50px;
`;
