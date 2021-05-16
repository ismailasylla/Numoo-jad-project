import React from 'react';
import { Nav, NavLink, Logo, NavMenu, BtnWrapper } from './TopNav.styled';
import { useAuth } from "context/AuthContext";
import { PopoverNavbar, ButtonNav } from 'components';
import { IntlMessage } from "utils";

function TopNav(): JSX.Element {
  const { currentUser } = useAuth();

  return (
    <>
      <Nav>
        <NavLink to="/app/home">
          <Logo><IntlMessage id="title.brand" /></Logo>
        </NavLink>
        <NavMenu>
          <NavLink to="/app/coaches">Coaches</NavLink>
          <NavLink to="/app/find-coach">Find a coach</NavLink>
        </NavMenu>

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
    </>
  )
}

export default TopNav;