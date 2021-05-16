const capitalizeFirstLetter = (string: string | null) => {
  if (string && string !== '') {
    return string.charAt(0).toUpperCase() + string.slice(1, 1);
  } else {
    return '-';
  }
}

export default capitalizeFirstLetter;