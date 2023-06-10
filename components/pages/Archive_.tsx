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
  faTractor,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { checkUp_, signIn_, useAuth } from "../../Firebase";
import QRCode from "react-qr-code";

interface Archive_Props {}

const Archive_ = ({}: Archive_Props) => {
  return (
    <div
      className={`w-full min-h-2 flex flex-row justify-center items-start relative mb-12`}
    >
      <div
        className={`min-w-[120px] min-h-2 bg-white/90 rounded-[4px] shadow-lg flex flex-col justify-start items-center p-3 pt-8 mt-8 relative`}
      >
        {[1].map((obj_) => {
          return <Lead_ />;
        })}
        <div
          className={`w-[800px] min-h-[400px] mt-2 pt-4 pb-4 bg-black/5 opacity-50 rounded-[4px] flex flex-col justify-start items-center relative overflow-hidden transition-all duration-400 hover:duration-200`}
          onClick={() => {
            // setAddOn_(true);
          }}
        >
          <QRCode
            className={`w-[185px] h-[185px] absolute top-6 left-8 mix-blend-multiply`}
            value={"IVORY TOWER GROUP"}
          />
          {[
            {
              type: "twoCell",
              H1: "Company Name",
              H2: "Email",
              P1: "Ivory Tower Group",
              P2: "info@itg.com",
            },
            {
              type: "twoCell",
              H1: "Website",
              H2: "Number",
              P1: "https://itg.com",
              P2: "0937466528",
            },
            {
              type: "twoCell",
              H1: "Category",
              H2: "Locations",
              P1: "Paint",
              P2: "Pretoria, Benoni, Midrand, Capetown",
            },
            {
              type: "twoCell",
              H1: "Industry",
              H2: "Type",
              P1: "Construction",
              P2: "Product",
            },
            {
              type: "OneCell",
              H1: "AI Overview",
              P1: "Reprehenderit et do ut tempor occaecat irure commodo dolore ipsum qui aliquip do ad. Cupidatat ipsum eu deserunt voluptate dolor magna ut quis sunt do. Irure elit veniam duis qui et. In excepteur Lorem excepteur ex ex ipsum in. Et minim Lorem officia culpa eu veniam Lorem sint aliquip do.",
            },
            {
              type: "OneCell",
              H1: "Cold Call Script",
              P1: "Reprehenderit et do ut tempor occaecat irure commodo dolore ipsum qui aliquip do ad. Cupidatat ipsum eu deserunt voluptate dolor magna ut quis sunt do. Irure elit veniam duis qui et. In excepteur Lorem excepteur ex ex ipsum in. Et minim Lorem officia culpa eu veniam Lorem sint aliquip do.",
            },
            {
              type: "OneCell",
              H1: "Email Script",
              P1: "Reprehenderit et do ut tempor occaecat irure commodo dolore ipsum qui aliquip do ad. Cupidatat ipsum eu deserunt voluptate dolor magna ut quis sunt do. Irure elit veniam duis qui et. In excepteur Lorem excepteur ex ex ipsum in. Et minim Lorem officia culpa eu veniam Lorem sint aliquip do.",
            },
          ].map((obj_) => {
            if (obj_.type == "twoCell") {
              return (
                <TwoCell_ H1={obj_.H1} H2={obj_.H2} P1={obj_.P1} P2={obj_.P2} />
              );
            } else {
              return <OneCell_ H1={obj_.H1} P1={obj_.P1} />;
            }
          })}
          <div
            className={`w-[93%] min-h-[100px] flex flex-col justify-center items-center mt-3`}
          >
            <p
              className={`_Inter text-[14px] text-black font-black w-full text-left ml-1 mb-1`}
            >
              Attachments
            </p>
            <div
              className={`w-full h-[100px] flex flex-row justify-between items-center`}
            >
              <div
                className={`flex flex-row justify-center items-center rounded-[3px] h-full w-full mx-1 bg-black/20 hover:bg-black/80 transition-all duration-200 cursor-pointer`}
              />
              <div
                className={`flex flex-row justify-center items-center rounded-[3px] h-full w-full mx-1 bg-black/20 hover:bg-black/80 transition-all duration-200 cursor-pointer`}
              />
              <div
                className={`flex flex-row justify-center items-center rounded-[3px] h-full w-full mx-1 bg-black/20 hover:bg-black/80 transition-all duration-200 cursor-pointer`}
              />
              <div
                className={`flex flex-row justify-center items-center rounded-[3px] h-full w-full mx-1 bg-black/20 hover:bg-black/80 transition-all duration-200 cursor-pointer`}
              />
            </div>
          </div>
        </div>
        <div
          className={`w-[800px] min-h-[200px] mt-2 pt-4 pb-4 bg-black/5 opacity-50 rounded-[3px] flex flex-col justify-start items-center relative overflow-hidden transition-all duration-400 hover:duration-200`}
          onClick={() => {
            // setAddOn_(true);
          }}
        >
          <div
            className={`absolute top-0 left-0 rounded-[4px] shadow-md p-4 w-full h-full`}
          >
            <textarea
              className={`_inter text-[15px] text-start w-full h-full bg-transparent font-thin text-black/50`}
              placeholder="Add notes to this.."
              onChange={(obj_) => {}}
            />
          </div>
          <div
            className={`absolute right-3 bottom-3 rounded-[4px] shadow-md w-[80px] h-[30px] flex flex-col justify-center items-center text-[13px] cursor-pointer text-white transition-all duration-500 bg-red-600`}
          >
            Add Note
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive_;

interface Lead_Props {}

const Lead_ = ({}: Lead_Props) => {
  const [email_, setEmail_] = useState("");
  const [phone_, setPhone_] = useState("");
  const [website_, setWebsite_] = useState("");
  const [linkedIn_, setLinkedIn_] = useState("");
  const [twitter_, setTwitter_] = useState("");
  const [instagram_, setInstagram_] = useState("");

  console.log(useAuth());

  return (
    <div
      className={`w-[800px] h-[180px] mt-2 bg-black/5 opacity-90 rounded-[4px] flex flex-col justify-center items-center p-6 px-14 relative overflow-visible mb-5 shadow-`}
    >
      <div
        className={`w-full h-full flex flex-col justify-center items-center absolute top-0 rounded-[4px]`}
      >
        <img
          src={`/assets/images/bazooka.jpg`}
          className={`w-full h-full object-cover opacity-20 rounded-[4px]`}
        />
        <div
          className={`w-full h-full absolute transition-all redAir rounded-[4px]`}
        >
          <p
            className={`font-black text-[80px] h-full leading-tight text-white/30 absolute left-[30px] -rotate-90`}
          >
            ITG
          </p>
        </div>
        <div className={`w-full h-full absolute transition-all rounded-[4px]`}>
          <div
            className={`w-full h-full bg-white/30 backdrop-blur-lg flex flex-col relative overflow-hidden justify-center items-center rounded-[4px]`}
          >
            <p
              className={`font-black text-[30px] leading-tight text-black/70 tracking-tight relative top-2 right-[100px] mix-blend-multiply`}
            >
              IVORY TOWER GROUP
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-[50%] h-[50%] bg-red-600 ml-auto mr-[80px] flex flex-row justify-start items-center my-2`}
      >
        {/* <div
              className={`flex flex-row items-center justify-start w-[50%] h-full mt-auto`}
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
            </div> */}
      </div>

      <div
        className={`w-[50%] h-[50%] bg-red-600 ml-auto mr-[80px] flex flex-row justify-start items-center my-2`}
      >
        {/* <div
              className={`flex flex-row items-center justify-start w-[50%] h-full mt-auto`}
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
            </div> */}
      </div>

      <div
        className={`w-[50%] h-[50%] bg-red-600 ml-auto mr-[80px] flex flex-row justify-start items-center my-2`}
      >
        {/* <div
              className={`flex flex-row items-center justify-start w-[50%] h-full mt-auto`}
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
            </div> */}
      </div>
      {/* <div
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
      </div> */}
      <div
        className={`absolute right-[50px] h-full w-[40px] flex flex-col justify-center items-center opacity-70`}
      >
        <p
          className={`text-[13px] text-black/60 -rotate-90 w-[180px] text-center relative right-[30px]`}
        >
          <p className={`font-black text-[37px] text-black/80 relative top-2`}>
            13:00
          </p>{" "}
          20 Mar, Fri 2023
          <p
            className={`text-[13px] font-bold leading-tight text-black/50 tracking-tight`}
          >
            LWAZI NDLOVU
          </p>
        </p>
      </div>
      {/* <div
            className={`absolute bottom-[-40px] w-full h-[40px] flex flex-col text-right text-[13px] opacity-50 justify-center items-center`}
          >
            Service - Mining and Construction
          </div>
          <div
            className={`absolute bottom-[-60px] w-full h-[40px] flex flex-col justify-center items-center text-[15px] opacity-70 font-medium`}
          >
            IVORY TOWER GROUP
          </div> */}
    </div>
  );
};

interface TwoCell_Props {
  H1: string;
  P1: string;
  H2: string;
  P2: string;
}

const TwoCell_ = ({ H1, H2, P1, P2 }: TwoCell_Props) => {
  return (
    <div
      className={`w-[68%] h-[50px] flex flex-row ml-auto mr-10 justify-center items-center`}
    >
      <div
        className={`w-full h-full flex flex-col justify-center items-start pl-8`}
      >
        <p className={`_Inter text-[14px] text-black font-black`}>{H1}</p>
        <p className={`_Inter text-[13px] text-black/50`}>{P1}</p>
      </div>
      <div
        className={`w-full h-full flex flex-col justify-center items-start pl-8`}
      >
        <p className={`_Inter text-[14px] text-black font-black`}>{H2}</p>
        <p className={`_Inter text-[13px] text-black/50`}>{P2}</p>
      </div>
    </div>
  );
};

interface OneCell_Props {
  H1: string;
  P1: string;
}

const OneCell_ = ({ H1, P1 }: OneCell_Props) => {
  return (
    <div
      className={`w-full h-[50px] flex flex-row justify-center items-center mt-6 mb-4`}
    >
      <div
        className={`w-full h-full flex flex-col justify-center items-start px-8`}
      >
        <p className={`_Inter text-[14px] text-black font-black`}>{H1}</p>
        <p className={`_Inter text-[13px] text-black/50 text-left`}>{P1}</p>
      </div>
    </div>
  );
};
