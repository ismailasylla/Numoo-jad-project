import React from 'react';
import { Card, Collapse } from "antd";
import { Container } from "./FindCoach.styled";
import { SubHeading } from '../../../components';

function FindCoach(props: any): JSX.Element {

  return (
  <Container>
    <SubHeading
      title={"Find a Coach"}
    />

  </Container>
  )
}

export default FindCoach;