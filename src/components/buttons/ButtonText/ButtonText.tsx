import React, { FC } from 'react';
import { BtnLink, Btn } from './ButtonText.styled';

interface Props {
  to: string;
  label: string | React.ReactNode;
  isArrow?: string;
}

const ButtonText: FC<Props> = ({ to, label, isArrow }) => {
  return (
    <Btn>
      <BtnLink
        to={to}
        isArrow={isArrow}
      >
        {label}
      </BtnLink>
    </Btn>
  )
}

export default ButtonText;