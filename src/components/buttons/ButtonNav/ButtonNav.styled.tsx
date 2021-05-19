import styled from 'styled-components';
import { colors } from '../../../constants';
import { NavLink as Link } from 'react-router-dom';

interface NavBtnLinkProps {
  fill?: string;
  mleft?: string;
  mright?: string;
  isorange?: string;
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
  background: ${props => props.isorange ? `${colors.primaryOrange}` : props.fill ? `${colors.primaryMedium}` : '#FFF'};
  color: ${props => props.isorange ? '#FFF' : props.fill ? '#FFF' : `${colors.primaryMedium}`};
  border: ${props => props.isorange ? 'none' : props.fill ? 'none' : `1px solid ${colors.primaryMedium}`};
  font-weight: 500;
  font-family: Lexend;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: ${props => props.mleft && props.mleft};
  margin-right: ${props => props.mright && props.mright};

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${props => props.isorange ? '#FFF' : props => props.fill ? '#FFF' : `${colors.primaryOrange}`};
    background: ${props => props.isorange ? `${colors.primaryOrangeDarkened}` : props.fill ? `${colors.primaryMediumDarkened}` : '#FFF'};
    border: ${props => props.isorange ? 'none' : props.fill ? 'none' : `1px solid ${colors.primaryOrange}`};
  }
`;