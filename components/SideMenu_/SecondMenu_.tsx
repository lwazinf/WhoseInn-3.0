import { useRecoilState } from "recoil";
import { MenuTray, MenuTrayItem } from "../atoms/atoms";
import { Archive_ } from "../ui/Archive_";

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
      
      <div
        className={`flex flex-col w-full h-[100px] justify-center items-center p-4 py-7 pt-14 mt-[50px] mb-4`}
      >
        <div
          className={`flex flex-col w-full h-full justify-center items-center rounded-[4px] transition-all duration-[400ms] cursor-default px-2`}
        >
          <p className={`._inter font-black text-[25px] p-0 m-0 text-black/40`}>
            {mTI_ == "Script"
              ? "Your Script"
              : mTI_ == "Archive"
              ? "Archived Podcasts"
              : mTI_ == "Podcasts"
              ? "Script Discovery"
              : "WhoseInn"}
          </p>
          <p
            className={`._inter font-normal text-[13px] p-0 m-0 text-black/40 mt-1`}
          >
            {mTI_ == "Script"
              ? "Customize a portfolio that reflects your personal brand."
              : mTI_ == "Archive"
              ? "Access your stored resumes, organized in their separate, designated collections."
              : mTI_ == "Podcasts"
              ? "Discover potential resume leads in this repository."
              : "Unearth your project's full potential with our extensive mining database at your fingertips."}
          </p>
        </div>
      </div>
      
      <div
        className={`flex flex-col w-full h-full justify-start items-center relative`}
      >
        <div
          className={`w-full h-full flex flex-col justify-start items-center px-[20px]`}
        >
          <div className={`w-[200px] h-[1px] bg-black/20 mb-2 mt-2`} />
          {mTI_ == "Archive" ? (
            <Archive_ />
          ) : mTI_ == "Podcasts" ? (
            <Archive_ />
            ) : mTI_ == "Script" ? (
            <Archive_ />
          ) : (
            <div></div>
          )}
        </div>
      </div>

    </div>
  );
};

export default SecondMenu_;
