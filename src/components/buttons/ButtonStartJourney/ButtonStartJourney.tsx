import React from "react";
import { Container, Button } from "./ButtonStartJourney.styled";
interface Props {
  hasBackgroundColor?: string;
}
function ButtonStartJourney({ hasBackgroundColor }: Props) {
  return (
    <div>
      <Container>
        <Button hasBackgroundColor={hasBackgroundColor}>
          Start your journey now
        </Button>
      </Container>
    </div>
  );
}

export default ButtonStartJourney;
