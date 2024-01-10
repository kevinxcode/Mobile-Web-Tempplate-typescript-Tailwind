// storageUtils.js

const setAsyncStorageData = async (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    // console.log('Data stored successfully.');
  } catch (error) {
    // console.error('Error storing data:', error);
  }
};

const getAsyncStorageData = async (key) => {
  try {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // console.log('Retrieved data:', parsedData);
      return parsedData;
    } else {
      // console.log('No data found in storage.');
      return null;
    }
  } catch (error) {
    // console.error('Error retrieving data:', error);
    return null;
  }
};

const removeAsyncStorageData = async (key) => {
  try {
    localStorage.removeItem(key);
    // console.log('Data removed successfully.');
  } catch (error) {
    // console.error('Error removing data:', error);
  }
};

export { setAsyncStorageData, getAsyncStorageData, removeAsyncStorageData };
