import React from 'react';
import { Container } from './ButtonNormal.styled';

interface Props {
  label: string | React.ReactNode;
  fill?: string;
  onClick: () => void;
  disabled?: boolean;
}

function ButtonNormal({ label, fill, onClick, disabled }: Props): JSX.Element {
  return (
    <Container
      fill={fill}
      onClick={disabled ? () => {null} : onClick}
      disabled={disabled}
    >{label}</Container>
  )
}

export default ButtonNormal;