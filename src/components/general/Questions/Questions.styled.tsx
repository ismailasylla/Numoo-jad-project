import styled from "styled-components";
import { colors } from '../../../constants';
import { BtnLink } from '../../../components/buttons/ButtonText/ButtonText.styled';

export const Container = styled.div`
  background-color: white;
  display: flex;
  margin: 0px 0px;
  padding-top: 40px;
  padding-bottom: 35px;
`;

export const Content = styled.div`
  width: 85%;
  margin: 0px auto;
`;

export const BoxWrapper = styled.div`
  width: 85%;
  margin: 0px auto;
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ArrowButton = styled(BtnLink)`
`;

export const Box = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover ${ArrowButton} {
    &:after {
      margin-left: 0.7em;
    }
  }
`;

export const Description = styled.div`
  color: ${colors.primary};
  margin-top: 20px;
`;

export const More = styled.span`
  color: ${colors.primaryOrange};
  text-decoration: underline;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    color: ${colors.primaryLight};
  }
`;