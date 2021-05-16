import styled from "styled-components";
import { colors } from '../../../constants';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  margin: 20px 0px;
  padding: 40px 0px;
`;

export const TitleWrapper = styled.div`
  text-align: center;
`;
export const TitleSm = styled.div`
  color: ${colors.primaryLight};
`;
export const TitleBg = styled.div`
  color: ${colors.primaryMedium};
  font-size: 30px;
  font-family: 'Cormorant Garamond', serif;
  font-weight: bold;
`;

export const BoxWrapper = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const Box = styled.div`
  padding: 10px;
`;
export const Title = styled.div`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 20px;
`;
export const Description = styled.div`
  color: ${colors.primary};
  margin-top: 20px;
`;

export const More = styled.span`
  color: ${colors.secondary};
  text-decoration: underline;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    color: ${colors.primaryLight};
  }
`;