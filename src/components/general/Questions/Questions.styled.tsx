import styled from "styled-components";
import { colors } from '../../../constants';
import { BtnLink } from '../../../components/buttons/ButtonText/ButtonText.styled';

export const Container = styled.div`
  background-color: white;
  overflow: hidden;
  display: flex;
  margin: 0px 0px;
  padding-top: 40px;
  padding-bottom: 90px;
  position: relative;
  width: 100%;
`;
export const Content = styled.div`
  margin: 0px auto;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  margin: 0px auto;
  width: 85%;
  margin-bottom: 50px;
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

export const ArrowBtnWrapper = styled.div`
display: flex;
`;
export const ArrowButton = styled(BtnLink)`
width: 100%;
text-align: center
`;

export const BoxWrapper = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  width: 96%;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const Box = styled.div`
  z-index: 3;
  position: relative;
  padding: 30px;
  border-radius: 8px;
  background: white;
  width: 32%;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  &:hover ${ArrowButton} {
    &:after {
      margin-left: 0.7em;
    }
  }
`;

export const CircleLeft = styled.div`
  border: 80px solid ${colors.primary};
  border-radius: 50%;
  width: 600px;
  height: 600px;
  position: absolute;
  top: 10%;
  opacity: 10%;
  left: -25%;
  z-index: 1;
  overflow: hidden;
`;
export const CircleRight = styled.div`
  border: 80px solid ${colors.primaryOrange};
  border-radius: 50%;
  width: 600px;
  height: 600px;
  opacity: 10%;
  position: absolute;
  top: 40px; 
  right: -25%;
  z-index: 1;
  overflow: hidden;
`;