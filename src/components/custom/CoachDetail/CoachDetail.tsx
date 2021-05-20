import React from 'react';
import { Container } from './CoachDetail.styled';
import { SubHeading, CoachBooking } from 'components';

function CoachDetail() {
  return (
    <Container>
      <SubHeading title={"Book your Free Chemistry Check"} />
      <CoachBooking></CoachBooking>


      <SubHeading title={"Start your Coaching Journey"} />


    </Container>
  )
}

export default CoachDetail;