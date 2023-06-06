import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAdd,
  faAt,
  faGlobeAfrica,
  faInfoCircle,
  faLocation,
  faPhone,
  faRobot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Archive_Props {}

const Archive_ = ({}: Archive_Props) => {
  
  return (
    <div
      className={`w-full min-h-2 flex flex-row justify-center items-start relative mb-12`}
    >
      <div
        className={`w-[1200px] min-h-2 flex flex-col justify-start items-center rounded-[6px] p-10 mt-8 relative`}
      >
        {[1, 2].map((obj_) => {
          return (
            <Lead_ />
          )
        })}
        <div
          className={`w-full h-[180px] mt-4 bg-black/10 opacity-30 hover:opacity-60 rounded-[3px] flex flex-col justify-center items-center p-6 px-14 relative overflow-hidden transition-all duration-400 hover:duration-200 cursor-pointer`}
          onClick={() => {
            // setAddOn_(true);
          }}
        >
          <div
            className={`w-[30px] h-[30px] opacity-50  rounded-[50%] flex flex-col justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faAdd}
              className={`h-[20px] w-[20px] text-black/70 hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive_;



interface Lead_Props {
  
}
 
const Lead_ = ({}:Lead_Props) => {
  const [email_, setEmail_] = useState("");
  const [phone_, setPhone_] = useState("");
  const [website_, setWebsite_] = useState("");
  const [linkedIn_, setLinkedIn_] = useState("");
  const [twitter_, setTwitter_] = useState("");
  const [instagram_, setInstagram_] = useState("");
  return ( 
    <div
          className={`w-[800px] h-[180px] mt-2 bg-black/5 opacity-90 rounded-[3px] flex flex-col justify-center items-center p-6 px-14 relative overflow-visible mb-16 shadow-md`}
        >
          <div className={`w-full h-full flex flex-col absolute top-0`}>
            <img
              src={`/assets/images/bazooka.jpg`}
              className={`w-full h-full object-cover opacity-20`}
            />
            <div className={`w-full h-full absolute transition-all`}>
              <div
                className={`w-full h-full bg-white/50 backdrop-blur-lg`}
              ></div>
            </div>
          </div>
          <div
            className={`w-full min-h-2 flex flex-row justify-start items-center my-2`}
          >
            <div
              className={`flex flex-row items-center justify-start w-[50%] h-full`}
            >
              <FontAwesomeIcon
                icon={faAt}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                placeholder="you@server.com"
                onChange={(obj_) => {
                  setEmail_(obj_.target.value);
                }}
              />
            </div>
            <div
              className={`flex flex-row items-center justify-center w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faPhone}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 hover:text-black/60 transition-all duration-500 w-[50%] text-left pl-1`}
                placeholder="000-000-0000"
                onChange={(obj_) => {
                  setPhone_(obj_.target.value);
                }}
              />
            </div>
          </div>

          <div
            className={`w-full min-h-2 flex flex-row justify-start items-center my-2`}
          >
            <div
              className={`flex flex-row items-center justify-start w-[50%] h-full`}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                onChange={(data_) => {
                  setLinkedIn_(data_.target.value);
                }}
                placeholder="username"
              />
            </div>
            <div
              className={`flex flex-row items-center justify-center w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                onChange={(data_) => {
                  setTwitter_(data_.target.value);
                }}
                placeholder="username"
              />
            </div>
          </div>

          <div
            className={`w-full min-h-2 flex flex-row justify-start items-center my-2`}
          >
            <div
              className={`flex flex-row items-center justify-start w-[50%] h-full`}
            >
              <FontAwesomeIcon
                icon={faGlobeAfrica}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                placeholder="ofscript.ai"
                onChange={(obj_) => {
                  setWebsite_(obj_.target.value);
                }}
              />
            </div>
            <div
              className={`flex flex-row items-center justify-center w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                onChange={(data_) => {
                  setInstagram_(data_.target.value);
                }}
                placeholder="username"
              />
            </div>
          </div>
          <div
            className={`absolute right-[-50px] h-full w-[40px] flex flex-col justify-center items-center`}
          >
            <FontAwesomeIcon
              icon={faLocation}
              className={`h-[20px] w-[20px] text-black/40 hover:ml-6 hover:text-black/60 m-4 my-2 mr-6 transition-all duration-[400ms] cursor-pointer`}
            />
            <FontAwesomeIcon
              icon={faRobot}
              className={`h-[20px] w-[20px] text-black/40 hover:ml-6 hover:text-black/60 m-4 my-2 mr-6 transition-all duration-[400ms] cursor-pointer`}
            />
            <FontAwesomeIcon
              icon={faInfoCircle}
              className={`h-[20px] w-[20px] text-black/40 hover:ml-6 hover:text-black/60 m-4 my-2 mr-6 transition-all duration-[400ms] cursor-pointer`}
            />
          </div>
          <div
            className={`absolute right-[50px] h-full w-[40px] flex flex-col justify-center items-center`}
          >
            <p
              className={`text-[14px] text-black/60 -rotate-90 w-[180px] text-center relative right-[30px]`}
            >
              <p
                className={`font-black text-[37px] text-black/80 relative top-2`}
              >
                13:00
              </p>{" "}
              20 Mar, Fri 2023
              <p className={`text-[14px] font-medium text-black`}>
                Lwazi Ndlovu
              </p>
            </p>
          </div>
          <div
            className={`absolute bottom-[-40px] w-full h-[40px] flex flex-col text-right text-[13px] opacity-50 justify-center items-center`}
          >
            Service - Mining and Construction
          </div>
          <div
            className={`absolute bottom-[-60px] w-full h-[40px] flex flex-col justify-center items-center text-[15px] opacity-70 font-medium`}
          >
            IVORY TOWER GROUP
          </div>
        </div>
   );
}