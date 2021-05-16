import styled from 'styled-components';
// import { colors } from '../../../constants';

export const PopWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserName = styled.span`
  color: #AAA;
  margin-right: 10px;
`;

export const PopContent = styled.div`
`;

export const PopLink = styled.div`
  color: #AAA;
  padding: 5px 10px;
  width: 120px;
  cursor: pointer;

  &:hover {
    color: #444;
  }
`;