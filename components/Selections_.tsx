// // // // // // // Consulting

import { useRecoilState } from "recoil";
import { MenuItem, MenuTray, StoreDP, CurrentID, TagInfo, CartTray } from "./atoms/atoms";
import { useEffect } from "react";

interface Consulting_Props {}

export const Consulting_ = ({}: Consulting_Props) => {
  return (
    <div className={`w-full h-full flex flex-col justify-start items-center`}>
      <div
        className={`flex flex-col w-full h-[40px] hover:h-[50px] m-1 justify-center items-center bg-black/30 hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative`}
      >
        <div
          className={`flex flex-col justify-center items-center min-w-[5px] min-h-[5px] absolute right-2 p-[1px] px-[2px] bg-orange-500 rounded-[3px] text-[12px] font-black text-white/90`}
        >
          12
        </div>
      </div>
      <div
        className={`flex flex-col w-full h-[40px] hover:h-[50px] m-1 justify-center items-center bg-black/10 hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative`}
      ></div>
    </div>
  );
};

// // // // // // // Material

interface OptionsProps {
  option: string; // specify the type of the option prop
}

export const Options_ = ({ option }: OptionsProps) => {
  const [mT_, setMT_] = useRecoilState(MenuTray);
  const [mI_, setMI_] = useRecoilState(MenuItem);
  const [dP_, setDP_] = useRecoilState(StoreDP);
  const [tI_, setTI_] = useRecoilState(TagInfo);
  const [cT_, setCT_] = useRecoilState(CartTray);
  const [cID_, setCID_] = useRecoilState(CurrentID);
  useEffect(() => {
    console.log(mI_)
  }, [mI_]
  )
  return (
    <div
      className={`w-full min-h-2 grid grid-cols-2 gap-1 ${
        dP_
          ? "opacity-50 pointer-events-none cursor-wait"
          : "opacity-100 pointer-events-auto"
      } transition-all duration-[400ms]`}
    >
      {/* Use menuItems here instead of mI_[option] */}
      {mI_[option].map((obj_) => {
        return (
          <div
            key={obj_.id} // add a unique key prop for each item in the map
            onClick={() => {
              if(cID_ != obj_.id){setMT_(false);
                setCT_(false)
              setDP_(true);
              setCID_(obj_.id)
              setTI_(mI_[option].filter((obj__) => {
                return obj__.id == obj_.id
              })[0])}
            }}
            className={`flex flex-col w-full h-[100px] justify-center items-center ${cID_ == obj_.id ? 'bg-black/30' : 'bg-black/10'} hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative overflow-hidden`}
          >
            <img src={obj_.image} className={`w-full h-full object-cover ${cID_ == obj_.id ? 'opacity-100 animate-pulse' : 'opacity-60'} hover:opacity-80 transition-all duration-[800ms]`}/>
          </div>
        );
      })}

      {/* Add more code here */}
    </div>
  );
};


