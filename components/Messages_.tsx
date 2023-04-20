import {
  faEllipsisV,
  faInfoCircle,
  faMessage,
  faPaperPlane,
  faPaperclip,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Messages_Props {}

const Messages_ = ({}: Messages_Props) => {
  return (
    <div
      className={`w-[850px] flex flex-col justify-start items-center relative mb-12`}
    >
      <div
        className={`w-[850px] h-[100px] flex flex-row justify-start items-center fixed top-0`}
      >
        <div
          className={`w-[60px] h-[60px] flex flex-row justify-center items-center`}
        >
          <FontAwesomeIcon
            icon={faMessage}
            className={`h-[20px] w-[20px] text-black/60 transition-all duration-[200ms] cursor-pointer`}
          />
        </div>
        <div
          className={`w-full h-full flex flex-col justify-start items-start ml-[5px]`}
        >
          <p
            className={`._monts font-bold text-[30px] p-0 mt-[18px] text-black/60`}
          >
            Lwazi Ndlovu
          </p>
          <p
            className={`._inter font-normal text-[15px] p-0 mt-[-10px] text-black/30`}
          >
            Mineral Processing Consultant
          </p>
        </div>
        <div
          className={`w-[40px] h-[40px] flex flex-row justify-center items-center ml-auto`}
        >
          <FontAwesomeIcon
            icon={faThumbtack}
            className={`h-[18px] w-[18px] text-black/60 transition-all duration-[200ms] cursor-pointer rotate-45`}
          />
        </div>
        <div
          className={`w-[40px] h-[40px] flex flex-row justify-center items-center ml-auto mr-[5px]`}
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            className={`h-[18px] w-[18px] text-black/60 transition-all duration-[200ms] cursor-pointer`}
          />
        </div>
        <div
          className={`w-[40px] h-[40px] flex flex-row justify-end items-center ml-auto`}
        >
          <FontAwesomeIcon
            icon={faEllipsisV}
            className={`h-[18px] w-[18px] text-black/60 transition-all duration-[200ms] cursor-pointer`}
          />
        </div>
      </div>
      <div
        className={`w-[850px] min-h-[58px] rounded-[3px] bg-black/20 fixed bottom-4 flex flex-col justify-center items-center`}
      >
        <textarea
          className={`w-[750px] min-h-12 text-left pl-2 py-1 bg-transparent absolute top-0 left-0`}
        />
        <div
          className={`w-[100px] h-full flex flex-row ml-auto justify-center items-center relative`}
        >
          <FontAwesomeIcon
            icon={faPaperclip}
            className={`h-[20px] w-[20px] mr-[15px] text-black/60 hover:text-black/80 transition-all duration-[200ms] cursor-pointer`}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={`h-[20px] w-[20px] text-black/60 hover:text-black/80 transition-all duration-[200ms] cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
};

export default Messages_;
