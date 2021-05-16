import React, { FC } from 'react';
import { NavBtnLink, NavBtn } from './ButtonNav.styled';

interface Props {
  to: string;
  label: string | React.ReactNode;
  fill?: string;
  mleft?: string;
  mright?: string;
}

const TopNav: FC<Props> = ({ to, label, fill, mleft, mright }) => {
  return (
    <NavBtn>
      <NavBtnLink
        to={to}
        fill={fill}
        mleft={mleft}
        mright={mright}
      >
        {label}
      </NavBtnLink>
    </NavBtn>
  )
}

export default TopNav;