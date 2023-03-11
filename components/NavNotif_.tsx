import { useRecoilState } from "recoil";
import { MenuHoverItem } from "./atoms/atoms";

interface NavNotif_Props {
  data: Array<string>,
  bPad: string
}

const NavNotif_ = ({data, bPad}: NavNotif_Props) => {
  const [mHI_, setMHI_] = useRecoilState(MenuHoverItem);
  
  return (
    <div
      className={`w-[100px] h-full fixed right-[60px] md:left-[80px] ml-4 flex flex-col justify-end items-center pointer-events-none opacity-0 md:opacity-100 ${bPad}`}
    >
      {data.map((obj) => {
        return (
          <div
            className={`w-[80px] h-[25px] flex flex-row md:justify-start justify-end items-center my-2 pointer-events-none`}
            key={obj}
          >
            <div
              className={`min-h-[20px] min-w-[0px] bg-black/50 backdrop-blur-lg flex flex-row relative overflow-hidden justify-center items-center text-white/40 hover:text-white/60 transition-all rounded-[4px] shadow-sm p-[2px] px-2 ${mHI_ == obj ? 'opacity-100 duration-200 ml-[0px]' : 'opacity-0 duration-1000 ml-[-10px]'}
              `}
              onClick={async () => {
                
              }}
            >
              <p className={`._inter text-left text-white/70 text-[13px] font-normal`}>
                {obj}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavNotif_;