export function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error writing to local storage: ", error);
  }
}

export function getFromLocalStorage(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    if (item === null && defaultValue) {
      return defaultValue;
    }
    if (item) {
      return JSON.parse(item);
    }
    return null;
  } catch (err) {
    console.error("Error reading from local storage: ", err);
    return defaultValue;
  }
}
