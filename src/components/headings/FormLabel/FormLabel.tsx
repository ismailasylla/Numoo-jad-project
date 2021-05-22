import React from "react";
import { Container, Text } from "./FormLabel.styled";

interface Props {
  title: string;
}

function FormLabel({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}

export default FormLabel;
