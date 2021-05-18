import React, { FC } from 'react';
import { NavBtnLink, NavBtn } from './ButtonNav.styled';

interface Props {
  to: string;
  label: string | React.ReactNode;
  fill?: string;
  mleft?: string;
  mright?: string;
  isOrange?: string;
}

const ButtonNav: FC<Props> = ({ to, label, fill, mleft, mright, isOrange }) => {
  return (
    <NavBtn>
      <NavBtnLink
        to={to}
        fill={fill}
        mleft={mleft}
        mright={mright}
        isOrange={isOrange}
      >
        {label}
      </NavBtnLink>
    </NavBtn>
  )
}

export default ButtonNav;