import React, { FC } from 'react';
import { NavBtnLink, NavBtn } from './ButtonText.styled';

interface Props {
  to: string;
  label: string | React.ReactNode;
  isArrow?: string;
}

const ButtonText: FC<Props> = ({ to, label, isArrow }) => {
  return (
    <NavBtn>
      <NavBtnLink
        to={to}
        isArrow={isArrow}
      >
        {label}
      </NavBtnLink>
    </NavBtn>
  )
}

export default ButtonText;