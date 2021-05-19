import styled from 'styled-components';
import { colors } from '../../../constants';
import { Menu, Button } from "antd";


export const DropdownItems = styled(Menu)`
  font-family: Lexend;
  font-size: 17px;
`;
export const DropdownItem = styled(Menu.Item)`
  font-family: Lexend;
  font-size: 17px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const BtnLink = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Lexend;
  color: ${colors.secondaryTextLight} !important;
  &:hover{
    color: ${colors.primaryOrange} !important;
    border-color: ${colors.primaryOrange} !important;
  }
  &:focus{
    color: ${colors.primaryOrange} !important;
    border-color: ${colors.primaryOrange} !important;
  }
`;