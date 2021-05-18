import React from 'react';
import { NavContainer, Nav, NavLink, Logo, NavMenu, BtnWrapper } from './TopNav.styled';
import { useAuth } from "context/AuthContext";
import { PopoverNavbar, ButtonNav } from 'components';
import { IntlMessage } from "utils";

function TopNav(): JSX.Element {
  const { currentUser } = useAuth();

  return (
    <NavContainer>
      <Nav>
        <NavLink to="/app/home">
          <Logo><IntlMessage id="title.brand" /></Logo>
        </NavLink>
      

        <BtnWrapper>
          {currentUser ?
            <PopoverNavbar />
          :
          <>
            <ButtonNav
              to='/user/login'
              label={<IntlMessage id="title.login" />}
              mright='10px'
            />
            <ButtonNav
              to='/user/signup'
              label={<IntlMessage id="title.signup" />}
              fill="true"
            />
          </>
          }
        </BtnWrapper>
      </Nav>
    </NavContainer>
  )
}

export default TopNav;