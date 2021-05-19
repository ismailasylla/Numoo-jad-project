import styled from 'styled-components';
import { Divider } from 'antd';
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

export const PopDivider = styled(Divider)`
margin: 3px;
`;