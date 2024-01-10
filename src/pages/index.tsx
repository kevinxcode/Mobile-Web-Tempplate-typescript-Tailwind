// pages/index.js
import react, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Login from "./login";
import FloatingButton from "./components/FloatingButton";
import Spinner from "./components/Spinner";
import { setAsyncStorageData, getAsyncStorageData, removeAsyncStorageData } from './utils/AsyncStorage'

const Index = () => {
  const router = useRouter();
  const [dataLogin, setdataLogin] = useState(0)
  useEffect(() => {

    const check_login = async () => {
      const retrievedData = await getAsyncStorageData('login-user');
      // console.log(retrievedData);
      if (retrievedData != null) {
        router.push("/home");
      } else {
        router.push("/login");
      }
    }
    return () => {
      check_login();
    };

  }, []);
  return <Spinner />;
};

export default Index;
