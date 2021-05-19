import styled from "styled-components";
import { colors } from "../../../constants";

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
`;

export const FormWrapper = styled.div`
  background: white;
  width: 20%;
  margin: 0 auto;
  margin-top: -15px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%);
  border-bottom: 1px solid rgba(0, 0, 0, 0);
`;

export const Footer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const NotMember = styled.span`
  color: #aaa;
`;
export const Link = styled.span`
  color: ${colors.primaryOrange};
  text-decoration: underline;
  cursor: pointer;
`;
