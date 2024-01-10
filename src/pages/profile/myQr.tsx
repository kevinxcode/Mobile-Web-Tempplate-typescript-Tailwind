import React, { useEffect, useState } from "react";
import { getQrEmployee } from "../api/querlab";
import {
  showSweetAlert,
  showLoadingSweetAlert,
  closeLoadingSweetAlert,
} from "../utils/SweetAlert";

const myQr = () => {
  const [isQR, setisQR] = useState("");
  const [isName, setisName] = useState("");
  const [isJab, setisJab] = useState("");
  useEffect(() => {
    getProfileQR();
  }, []);

  const getProfileQR = () => {
    getQrEmployee().then((data) => {
      if (data != null) {
        setisQR(data.details.qr_code.qr);
        setisName(data.details.qr_code.data[0]._name);
        setisJab(data.details.qr_code.data[0]._jab);
      } else {
        showSweetAlert("Something went wrong", "error");
      }
    });
  };

  return (
    <div className="w-full max-w-full px-3 mt-3 border-2">
      <div className=" flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
          <img src={isQR} className="object-contain hover:object-scale-down" />
        </div>
        <div className="flex-auto p-4 pt-0 text-center">
          <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"></hr>
          <h5 className="mb-0 font-bold">{isName}</h5>
          <span className="leading-tight text-xs">{isJab}</span>
        </div>
      </div>
    </div>
  );
};
export default myQr;
