import styled from "styled-components";
import { colors } from "../../../constants";


export const CenteredContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
export const StatisticTypeContainer = styled(CenteredContainer)`
  margin-top: -7px;
`;

export const StatisticType = styled.span`
display: block;
text-align: center;
color: ${colors.secondaryTextLight};
font-size: 17px;
font-weight: 400;
font-family: 'Lexend';
width: 100%;
`;

export const Tags = styled.span`
  display: flex;
  padding: 5px 0px;
  margin-top: 20px;
`;
export const Tag = styled.span`
  background-color: #FFF;
  color: ${colors.primaryOrange};
  padding: 2px 12px;
  font-size: 16px;
  font-family: Lexend;
  font-weight: 500;
  margin-right: 5px;
  border-radius: 20px;
  border: 1.5px solid ${colors.primaryOrange};
`;