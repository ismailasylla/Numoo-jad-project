import styled from "styled-components";
import { colors } from "../../../constants";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

interface TextProps {
  isGreyed?: string;
}

export const Text = styled.span<TextProps>`
  color: ${(props) =>
    props.isGreyed ? `${colors.secondaryText}` : `${colors.primaryLight}`};
  font-size: 30px;
  font-weight: 500;
  font-family: "Lexend";
`;
