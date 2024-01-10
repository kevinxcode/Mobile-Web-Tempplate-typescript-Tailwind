// pages/index.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FloatingButton from "./components/FloatingButton";
import TopBar from "./components/TopBar";
import { Session } from "./utils/Session";
import Spinner from "./components/Spinner";

const Home = () => {
  const router = useRouter();
  const [isPage, setisPage] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      const sessData = await Session();
      if (sessData == 0) {
        router.push("/login");
      } else {
        setisPage(true);
      }
    };
    return () => {
      setTimeout(() => {
        checkSession();
      }, 400);
    };
  }, []);
  const pageOcean = () => {
    router.push("/ocean");
  };
  if (isPage) {
    return (
      <div className="flex flex-col min-h-[90vh]">
        <TopBar data={"SCAN"} />
        <FloatingButton />
        <div className="flex bg-white items-center justify-center mt-10">
          <div className="p-8  bg-white max-w-lg min-h-screen w-full">
            <div aria-label="header" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
              </svg>
              <div className="space-y-0.5 flex-1">
                <h3 className="font-medium text-lg tracking-tight text-gray-900 leading-tight">
                  Activity
                </h3>
              </div>
              <a className="inline-flex items-center shrink-0 justify-center w-8 h-8 rounded-full text-white bg-gray-900 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 7l-10 10"></path>
                  <path d="M8 7l9 0l0 9"></path>
                </svg>
              </a>
            </div>
            <div aria-label="content" className="mt-9 grid gap-2.5">
              {/*  */}
              <span onClick={pageOcean} className="cursor-pointer">
                <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                  <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-sm font-medium">OCEAN</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </div>
              </span>
              {/*  */}
              {/*  */}
              <a href="qr-reader">
                <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                  <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col flex-1">
                    <h3 className="text-sm font-medium">BOP Activity</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </div>
              </a>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default Home;
