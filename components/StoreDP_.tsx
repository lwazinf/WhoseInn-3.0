import { useRecoilState } from "recoil";
import { StoreDP, TagInfo } from "./atoms/atoms";
import { useEffect } from "react";

interface StoreDP_Props {}

const StoreDP_ = ({}: StoreDP_Props) => {
  const [dP_, setDP_] = useRecoilState(StoreDP);
  const [tI_, setTI_] = useRecoilState(TagInfo);
  const countdown_ = setTimeout(() => {
    if (dP_) {
      setDP_(false);
    }
  }, 8000);
  useEffect(() => {
    // clearTimeout(countdown_)
    if (dP_) {
    countdown_
    }
  }, [dP_]);
  return (
    <div
      className={`flex flex-col fixed ${
        dP_ ? "right-[0px]" : "right-[-500px]"
      } top-0 w-[450px] h-full justify-start items-center transition-all duration-300 p-4 pt-10`}
    >
      <div
        className={`w-full h-[150px] bg-white/20 backdrop-blur-lg rounded-[4px] shadow-md transition-all duration-300 relative overflow-hidden`}
        onClick={() => {
          setDP_(false);
        }}
      >
        <img
          src={
            tI_.image
          }
          className={`object-cover w-full h-full opacity-90 transition-all duration-100`}
        />
        <div className={`w-full h-full flex justify-center items-center absolute top-0`}>
        <div className={`w-full bg-white/10 backdrop-blur-md`}>
          <p className={`text-[18px] text-black/50  _inter capitalize backdrop-blur-sm font-black text-center pr-3`}>
            ..{
              tI_.category ?? tI_.category
            }
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDP_;
