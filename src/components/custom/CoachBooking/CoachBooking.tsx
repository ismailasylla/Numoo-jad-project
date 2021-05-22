import React, {useState} from 'react';
import { Container, FlexContainer, InputContainer, DateSelect, TimeSelect, MessageContainer, MessageIcon, MessageText, TimezoneText } from './CoachBooking.styled';
import { LabelHeading, ButtonNav } from 'components';
import { images } from '../../../constants';
import { getTimeZone, isSameDate, emptyObject } from '../../../utils';
import moment from "moment";
import ar from "antd/es/date-picker/locale/ar_EG";

interface AvailableInterface{
  from: string;
  to: string;
}
interface BookedInterface{
  date: string;
}
interface Props {
  available: Array<AvailableInterface>;
  booked: Array<BookedInterface>;
  canReschedule?: boolean;
  chemCheck?: boolean;
  canSkip?: boolean;
}

function CoachBooking({ available, booked, canReschedule, chemCheck, canSkip }: Props) {
  const [timeValue, setTimeValue] = useState<moment.Moment | null>(null);
  const [availableTimes, setAvailableTimes] = useState<AvailableInterface>();
  const [bookedTimes, setBookedTimes] = useState<Array<string>>([]);
  const [isToday, setIsToday] = useState(false);
  const [dateNotSelected, setDateNotSelected] = useState(true);
  
  let defaultMinuteStep = 60;
  if(chemCheck){
    defaultMinuteStep = 15;
  }
  const minuteStep = defaultMinuteStep;

  function disabledDates(current: any) {
    if(current && current < moment(moment(), "DD-MM-YYYY").subtract(1, 'd')){
      return true;
    }
    for (let i = 0; i < available.length; i++) {
      if(isSameDate(current, moment(available[i].from))){
        return false;
      }     
    }
    return true;
  }
  function dateChange(e: any) {
    setTimeValue(null);
    setDateNotSelected(false);
    if(isSameDate(e, moment())){
      setIsToday(true);
    }
    setAvailableTimes(getAvailableTimes(e));
    setBookedTimes(getBookedTimes(e));
  }
  function getAvailableTimes(e: any) {
    for (let i = 0; i < available.length; i++) {
      if(isSameDate(e, moment(available[i].from))){
        return available[i];
      }     
    }
  }
  function getBookedTimes(e: any) {
    const tempBookedTimes = [];
    for (let i = 0; i < booked.length; i++) {
      if(isSameDate(e, moment(booked[i].date))){
        tempBookedTimes.push(booked[i].date);
      }     
    }
    return tempBookedTimes;
  }

  function disabledHours() {
    const startAvailableHour = moment(availableTimes?.from).hour();
    const endAvailableHour = moment(availableTimes?.to).hour();
    let disabledHours = [];
    let tempDisabledMinutes = [];

    for(let i = 0; i < 24; i++){
      disabledHours.push(i);
    }
    for (let i = startAvailableHour; i < endAvailableHour; i++) {
      tempDisabledMinutes = getDisabledMinutes(i);
      //Enables available hours if they are not fully booked
      if(tempDisabledMinutes.length < 60/minuteStep ){
        disabledHours = disabledHours.filter((n) => {return n != i});
      }
    }
    if(isToday){
      for(let i = 0; i < moment().hour(); i++){
        disabledHours.push(i);
      }
    }
    
    return disabledHours;
  }
  function timeChange(e: any) {
    const tempDisabledMinutes = getDisabledMinutes(e.hour());
    console.log('eeeee', e);

    setTimeValue(e);
  }
  const getDisabledMinutes = (selectedHour: any) => {
    const disabledMinutes = [];

    if(selectedHour === moment().hour()) {
        for (let i = 0; i < moment().minute(); i++) {
          disabledMinutes.push(i);
        }
    }
    
    for(let i = 0; i < bookedTimes.length; i++){
      if (selectedHour === moment(bookedTimes[i]).hour()) {
        disabledMinutes.push(moment(bookedTimes[i]).minute());
      }
    }

    return disabledMinutes;
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
            <DateSelect 
              size="large" 
              format="DD-MM-YYYY" 
              disabledDate={disabledDates} 
              inputReadOnly={true} 
              allowClear={false}
              onChange={dateChange}
              locale={ar}
            ></DateSelect>
          </InputContainer>
          <InputContainer>
            <TimeSelect 
              size="large" 
              disabled={dateNotSelected}
              onSelect={timeChange} 
              inputReadOnly={true} 
              allowClear={false}
              value={timeValue} 
              hideDisabledOptions={true} 
              format={'HH:mm'} 
              minuteStep={minuteStep} 
              disabledHours={disabledHours} 
              disabledMinutes={getDisabledMinutes} 
              showNow={false}
              locale={ar}
            ></TimeSelect>
          </InputContainer>
        </FlexContainer>

      <TimezoneText>
        All times are in {getTimeZone(new Date)}
      </TimezoneText>

      <ButtonNav
              to='/user/signup'
              label={'Book Now'}
              fill="true"
            />
    
    </Container>
  )
}

export default CoachBooking;