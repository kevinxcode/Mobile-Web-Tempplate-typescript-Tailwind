import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  setAsyncStorageData,
  getAsyncStorageData,
  removeAsyncStorageData,
} from "./utils/AsyncStorage";

import { getLogin } from "./api/querlab";

import {
  showSweetAlert,
  showLoadingSweetAlert,
  closeLoadingSweetAlert,
} from "./utils/SweetAlert";
import { Session } from "./utils/Session";
import Spinner from "./components/Spinner";



const Login = () => {
  var now = new Date(); // create a new Date object
  var year = now.getFullYear(); // get the full year (four digits)
  const router = useRouter();

  const [isPage, setisPage] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      const sessData = await Session();
      if (sessData == 1) {
        router.push("/home");
      }
      setisPage(true);
    };
    return () => {
      checkSession();
    };
  }, []);

  const btnLogin = () => {

    showLoadingSweetAlert();
    getLogin().then((data) => {
      console.log(data);
      if (data != null) {
        if (data.loginCodes == "success") {
          setAsyncStorageData("login-user", JSON.stringify(data));
          setTimeout(() => {
            showSweetAlert("success", "success");
            router.push("/home");
          }, 800); // Simulated 3-second loading time
        } else {
          showSweetAlert(data.details, "error");
        }
      } else {
        showSweetAlert("Something went wrong", "error");
      }
    });
  };

  const [isPass, setisPass] = useState("password");

  const showHidePassword = () => {
    const password = document.getElementById("password") as HTMLInputElement;
    if (password.type == "password") {
      password.type = "text";
      setisPass("text");
    } else {
      password.type = "password";
      setisPass("password");
    }
  };

  if (isPage) {
    return (
      <div className="flex flex-col min-h-[100vh]">
        <div className="flex-grow flex items-center justify-center px-3 bg-white">
          <div className="container  mx-auto px-2 py-8  max-w-md bg-white">
            <div className="w-full bg-white">
              <div className="text-center mb-4">
                <h1 className="text-3xl font-semibold mb-0 ">
                  OCEAN
                  <span className="leading-tight text-xs"> 2.0</span>
                </h1>
                <span className="leading-tight text-xs">Vallourec SEA</span>
              </div>
              <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username / Employee ID
                  </label>
                  <input
                    id="username"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <div className="flex flex-row items-center ">
                  <input
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                  />
                  {/*  */}
                  <span
                      onClick={showHidePassword}
                      className="cursor-pointer bg-gray-500 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded ml-2"
                    >
                      {isPass == "password" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </span>
                    {/*  */}
                  </div>
                </div>
                <div className="flex items-center mt-8 ">
                  <button
                    onClick={btnLogin}
                    className="bg-gray-800 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    SIGN IN
                  </button>
                </div>
                <div className="flex items-center mt-5 justify-center ">
                  <span className="leading-tight text-xs">
                    © {year} SEA - HR
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};
export default Login;
