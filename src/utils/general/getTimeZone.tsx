const getTimeZone = (date : Date) => {
  const string = date.toString();
  if (string && string !== '') {
    const regExp = /\(([^)]+)\)/;
    const matches = regExp.exec(string);
    return matches![1];
  } else {
    return '';
  }
}
export default getTimeZone;