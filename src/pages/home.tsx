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
       if(sessData==0){
          router.push("/login");
       }else{
         setisPage(true)
       }
    }
    return () => {
      setTimeout(() => {
        checkSession();
      }, 400); 
     
    };

  }, []);

  if (isPage) {
    return (
      <div className="flex flex-col min-h-[90vh]">
        <TopBar data={"HOME"} />
        <FloatingButton />
        <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center my-20">
          <div className="flex-grow flex items-center justify-center">
            <div className="container mx-auto px-4 py-8">
              {/* Your dashboard content goes here */}
              <h1 className="text-3xl font-semibold mb-0 ">
                OCEAN
                <span className="leading-tight text-xs"> 2.0</span>
              </h1>
              <p className="text-gray-700">
                The new generation of Ocean System (2.0)
              </p>
              {/* end content */}
            </div>
          </div>
        </main>
      </div>
    );
  }else{
    return <Spinner />
  }
};

export default Home;
