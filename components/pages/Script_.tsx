import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleLeft,
  faAngleRight,
  faAt,
  faGlobeAfrica,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Script_Props {}

const Script_ = ({}: Script_Props) => {
  const [switched_, setSwitched_] = useState(false);
  const [linkedIn_, setLinkedIn_] = useState("linkedin.com/in/");
  const [twitter_, setTwitter_] = useState("twitter.com/");
  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center items-center relative mb-12`}
    >
      <div
        className={`w-[1200px] min-h-screen bg-white/90 flex flex-col justify-start items-center rounded-[6px] shadow-md p-10 mt-8`}
      >
        <div
          className={`w-full h-full flex flex-row justify-center items-center`}
        >
          <div
            className={`w-[40%] h-full flex flex-col justify-center items-center`}
          >
            <div
              className={`w-full h-[712px] rounded-[6px] flex flex-col justify-center items-center relative overflow-hidden shadow-sm`}
            >
              <img
                className={`w-full h-full object-cover opacity-90`}
                src={`/assets/images/bazooka.jpg`}
              />
            </div>
            <div
              className={`w-full h-[10%] rounded-[6px] flex flex-col justify-center items-center px-10 pt-2`}
            >
              <textarea
                className={`_inter text-[15px] text-center w-full font-thin text-black/50`}
                placeholder="This weapon has no ammunition, I use it as a hammer though!"
              />
            </div>
          </div>
          <div
            className={`w-[60%] h-full rounded-[6px] flex flex-col justify-start items-start pl-10 pt-4`}
          >
            <div
              className={`w-full min-h-2 flex flex-row justify-start items-start`}
            >
              <input
                type={`text`}
                className={`_oswald min-h-0 font-black text-[25px] p-0 m-0 relative cursor-default text-black/70 transition-all duration-500`}
                placeholder="Trooper #01"
              />
            </div>
            <div
              className={`w-full min-h-2 mt-4 flex flex-row justify-start items-start`}
            >
              <input
                type={`text`}
                className={`_oswald min-h-0 text-[17px] font-thin p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left`}
                placeholder="Artilery Operator, Mason"
              />
              <div
                className={`w-[50%] flex flex-row justify-start items-start`}
              >
                <p
                  className={`_oswald min-h-0 text-[17px] font-thin p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 text-left`}
                >
                  Age:
                </p>
                <input
                  type="text"
                  className={`_oswald min-h-0 text-[17px] font-thin p-0 ml-2 m-0 relative cursor-default text-black/70 transition-all duration-500 text-left`}
                  placeholder="32"
                />
              </div>
            </div>
            <div
              className={`w-full min-h-2 mt-3 flex flex-row justify-start items-start`}
            >
              <div
                className={`flex flex-row justify-start items-start w-[50%] h-[30px] rounded-[4px]`}
              >
                <div
                  className={`flex flex-row justify-center items-center min-w-[40px] h-[25px] rounded-[4px] bg-black/10 hover:bg-black/30 transition-all duration-[1000ms] hover:duration-200 cursor-pointer px-2 mr-2 text-black/50 hover:text-white/80`}
                >
                  <p
                    className={`_oswald min-h-0 text-[14px] font-medium p-0 m-0 relative cursor-default transition-all duration-500 text-center pointer-events-none`}
                  >
                    Creative
                  </p>
                </div>
                <div
                  className={`flex flex-row justify-center items-center min-w-[40px] h-[25px] rounded-[4px] bg-black/10 hover:bg-black/30 transition-all duration-[1000ms] hover:duration-200 cursor-pointer px-2 mr-2 text-black/50 hover:text-white/80`}
                >
                  <p
                    className={`_oswald min-h-0 text-[14px] font-medium p-0 m-0 relative cursor-default transition-all duration-500 text-center pointer-events-none`}
                  >
                    Commited
                  </p>
                </div>
                <div
                  className={`flex flex-row justify-center items-center min-w-[40px] h-[25px] rounded-[4px] bg-black/10 hover:bg-black/30 transition-all duration-[1000ms] hover:duration-200 cursor-pointer px-2 mr-2 text-black/50 hover:text-white/80`}
                >
                  <p
                    className={`_oswald min-h-0 text-[14px] font-medium p-0 m-0 relative cursor-default transition-all duration-500 text-center pointer-events-none`}
                  >
                    Punctual
                  </p>
                </div>
                <div
                  className={`flex flex-row justify-center items-center min-w-[40px] h-[25px] rounded-[4px] bg-black/10 hover:bg-black/30 transition-all duration-[1000ms] hover:duration-200 cursor-pointer px-2 mr-2 text-black/50 hover:text-white/80`}
                >
                  <p
                    className={`_oswald min-h-0 text-[14px] font-medium p-0 m-0 relative cursor-default transition-all duration-500 text-center pointer-events-none`}
                  >
                    Artistic
                  </p>
                </div>
              </div>
              <div
                className={`w-[50%] flex flex-row justify-start items-start`}
              >
                <p
                  className={`_oswald min-h-0 text-[17px] font-thin p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 text-left`}
                >
                  Location:
                </p>
                <input
                  type="text"
                  className={`_oswald min-h-0 text-[17px] font-thin p-0 ml-2 m-0 relative cursor-default text-black/70 transition-all duration-500 text-left`}
                  placeholder="South Africa"
                />
              </div>
            </div>
            <div
              className={`w-full min-h-2 mt-10 flex flex-row justify-start items-start`}
            >
              <p
                className={`_oswald min-h-0 text-[16px] font-thin p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left`}
              >
                About Me
              </p>
            </div>
            <div
              className={`w-full min-h-2 mt-2 flex flex-row justify-start items-start`}
            >
              {/* <p
                className={`_inter text-[14px] font-thin text-left text-black/80`}
              > */}
              <textarea
                className={`h-[126px] w-full _inter text-[14px] font-thin text-left text-black/80 min-h-2`}
                placeholder={`Write a short description about yourself..`}
              ></textarea>
              {/* </p> */}
              <div
                className={`w-[50px] h-full flex flex-col justify-start items-start`}
              >
                <div
                  className={`flex flex-row justify-center items-center min-w-[40px] h-[25px] rounded-[4px] bg-black/10 hover:bg-black/30 transition-all duration-[1000ms] hover:duration-200 cursor-pointer px-2 text-black/50 hover:text-white/80 my-1`}
                >
                  <p
                    className={`_oswald min-h-0 text-[14px] font-medium p-0 m-0 relative cursor-default transition-all duration-500 text-center pointer-events-none`}
                  >
                    Generate
                  </p>
                </div>
                <div
                  className={`flex flex-row justify-center items-center min-w-[40px] h-[25px] rounded-[4px] bg-black/10 hover:bg-black/30 transition-all duration-[1000ms] hover:duration-200 cursor-pointer px-2 text-black/50 hover:text-white/80 my-1`}
                >
                  <p
                    className={`_oswald min-h-0 text-[14px] font-medium p-0 m-0 relative cursor-default transition-all duration-500 text-center pointer-events-none`}
                  >
                    Improve
                  </p>
                </div>
                <div
                  className={`flex flex-row justify-end items-end w-full ml-2 min-h-1 relative`}
                >
                  <div
                    className={`flex flex-row justify-center items-center min-w-8 h-[25px] rounded-[4px] bg-black/10 hover:bg-black/30 transition-all duration-[1000ms] hover:duration-200 cursor-pointer px-2 mx-1 text-black/50 hover:text-white/80 my-1`}
                  >
                    <p
                      className={`_oswald min-h-0 text-[14px] font-medium p-0 m-0 relative cursor-default transition-all duration-500 text-center pointer-events-none`}
                    >
                      -
                    </p>
                  </div>
                  <div
                    className={`flex flex-row justify-center items-center min-w-8 h-[25px] rounded-[4px] bg-black/10 hover:bg-black/30 transition-all duration-[1000ms] hover:duration-200 cursor-pointer px-2 mx-1 text-black/50 hover:text-white/80 my-1`}
                  >
                    <p
                      className={`_oswald min-h-0 text-[14px] font-medium p-0 m-0 relative cursor-default transition-all duration-500 text-center pointer-events-none`}
                    >
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className={`w-full min-h-2 mt-10 flex flex-row justify-start items-start`}
              >
                <p
                  className={`_oswald min-h-0 text-[16px] font-thin p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left`}
                >
                  Project Highlights
                </p>
              </div>
              <div className={`w-full h-[270px] mt-5 grid grid-cols-2 gap-2`}>
                <div
                  className={`w-full h-full bg-black/10 rounded-[4px] flex justify-center items-center relative overflow-hidden`}
                >
                  <img
                    className={`w-full h-full object-cover opacity-70 scale-[0.9]`}
                    src={`/assets/images/helmet.jpg`}
                  />
                  <div className={`w-full h-full absolute transition-all`}>
                    <div
                      className={`w-full h-full bg-white/20 backdrop-blur-md`}
                    ></div>
                  </div>
                  <img
                    className={`w-full object-cover absolute ${
                      switched_
                        ? "hover:opacity-0 opacity-0"
                        : "hover:opacity-0 opacity-100"
                    } transition-all duration-1000 hover:duration-200`}
                    src={`/assets/images/helmet.jpg`}
                  />
                </div>
                <div
                  className={`w-full bg-black/10 rounded-[4px] flex justify-center items-center relative overflow-hidden`}
                >
                  <img
                    className={`w-full object-cover opacity-70 scale-[0.9]`}
                    src={`/assets/images/firearm.jpg`}
                  />
                  <div className={`w-full h-full absolute transition-all`}>
                    <div
                      className={`w-full h-full bg-white/20 backdrop-blur-md`}
                    ></div>
                  </div>
                  <img
                    className={`w-full object-cover absolute ${
                      switched_
                        ? "hover:opacity-0 opacity-0"
                        : "hover:opacity-0 opacity-100"
                    } transition-all duration-1000 hover:duration-200`}
                    src={`/assets/images/firearm.jpg`}
                  />
                </div>
              </div>
            </div>

            <div
              className={`w-full h-[10%] rounded-[6px] flex flex-row justify-end items-center px-3 pt-2`}
            >
              {/* <p className={`_inter text-[15px] font-thin text-black/50`}>
                This weapon has no ammunition, I use it as a hammer though!
              </p> */}
              <div
                className={`h-[18px] w-[18px] mr-3`}
                onClick={() => {
                  setSwitched_(false);
                }}
              >
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className={`h-[18px] w-[18px] ${
                    !switched_
                      ? "hover:text-black/5 text-black/10 cursor-default"
                      : "hover:text-black/80 text-black/40 cursor-pointer"
                  } transition-all duration-[400ms]`}
                />
              </div>
              <div
                className={`h-[18px] w-[18px] ml-3`}
                onClick={() => {
                  setSwitched_(true);
                }}
              >
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`h-[18px] w-[18px] ${
                    !switched_
                      ? "hover:text-black/80 text-black/40 cursor-pointer"
                      : "hover:text-black/5 text-black/10 cursor-default"
                  } transition-all duration-[400ms]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-[180px] mt-4 bg-black/5 opacity-90 rounded-[3px] flex flex-col justify-center items-center p-6 px-14 relative overflow-hidden`}
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
            className={`w-full min-h-2 flex flex-row justify-between items-center my-2`}
          >
            <div
              className={`flex flex-row items-center justify-start w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faAt}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                placeholder="trooper01@ofscript.com"
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
              />
            </div>
          </div>

          <div
            className={`w-full min-h-2 flex flex-row justify-between items-center my-2`}
          >
            <div
              className={`flex flex-row items-center justify-start w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                value={linkedIn_}
                onChange={(data_) => {
                  setLinkedIn_(data_.target.value);
                }}
                placeholder="linkedin.com/in/username"
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
                value={twitter_}
                onChange={(data_) => {
                  setTwitter_(data_.target.value);
                }}
                placeholder="twitter.com/in/username"
              />
            </div>
          </div>

          <div
            className={`w-full min-h-2 flex flex-row justify-between items-center my-2`}
          >
            <div
              className={`flex flex-row items-center justify-start w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faGlobeAfrica}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                placeholder="ofscript.ai"
              />
            </div>
            <div
              className={`flex flex-row items-center justify-center w-full h-full opacity-0`}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                value={twitter_}
                onChange={(data_) => {
                  setTwitter_(data_.target.value);
                }}
                placeholder="twitter.com/in/username"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Script_;
