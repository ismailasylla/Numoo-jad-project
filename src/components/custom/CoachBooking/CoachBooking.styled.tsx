import styled from "styled-components";
import { colors } from "../../../constants";
import { DatePicker, TimePicker } from "antd";
import { ButtonDropdown } from "components";

export const Container = styled.div`
margin-bottom: 40px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const InputContainer = styled.div`
  width: 100%;
`;
export const TimeContainer = styled.div`
  width: 70%;
`;

export const DateSelect = styled(DatePicker)`
  width: 70%;
`;
export const TimeSelect = styled(ButtonDropdown)`
width: 70% !important;
margin-left: 40px;
`;


export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const TimezoneText = styled.div`
  font-family: Lexend;
  color: ${colors.secondaryTextLight};
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const MessageText = styled.span`
  color: ${colors.secondaryTextLight};
  display: inline;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Lexend';
  width: 100%;
`;
export const MessageIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

