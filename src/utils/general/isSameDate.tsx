import moment from "moment";

const isSameDate = (date1 : moment.Moment, date2 : moment.Moment) => {
  if(date1.date() === moment(date2).date() && date1.month() === moment(date2).month()){
    return true;
  }  
  return false;
}

export default isSameDate;