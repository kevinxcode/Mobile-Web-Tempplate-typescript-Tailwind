import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FloatingButton from "../components/FloatingButton";
import TopBar from "../components/TopBar";
import {
  showSweetAlert,
  showLoadingSweetAlert,
  closeLoadingSweetAlert,
} from "../utils/SweetAlert";
import {
  setAsyncStorageData,
  getAsyncStorageData,
  removeAsyncStorageData,
} from "../utils/AsyncStorage";
import { Session } from "../utils/Session";
import Spinner from "../components/Spinner";
import OceanList from "../ocean/oceanList";

const Ocean = () => {
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

  const toScanOcean = () => {
    try {
      showLoadingSweetAlert();
      setTimeout(() => {
        window.location.href = "/ocean/oceanScan";
      }, 200);
    } catch (error) {
      console.log(error);
    }
  };

  if (isPage) {
    return (
      <div className="flex flex-col min-h-[90vh] bg-white">
        <TopBar data={"OCEAN"} />
        <FloatingButton />
        <div className="container mx-auto px-2 py-8 mt-10  max-w-lg bg-white min-h-screen">
          {/* page content  */}
          <div className="px-8">
            <a
              onClick={toScanOcean}
              className="cursor-pointer items-center justify-center "
            >
              <div className="flex flex-col items-center justify-center p-1 rounded-full bg-gray-600 text-white">
                <h3 className="text-md font-medium">OCEAN SCAN</h3>
                <span className="text-xs">click to scan</span>
              </div>
            </a>
          </div>
          <OceanList />
          {/* end page content */}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};
export default Ocean;
