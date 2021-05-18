import styled from 'styled-components';
import { colors } from '../../../constants';
import { NavLink as Link } from 'react-router-dom';
import rightArrow from './../../../assets/images/right_arrow.svg';

interface NavBtnLinkProps {
  isArrow?: string;
}

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)<NavBtnLinkProps>`
  border-radius: 4px;
  padding: 10px 30px;
  font-size: 20px;
  background: none;
  color: ${colors.primaryOrange} !important;
  border: none;
  font-weight: 500;
  font-family: Lexend;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${colors.primaryOrange} !important;
    &:after {
      margin-left: 0.7em;
    }
  }
  &:after {
    transition: all .2s ease-in-out;
    content: url(${rightArrow});
    width: 1em;
    height: 1em;
    display: inline-block;
    margin-left: .125em;
    vertical-align: -.1875em;
  }
`;