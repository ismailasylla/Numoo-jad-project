import React from "react";
import { Container, Text } from "./FormTitle.styled";

interface Props {
  title: string;
}

function FormTitle({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}

export default FormTitle;
