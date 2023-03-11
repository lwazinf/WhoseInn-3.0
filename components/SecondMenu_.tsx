import { useRecoilState } from "recoil";
import { MenuTray, MenuTrayItem } from "./atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Consulting_, Material_ } from "./Selections_"

interface SecondMenu_Props {}

const SecondMenu_ = ({}: SecondMenu_Props) => {
  const [mT_, setMT_] = useRecoilState(MenuTray);
  const [mTI_, setMTI_] = useRecoilState(MenuTrayItem);
  return (
    <div
      className={`flex flex-col fixed ${
        mT_ ? "left-[100px]" : "left-[-500px]"
      } top-0 w-[300px] h-full justify-start items-center bg-white/40 backdrop-blur-lg shadow-md transition-all duration-300`}
    >
      {/* <div
        className={`flex flex-col w-full h-[150px] justify-center items-center px-4 mt-[40px] relative rounded-[4px] overflow-hidden `}
      >
      <img src={`https://images.pexels.com/photos/461789/pexels-photo-461789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} className={`w-full object-cover mt-[40px] rounded-[4px] relative bottom-[60px]`}/>
      </div> */}
      <div
        className={`flex flex-col w-full h-[100px] justify-center items-center p-4 py-7 mt-[50px]`}
      >
        <div
          className={`flex flex-col w-full h-full justify-center items-center rounded-[4px] transition-all duration-[400ms] cursor-default px-6`}
        >
          <p className={`._inter font-black text-[35px] p-0 m-0 text-black/50`}>
            {mTI_ == "Equipment"
              ? "Equipment"
              : mTI_ == "Consulting"
              ? "Consulting"
              : mTI_ == "Logistics"
              ? "Logistics"
              : "WhoseInn"}
          </p>
          <p
            className={`._inter font-normal text-[13px] p-0 m-0 text-black/40 mt-3`}
          >
            {mTI_ == "Equipment"
              ? "Interact with other venders"
              : mTI_ == "Consulting"
              ? "Consulting"
              : mTI_ == "Logistics"
              ? ""
              : "Unearth your project's full potential with our extensive mining database at your fingertips."}
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col w-full h-full justify-start items-center relative`}
      >
        <div
          className={`flex flex-col w-full h-[100px] justify-center items-center p-4 pb-7 pt-7`}
        >
          <div
            className={`flex flex-col w-full h-full justify-center items-center bg-black/30 hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative`}
          >
            <div
              className={`min-h-[20px] min-w-[20px] m-2 relative flex justify-center items-center mr-auto ml-3`}
              onMouseLeave={() => {
                // setMHI_("");
              }}
              onMouseEnter={() => {
                // setMHI_("Logistics");
              }}
            >
              <FontAwesomeIcon
                icon={faSearch}
                className={`h-[20px] w-[20px] text-white/80 hover:text-white transition-all duration-[400ms] cursor-pointer`}
              />
            </div>
            <input
              type={"text"}
              placeholder={`${
                mTI_ == "Equipment"
                  ? '"Jabulani", "Kevin"'
                  : '"Excavators", "Drills"'
              }`}
              onChange={(obj) => {
                console.log(obj.target.value);
              }}
              className={`absolute w-full h-full p-2 transition-all duration-400 font-normal bg-transparent text-white/80 placeholder-white/60 text-center`}
            />
          </div>
        </div>
        <div
          className={`w-full h-full flex flex-col justify-start items-center px-[20px]`}
        >
          <div className={`w-[200px] h-[1px] bg-black/20 mb-2`} />
          {mTI_ == 'Consulting' ? <Consulting_/> : mTI_ == 'Material' ? <Material_/> : <div></div>}
      </div>
      </div>
    </div>
  );
};

export default SecondMenu_;
