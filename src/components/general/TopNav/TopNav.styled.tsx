import styled from 'styled-components';
import { colors } from '../../../constants';
import { NavLink as Link } from 'react-router-dom';

export const NavContainer = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 99;
  color: white;
  `;

export const Nav = styled.nav`
  background-color: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%);
  border-bottom: 1px solid rgba(0,0,0,0);
`;

export const NavLink = styled(Link)`
  color: #444;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: ${colors.primaryOrange};
  }
`;

export const Logo = styled.h1`
  color: #222
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
`;