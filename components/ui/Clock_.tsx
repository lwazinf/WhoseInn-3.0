import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { mapObjectAtom } from "../atoms/atoms";
import QRCode from "react-qr-code";

const Clock_: React.FC = () => {
  const [currentTime_, setCurrentTime_] = useState<string>();
  const [name_, setName_] = useState<string>();
  const [mapObject, setMapObject] = useRecoilState(mapObjectAtom);

  // Function to print the current time
  const setCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime_(currentTime.slice(0, 5));
    return console.log(currentTime_);
  };

  useEffect(() => {
    // Print the current time initially
    setCurrentTime();

    // Set interval to print the current time every minute
    const intervalId = setInterval(setCurrentTime, 60000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession(); // Get the current user session

      if (session) {
        // User is logged in, handle the session data
                    // @ts-ignore
        setName_(session.user.name); // Access the user object from the session and set the name
      } else {
        // User is not logged in
        console.log("User is not logged in");
      }
    };

    fetchData();
  }, []);

  return (
      <div
        className={`flex flex-col justify-start items-center pt-8 h-full mix-blend-multiply absolute bottom-0 right-[30px] transition-all duration-500 min-w-2 cursor-default`}
        onClick={() => {
          console.log(name_);
        }}
      >
        {/* <p
          className={`text-black opacity-10 font-black text-[70px] m-0 p-0 relative -rotate-90 min-w-[0px] min-h-[70px]`}
        >
          {mapObject["Company Name"]
            .split(" ")
            .map((item) => item.charAt(0))
            .join("").toLocaleUpperCase()}
        </p> */}
        <QRCode
          className={`w-[50px] h-[50px] mix-blend-multiply transition-all duration-500 my-3 mb-4 opacity-80`}
          value={mapObject["Company Name"] ? mapObject["Company Name"] : ""}
          onClick={() => {
            // console.log(element)
          }}
        />
        <p
          className={`text-black opacity-20 font-black text-[16px] m-0 p-0 leading-[14px]`}
        >
          {currentTime_}
        </p>
        <p
          className={`text-black opacity-80 font-black/70 text-[13px] m-0 p-0`}
        >
          {name_}
        </p>
      </div>
  );
};

export default Clock_;
