import styled from "styled-components";
import { colors } from "../../../constants";

interface TextProps {
  title?: string;
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
export const JourneyTitle = styled.h1<TextProps>`
  color: ${(props) =>
    props.isGreyed
      ? `${colors.secondaryTextLight}`
      : `${colors.primaryMedium}`};
  font-size: 20px;
  font-weight: 400;
  font-family: "Lexend";
  width: 100%;
  text-align: center;
  font-size: 42px;
`;

export const JourneyDescription = styled.span<TextProps>`
  color: ${(props) =>
    props.isGreyed ? `${colors.secondaryTextLight}` : `${colors.primaryLight}`};
  font-size: 20px;
  font-weight: 400;
  font-family: "Lexend";
  width: 100%;
`;

export const JourneyIconMatch = styled.img<TextProps>`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  border-radius: 50%;
  /* padding: 8px; */
  background: #fff;
  border: 5px solid
    ${(props) =>
      props.isGreyed ? `${colors.secondaryTextLight}` : `${colors.primary}`};
  color: ${colors.primary};
  text-align: center;
  font: 50px Arial, sans-serif;
  overflow: hidden;
`;
export const JourneyIconMeat = styled.img<TextProps>`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  border-radius: 50%;
  /* padding: 8px; */
  background: #fff;
  border: 5px solid
    ${(props) =>
      props.isGreyed
        ? `${colors.secondaryTextLight}`
        : `${colors.primaryLight}`};
  color: ${colors.primaryMedium};
  text-align: center;
  font: 50px Arial, sans-serif;
  overflow: hidden;
`;
export const JourneyIconGrow = styled.img<TextProps>`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  border-radius: 50%;
  /* padding: 8px; */
  background: #fff;
  border: 5px solid
    ${(props) =>
      props.isGreyed ? `${colors.primaryOrange}` : `${colors.primaryOrange}`};
  color: ${colors.primaryOrange};
  text-align: center;
  font: 50px Arial, sans-serif;
  overflow: hidden;
`;

export const JourneyIconWrapper = styled.span`
  margin-left: 10px;
`;
