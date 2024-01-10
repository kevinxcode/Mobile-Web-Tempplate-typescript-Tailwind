import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FloatingButton from "../components/FloatingButton";
import TopBar from "../components/TopBar";
import MyQrPage from "../profile/myQr";
import MyProfile from "../profile/myProfile";
import {
  setAsyncStorageData,
  getAsyncStorageData,
  removeAsyncStorageData,
} from "../utils/AsyncStorage";

import { Session } from "../utils/Session";
import Spinner from "../components/Spinner";
import ConfirmDialog from "../utils/ConfirmDialog";

const Profile = () => {
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

  const [pageProfile, setpageProfile] = useState("page-qr");

  const signOut = async () => {
    const shouldConfirm = await ConfirmDialog("", "TO SIGN OUT");
    if (shouldConfirm) {
      removeAsyncStorageData("login-user");
      router.push("/login");
    }
  };

  const pageQR = () => {
    setpageProfile("page-qr");
  };

  const btnProfile = () => {
    setpageProfile("page-profile");
  };

  var active_css =
    "text-white py-4 px-6 block hover:text-white-500 focus:outline-none  text-white border-b-2 font-medium border-blue-500";
  var inactive_css =
    "text-white py-4 px-6 block hover:text-white-500 focus:outline-none  ";
  if (isPage) {
    return (
      <div className="flex flex-col min-h-[90vh] bg-white">
        <TopBar data={"PROFILE"} />
        <FloatingButton />
        <div className="flex items-center justify-space-between mt-12 justify-center bg-gray-800 text-white ">
          <button
            onClick={pageQR}
            className={pageProfile == "page-qr" ? active_css : inactive_css}
          >
            My QR
          </button>

          <button
            onClick={btnProfile}
            className={
              pageProfile == "page-profile" ? active_css : inactive_css
            }
          >
            My Profile
          </button>
          <button
            onClick={signOut}
            className="text-red-400 py-4 px-6 block hover:text-blue-500 focus:outline-none"
          >
            Sign Out
          </button>
        </div>
        <div className="container  mx-auto px-5 py-8  max-w-lg bg-white min-h-screen">
          {pageProfile == "page-qr" ? <MyQrPage /> : <MyProfile />}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};
export default Profile;
