import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import TopBar from "../components/TopBar";
import { useRouter } from "next/router";

const QrReader = dynamic(() => import("modern-react-qr-reader"), {
  ssr: false,
});

import { Session } from "../utils/Session";
import {
  showSweetAlert,
  showLoadingSweetAlert,
  closeLoadingSweetAlert,
} from "../utils/SweetAlert";
import Spinner from "../components/Spinner";

const oceanScan = () => {
  const router = useRouter();
  const [data, setData] = useState("No result");
  const [camera, setCamera] = useState("environment");
  const [isScanned, setisScanned] = useState(false);
  const [preview, setPreview] = useState("defaultVideowidth");
  const [isSubmit, setisSubmit] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const sessData = await Session();
      if (sessData == 0) {
        window.location.href = "/login";
      }
    };
    return () => {
      setTimeout(() => {
        checkSession();
      }, 400);
    };
  }, []);

  const handleScan = (data) => {
    if (data) {
      setisScanned(true);
      setData(data);
    }
  };

  const frontCam = () => {
    setCamera("user");
  };
  const backCam = () => {
    setCamera("environment");
  };

  const btnBackOcean = () => {
    setisScanned(false);
    window.location.href = "/ocean";
  };

  const btnScanAgain = () => {
    setisScanned(false);
  };

  const previewStyle = {
    height: 240,
    width: 320,
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="flex flex-col min-h-[90vh] bg-white">
      <TopBar data={"Ocean Scan"} />
      <div className="flex flex-nowrap fixed bg-gray-100  bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 items-center justify-center ">
        <button
          onClick={btnBackOcean}
          className={
            isScanned
              ? "hidden"
              : "py-2.5 px-5 me-2 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          }
        >
          Back
        </button>

        <button
          onClick={btnScanAgain}
          className={
            !isScanned
              ? "hidden"
              : "py-2.5 px-5 me-2 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
          }
        >
          Scan Again
        </button>
      </div>
      <div className="container mx-auto px-2 py-8 mt-10  max-w-lg bg-white min-h-screen">
        <div
          className={
            !isScanned ? "hidden" : "flex flex-col items-center justify-center"
          }
        >
          <div className="flex flex-col min-h-[60vh] items-center justify-center w-full">
            <span className="text-md font-bold">RESULT</span>
            <span className="text-md font-semibold mt-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your result
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              >
                {data}
              </textarea>
            </span>
          </div>
        </div>

        <div className={isScanned ? "hidden" : ""}>
          <div className="flex flex-row items-center justify-center">
            <button
              onClick={backCam}
              className="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>Back</span>
            </button>
            <button
              onClick={frontCam}
              className="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <span>Front</span>
            </button>
          </div>
          <div className="flex flex-row items-center justify-center mt-5">
            <QrReader
              videowidth={preview?.videowidth}
              delay={200}
              facingMode={camera}
              onError={(error) => {
                setisScanned(false);
                console.error(error);
              }}
              onScan={handleScan}
              className="w-full"
              style={previewStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default oceanScan;
