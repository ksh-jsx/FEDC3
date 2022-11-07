const storage = window.localStorage;

export const setItem = (key, value) => {
  try {
    console.log(value);
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const getItem = (key, defaultValues) => {
  try {
    const storedValue = storage.getItem(key);

    if (!storedValue) {
      return defaultValues;
    }
    return JSON.parse(storedValue);
  } catch (e) {
    console.log(e);
    return defaultValues;
  }
};

export const removeItem = (key) => {
  storage.removeItem(key);
};
