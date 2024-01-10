import React, { useState } from "react";
import TopBar from "../components/TopBar";
import QrReader from "modern-react-qr-reader";

export default function Myqr() {
  const [data, setData] = useState("No result");
  const [camera, setCamera] = useState("environment");
  const handleScan = (data) => {
    if (data) {
      setData(data);
      // this.state.result = data;
      // console.log(this.state.result);
      // this.setState({ result: data });
    }
  };

  const frontCam = () => {
    setCamera("user");
  };
  const backCam = () => {
    setCamera("environment");
  };

  // const handleChange = (e) => {
  //   setCamera(e.target.value);
  // };

  return (
    <div className="flex flex-col min-h-[90vh]">
      <TopBar data={"QR Scan"} />
      <div class="flex flex-nowrap fixed bg-gray-100  bottom-0 left-1/2 transform -translate-x-1/2 w-full h-20 items-center justify-center ">
        <a
          href="/activity"
          class="py-2.5 px-5 me-2 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          Cancel
        </a>
      </div>
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center ">
        <div
          className="flex-grow flex items-center justify-center"
          style={{ width: "100%" }}
        >
          <div className="container mx-auto px-4  max-w-lg py-12 mt-15">
            <button
              onClick={backCam}
              class="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
              <span>Back</span>
            </button>
            <button
              onClick={frontCam}
              class="m-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
              <span>Front</span>
            </button>

            <QrReader
              delay={300}
              facingMode={camera}
              onError={console.log("aa")}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
            <p style={{ marginTop: "15px" }}>{data}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
