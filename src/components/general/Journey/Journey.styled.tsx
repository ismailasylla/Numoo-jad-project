import styled from "styled-components";
import { colors } from "../../../constants";

interface TextProps {
  // title?: string;
  isGreyed?: string;
}

export const JourneyContainerWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin-left: 450px;
`;

export const JourneyWrapper = styled.div`
  display: grid;
  grid-row-gap: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  /* grid-gap: 70px; */
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
  padding: 10px;
  padding-top: 15px;
`;

export const JourneyDescription = styled.span<TextProps>`
  color: ${(props) =>
    props.isGreyed ? `${colors.secondaryTextLight}` : `${colors.primaryLight}`};
  font-size: 20px;
  font-weight: 400;
  font-family: "Lexend";
  width: 100%;
`;

export const JourneyIconMatch = styled.label<TextProps>`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  border-radius: 50%;
  padding: 8px;
  background: #fff;
  border: 5px solid
    ${(props) =>
      props.isGreyed ? `${colors.secondaryTextLight}` : `${colors.primary}`};
  color: ${colors.primary};
  text-align: justify;
  font: 50px Arial, sans-serif;
  overflow: hidden;
`;
export const JourneyIconMeat = styled.label<TextProps>`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  border-radius: 50%;
  padding: 8px;
  background: #fff;
  border: 5px solid
    ${(props) =>
      props.isGreyed
        ? `${colors.secondaryTextLight}`
        : `${colors.primaryLight}`};
  color: ${colors.primaryMedium};
  text-align: justify;
  font: 50px Arial, sans-serif;
  overflow: hidden;
`;
export const JourneyIconGrow = styled.label<TextProps>`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  border-radius: 50%;
  padding: 8px;
  background: #fff;
  border: 5px solid
    ${(props) =>
      props.isGreyed ? `${colors.primaryOrange}` : `${colors.primaryOrange}`};
  color: ${colors.primaryOrange};
  text-align: justify;
  font: 50px Arial, sans-serif;
  overflow: hidden;
`;

export const JourneyIconWrapper = styled.span`
  margin-left: 10px;
`;
