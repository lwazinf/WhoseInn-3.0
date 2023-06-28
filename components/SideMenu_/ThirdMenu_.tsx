import { useRecoilState } from "recoil";
import { CartTray } from "../atoms/atoms";

interface ThirdMenu_Props {}

const ThirdMenu_ = ({}: ThirdMenu_Props) => {
  const [cT_, setCT_] = useRecoilState(CartTray);
  return (
    <div
      className={`flex flex-col fixed ${
        cT_ ? "right-[0px]" : "right-[-500px]"
      } top-0 w-[400px] h-full justify-start items-center bg-white/40 backdrop-blur-lg shadow-md transition-all duration-300`}
    >
      <div
        className={`flex flex-col w-full h-full justify-start items-center relative`}
      >
        <div
          className={`w-full h-full flex flex-col justify-start items-center px-[20px]`}
        >
          <div className={`w-[200px] h-[1px] bg-black/20 mb-2`} />
      </div>
      </div>
    </div>
  );
};

export default ThirdMenu_;
