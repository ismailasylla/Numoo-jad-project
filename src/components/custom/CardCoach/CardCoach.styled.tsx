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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;