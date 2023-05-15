import { useRecoilState } from "recoil";
import { MenuTray, MenuTrayItem } from "./atoms/atoms";
import { useState } from "react";
import { useRouter } from "next/router";

interface Branding_Props {
  customStyle: string;
}

const Branding_ = ({ customStyle }: Branding_Props) => {
  const [mT_, setMT_] = useRecoilState(MenuTray);
  const [mTI_, setMTI_] = useRecoilState(MenuTrayItem);
  const [pulse_, setPulse_] = useState(false)
  const router = useRouter()
  return (
    <div
      className={`flex flex-col justify-start items-center h-[320px] w-full pt-[190px] hover:pt-[195px] opacity-60 hover:opacity-100 transition-all duration-[1000ms] hover:duration-200 ${customStyle}`}
      onMouseEnter={() => {
        setPulse_(true)
      }}
      onMouseLeave={() => {
        setPulse_(false)
      }}
    >
      <div
        className={`flex flex-col w-full h-[100px] justify-center items-center absolute top-6 p-4`}
      >
        <div
          className={`flex flex-col w-full h-full justify-center items-center opacity-[0.65] rounded-[4px] cursor-pointer`}
          onClick={() => {
            setMTI_("");
            router.push('/');
          }}
        >
          <img src={`/assets/images/LwaziNF.png`} className={`w-full object-cover`}/>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-start min-w-2 h-[52px] -rotate-90 pointer-events-none`}
      >
        <div
          className={`flex flex-row justify-end items-start min-w-2 min-h-2`}
        >
          <p
            className={`._inter min-h-0 font-medium text-[32px] p-0 m-0 relative cursor-default text-black/20 transition-all duration-500`}
          >
            OF
          </p>
          <div className={`h-full flex flex-col justify-center items-center mx-[5px]`}>
          <p
            className={`min-h-0 font-medium text-[12px] px-1 m-0 relative cursor-default text-white transition-all duration-500 rounded-[2px] bg-red-500 rotate-90 animate-pulse`}
          >
            AI
          </p>
          </div>
          <p
            className={`min-h-0 font-black text-[32px] p-0 m-0 relative cursor-default text-black/50 transition-all duration-500`}
          >
            SCRIPT
          </p>
        </div>

      </div>
    </div>
  );
};

export default Branding_;
