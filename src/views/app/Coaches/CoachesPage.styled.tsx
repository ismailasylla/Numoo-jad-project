import styled from "styled-components";
import { colors } from '../../../constants';
import { Select } from "antd";


export const CategorySelect = styled(Select)`
  width: 100%;
  font-family: Lexend;
  font-size: 17px;
  
  &:hover{
    color: ${colors.primaryOrange} !important;
    border-color: ${colors.primaryOrange} !important;
  }
  &:focus{
    color: ${colors.primaryOrange} !important;
    border-color: ${colors.primaryOrange} !important;
  }
`;
export const CategoryOption = styled(Select.Option)`
  width: 100%;
  font-family: Lexend;
  font-size: 17px;
  
  &:hover{
    color: ${colors.primaryOrange} !important;
    border-color: ${colors.primaryOrange} !important;
  }
  &:focus{
    color: ${colors.primaryOrange} !important;
    border-color: ${colors.primaryOrange} !important;
  }
`;

export const Container = styled.div`
  width: 85%;
  margin: 0px auto;
  margin-top: 17vh;
`;

export const FilterInputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CoachesWrapper = styled.div`
  display: flex;
  min-height: 600px;
`;
export const CoachesBoxLeft = styled.div`
  width: 25%;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

`;
export const CoachesBoxRight = styled.div`
  width: 75%;
  padding: 10px 0px 0px 10px;
`;