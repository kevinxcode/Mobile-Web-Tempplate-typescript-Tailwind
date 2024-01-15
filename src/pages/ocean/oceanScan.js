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
    try {
      if (data) {
        setisScanned(true);
        setData(data);
      }
    } catch (error) {
      console.log(error);
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
            <span className="text-md font-bold mb-8">Scan Result</span>
            <textarea
              class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              value={data}
            />
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
