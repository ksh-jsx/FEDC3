const API_END_POINT = "";

export const request = async () => {
  try {
    const res = storage.getItem("todos", []);
    return await res;
  } catch (e) {
    throw new Error(`무언가 잘못 되었습니다! ${e.message}`);
  }
};

export const storage = (function (storage) {
  const setItem = (key, value) => {
    try {
      storage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getItem = (key, defaultValue) => {
    try {
      const storedValue = storage.getItem(key);

      if (storedValue) {
        return JSON.parse(storedValue);
      }
      return defaultValue;
    } catch (e) {
      console.log(e);
      return defaultValue;
    }
  };

  return {
    setItem,
    getItem,
  };
})(window.localStorage);
