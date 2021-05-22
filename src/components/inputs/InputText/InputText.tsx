import React, { forwardRef } from "react";
import { Container, InputLabel, Input } from "./InputText.styled";

interface Props {
  type: string;
  label?: string;
  placeholder?: string;
  name?: string;
}

function InputText({ type, label, placeholder, name }: Props, ref: any) {
  return (
    <Container>
      {label && <InputLabel>{label}</InputLabel>}
      <Input type={type} placeholder={placeholder} name={name} ref={ref} />
    </Container>
  );
}

export default forwardRef(InputText);
