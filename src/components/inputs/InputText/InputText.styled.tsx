import styled from "styled-components";
import { colors } from "../../../constants";

export const Container = styled.div``;

export const InputLabel = styled.div`
  color: ${colors.primaryMedium};
  margin-bottom: 5px;
`;
export const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 20px;

  ::-webkit-input-placeholder {
    color: #ddd;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${colors.primaryLight};
  }
`;
