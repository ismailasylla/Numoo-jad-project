import styled from "styled-components";
import { colors } from "../../../constants";

interface TextProps {
  hasBackgroundColor?: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Button = styled.button<TextProps>`
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  border: 0;
  position: relative;
  letter-spacing: 0.15em;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  background: transparent;
  outline: none;
  font-size: 28px;
  color: #111;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;

  &:hover {
    color: white;
    border-width: 0px;
    background-color: ${(props) =>
      props.hasBackgroundColor ? `${null}` : `${colors.btnBackground}`};
  }
`;
