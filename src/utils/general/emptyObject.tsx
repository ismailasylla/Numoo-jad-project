const emptyObject = (value: any) => {
  if (Object.keys(value).length === 0 || !value) {
    return true;
  } else {
    return false;
  }
}

export default emptyObject;