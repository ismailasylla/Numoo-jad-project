import styled from 'styled-components';
import { colors } from '../../../constants';

export const Container = styled.span`
  background-color: #EEE;
  padding: 5px 10px;
  border-radius: 20px;
`;
export const Lang = styled.span`
  cursor: pointer;
  padding-right: 5px;

  &.border {
    padding-left: 5px;
    border-left: 1px solid #AAA;
  }
`;
export const ActiveLang = styled(Lang)`
  cursor: pointer;
  padding-right: 5px;
  color: ${colors.secondary};
`;
