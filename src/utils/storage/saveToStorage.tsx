const saveToStorage = (name: string, data: any) => {
  if (!window || !window.localStorage) {
    return;
  }

  window.localStorage.setItem(name, JSON.stringify(data));
}

export default saveToStorage;