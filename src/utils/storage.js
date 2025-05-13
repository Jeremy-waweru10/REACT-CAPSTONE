export const load = (key, defaultVal) => {
    //key-The name under which the data is saved in localStorage
    //defaultVal: The value returned if the data doesn't exist 
    try {
      const data = localStorage.getItem(key);// retrieves the data saved under the key from localStorage
      return data ? JSON.parse(data) : defaultVal;//// if data exists, parse it, otherwise return defaultVal
    } catch {
      return defaultVal;
    }
  };
  
  export const save = (key, val) => {
    // Converts the value into a JSON string because localStorage can only store data as strings
    localStorage.setItem(key, JSON.stringify(val));
  };
  