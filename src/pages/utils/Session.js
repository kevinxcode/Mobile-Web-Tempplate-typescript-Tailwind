import React, {useEffect} from 'react';
import { setAsyncStorageData, getAsyncStorageData, removeAsyncStorageData } from '../utils/AsyncStorage'

const Session = async  () => {
 
  const retrievedData = await getAsyncStorageData('login-user');
      if (retrievedData== null) {
          return 0;
      }else{
          return 1;
      }
};


export { Session};