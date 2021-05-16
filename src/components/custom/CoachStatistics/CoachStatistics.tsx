import React from 'react';
import { Container, Number, Label } from './CoachStatistics.styled';

function CoachStatistics() {
  return (
    <Container>
      <div>
        <Number>40</Number>
        <Label>Total Jobs</Label>
      </div>
      <div style={{marginLeft: '20px'}}>
        <Number>502</Number>
        <Label>Total Hours</Label>
      </div>
    </Container>
  )
}

export default CoachStatistics;