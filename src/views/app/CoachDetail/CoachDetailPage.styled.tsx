import styled from "styled-components";
import { colors } from "../../../constants";
import { Modal } from "antd";

export const Container = styled.div`
  width: 85%;
  margin: 0px auto;
  margin-top: 17vh;
`;
export const CoacheDetailWrapper = styled.div`
  display: flex;
  min-height: 600px;
`;
export const AboutWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 0px;
`;
export const AboutText = styled.div`
  color: ${colors.secondaryTextLight};
  font-size: 17px;
  font-weight: 400;
  font-family: 'Lexend';
  width: 100%;
`;
export const CoacheDetailBoxLeft = styled.div`
  width: 45%;
  padding: 10px 10px;
  padding-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;
export const CoacheDetailBoxRight = styled.div`
  width: 75%;
  padding: 10px 0px 0px 10px;
`;

export const VideoBox = styled.div`
  width: 90%;
  margin-top: 20px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #263137;
  cursor: pointer;
`;
export const VideoIcon = styled.img`
  width: 120px;
  height: 120px;
`;
export const VideoModal = styled(Modal)`
  font-family: Lexend;
  font-size: 20px;
`;
export const VideoText = styled.div`
  font-family: Lexend;
  font-size: 13px;
  margin-top: 2px;
  margin-left: 10px;
`;


