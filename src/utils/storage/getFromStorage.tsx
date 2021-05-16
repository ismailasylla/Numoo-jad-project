const getFromStorage = (name: string) => {
  if (!window || !window.localStorage) {
    return null;
  }

  try {
    return JSON.parse(window.localStorage.getItem(name) || '{}');
  } catch (e) {
    return null;
  }
}

export default getFromStorage;