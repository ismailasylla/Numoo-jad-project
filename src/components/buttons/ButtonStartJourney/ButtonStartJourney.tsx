import React from "react";
import { Container, Button } from "./ButtonStartJourney.styled";
interface Props {
  isColor?: string;
}
function ButtonStartJourney({ isColor }: Props) {
  return (
    <div>
      <Container>
        <Button isColor={isColor}>Start your journey now</Button>
      </Container>
    </div>
  );
}

export default ButtonStartJourney;
