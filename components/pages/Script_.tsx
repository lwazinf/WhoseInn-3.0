import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Script_Props {}

const Script_ = ({}: Script_Props) => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center relative pt-6 mb-12`}
    >
      <div
        className={`w-[1200px] h-full bg-white/90 flex flex-col justify-start items-center rounded-[6px] shadow-md p-10`}
      >
        <div
          className={`w-full h-full flex flex-row justify-center items-center`}
        >
          <div
            className={`w-[40%] h-full flex flex-col justify-center items-center`}
          >
            <div
              className={`w-full h-[90%] rounded-[6px] flex flex-col justify-center items-center relative overflow-hidden shadow-sm`}
            >
              <img
                className={`w-full h-full object-cover opacity-90`}
                src={`/assets/images/bazooka.jpg`}
              />
            </div>
            <div
              className={`w-full h-[10%] rounded-[6px] flex flex-col justify-center items-center px-10 pt-2`}
            >
              <p className={`_inter text-[15px] font-thin text-black/50`}>
                This weapon has no ammunition, I use it as a hammer though!
              </p>
            </div>
          </div>
          <div
            className={`w-[60%] h-full rounded-[6px] flex flex-col justify-start items-start pl-10 pt-4`}
          >
            <div
              className={`w-full min-h-2 flex flex-row justify-start items-start`}
            >
              <p
                className={`_oswald min-h-0 font-black text-[25px] p-0 m-0 relative cursor-default text-black/70 transition-all duration-500`}
              >
                Spencer Finch
              </p>
            </div>
            <div
              className={`w-full min-h-2 mt-4 flex flex-row justify-start items-start`}
            >
              <p
                className={`_oswald min-h-0 text-[17px] font-thin p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left`}
              >
                Artilery Operator, Mason
              </p>
              <div
                className={`w-[50%] flex flex-row justify-start items-start`}
              >
                <p
                  className={`_oswald min-h-0 text-[17px] font-thin p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 text-left`}
                >
                  Age:
                </p>
                <p
                  className={`_oswald min-h-0 text-[17px] font-thin p-0 ml-2 m-0 relative cursor-default text-black/70 transition-all duration-500 text-left`}
                >
                  32
                </p>
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
                <p
                  className={`_oswald min-h-0 text-[17px] font-thin p-0 ml-2 m-0 relative cursor-default text-black/70 transition-all duration-500 text-left`}
                >
                  South Africa
                </p>
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
              className={`w-full min-h-2 mt-2 flex flex-row justify-start items-start pr-6`}
            >
              <p
                className={`_inter text-[14px] font-thin text-left text-black/80`}
              >
                As a trooper on a starship, your role is vital to the ship's
                smooth operation. You guard entry points, patrol corridors,
                defend against attacks, and assist with maintenance. While it
                can be demanding, it's also incredibly rewarding to be part of a
                team exploring new worlds and working alongside skilled
                individuals in the galaxy.
                <br /> As a trooper in a starship, you must be adaptable and
                resourceful, able to quickly adjust to new environments and make
                split-second decisions.
              </p>
            </div>
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
                <div
                  className={`w-full h-full absolute transition-all`}
                >
                  <div
                    className={`w-full h-full bg-white/20 backdrop-blur-md`}
                  ></div>
                </div>
                <img
                  className={`w-full object-cover absolute hover:opacity-0 opacity-100 transition-all duration-1000 hover:duration-200`}
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
                <div
                  className={`w-full h-full absolute transition-all`}
                >
                  <div
                    className={`w-full h-full bg-white/20 backdrop-blur-md`}
                  ></div>
                </div>
                <img
                  className={`w-full object-cover absolute hover:opacity-0 opacity-100 transition-all duration-1000 hover:duration-200`}
                  src={`/assets/images/firearm.jpg`}
                />
              </div>
            </div>
            <div
              className={`w-full h-[10%] rounded-[6px] flex flex-row justify-end items-center px-3 pt-2`}
            >
              {/* <p className={`_inter text-[15px] font-thin text-black/50`}>
                This weapon has no ammunition, I use it as a hammer though!
              </p> */}
              <FontAwesomeIcon
            icon={faAngleLeft}
            className={`h-[18px] w-[18px] mr-3 hover:text-black/40 transition-all duration-[400ms] cursor-pointer`}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`h-[18px] w-[18px] ml-3 hover:text-black/40 transition-all duration-[400ms] cursor-pointer`}
          />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Script_;
