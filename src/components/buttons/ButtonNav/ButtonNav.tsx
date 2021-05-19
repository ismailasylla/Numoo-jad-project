import React, { FC } from 'react';
import { NavBtnLink, NavBtn } from './ButtonNav.styled';

interface Props {
  to: string;
  label: string | React.ReactNode;
  fill?: string;
  mleft?: string;
  mright?: string;
  isorange?: string;
}

const ButtonNav: FC<Props> = ({ to, label, fill, mleft, mright, isorange }) => {
  return (
    <NavBtn>
      <NavBtnLink
        to={to}
        fill={fill}
        mleft={mleft}
        mright={mright}
        isorange={isorange}
      >
        {label}
      </NavBtnLink>
    </NavBtn>
  )
}

export default ButtonNav;