import styled from "styled-components";
import { colors } from '../../../constants';
import { Select, Pagination, Input } from "antd";

export const LocationSearch = styled(Input.Search)`
  width: 100%;
  font-family: Lexend;
  font-size: 17px;
`;

export const CategorySelect = styled(Select)`
  width: 100%;
  font-family: Lexend;
  font-size: 17px;
`;
export const CategoryOption = styled(Select.Option)`
  width: 100%;
  font-family: Lexend;
  font-size: 17px;
`;

export const CoachesPagination = styled(Pagination)`
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const CategoryText = styled.span`
  width: 100%;
  font-family: Lexend;
  font-size: 17px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Container = styled.div`
  width: 85%;
  margin: 0px auto;
  margin-top: 17vh;
  margin-bottom: 40px;
`;

export const FilterInputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CoachCardsWrapper = styled.div`
margin-bottom: 40px;
`;

export const CoachesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 600px;
`;
export const CoachesBoxLeft = styled.div`
  width: 25%;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

`;
export const CoachesBoxRight = styled.div`
  width: 73%;
  padding: 10px 0px 0px 10px;
`;