import React from 'react';
import { Container } from './CoachDetail.styled';
import { SubHeading, CoachBooking } from 'components';
import { availability } from 'dummy';

function CoachDetail() {
  
  return (
    <Container>
      <SubHeading title={"Book your Free Chemistry Check"} />
      <CoachBooking 
        available={availability.availableChemChecks} 
        booked={availability.bookedChemChecks}
        chemCheck={true}
        canSkip={false}
        canReschedule={true}></CoachBooking>


      <SubHeading title={"Start your Coaching Journey"} />


    </Container>
  )
}

export default CoachDetail;