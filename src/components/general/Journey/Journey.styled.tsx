import styled from "styled-components";
import { colors } from "../../../constants";

interface TextProps {
  isGreyed?: string;
}

export const JourneyWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  margin-bottom: 60px;
  padding: 20px;
  text-align: center;
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;
export const JourneyTitle = styled.h1`
  text-align: center;
  font-size: 42px;
`;
export const JourneyIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

export const JourneyDescription = styled.span<TextProps>`
  color: ${(props) =>
    props.isGreyed ? `${colors.secondaryTextLight}` : `${colors.primaryLight}`};
  font-size: 20px;
  font-weight: 400;
  font-family: "Lexend";
  width: 100%;
`;
