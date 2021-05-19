import React from "react";
import { Container, Text } from "./PickerTitleSelect.styled";

interface Props {
  title: string;
}

function PickerTitleSelect({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}

export default PickerTitleSelect;
