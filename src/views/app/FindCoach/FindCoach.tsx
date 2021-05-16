import React from 'react';
import { Card, Collapse } from "antd";
import { Container } from "./FindCoach.styled";
import { SubTitle } from '../../../components';

function FindCoach(props: any): JSX.Element {

  return (
  <Container>
    <SubTitle
      title={"Find a Coach"}
    />

  </Container>
  )
}

export default FindCoach;