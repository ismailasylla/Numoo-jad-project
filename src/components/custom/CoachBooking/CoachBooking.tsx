import React from 'react';
import { Container, FlexContainer, InputContainer, DateSelect, TimeSelect, MessageContainer, MessageIcon, MessageText } from './CoachBooking.styled';
import { LabelHeading, IconHeading } from 'components';
import { images } from '../../../constants';
import moment from "moment";

interface Props {
  allowReschedule?: boolean;
}

function CoachBooking({ allowReschedule }: Props) {
  const date = new Date;
  console.log("offset", date);

  function disabledDate(current: any) {
    return current && current < moment(moment(), "DD-MM-YYYY").subtract(1, 'd');
  }

  return (
    <Container>

      <MessageContainer>
        <MessageIcon src={images.INFO}></MessageIcon>
        <MessageText>{"Rescheduling and cancellations are allowed only up to 12 hours before your session. Charges may apply otherwise. Please read Terms & Conditions."}</MessageText>
      </MessageContainer>

        <FlexContainer>
          <LabelHeading isGreyed="true" title={"Date"} />
          <LabelHeading isGreyed="true" title={"Time"} />
        </FlexContainer>
        <FlexContainer>
          <InputContainer>
            <DateSelect size="large" format="DD-MM-YYYY" disabledDate={disabledDate}></DateSelect>
          </InputContainer>
          <InputContainer>
            <TimeSelect size="large" format={'HH:mm'}></TimeSelect>
          </InputContainer>
        </FlexContainer>

        <MessageContainer>
        <IconHeading img={images.INFO} title={"All times are in (UTC+4:00)"} ></IconHeading>
      </MessageContainer>
    
    </Container>
  )
}

export default CoachBooking;