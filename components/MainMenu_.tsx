import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrush,
  faCartShopping,
  faComments,
  faTractor,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import {
  CartTray,
  CartValue,
  MenuHoverItem,
  MenuTray,
  MenuTrayItem,
  NewNotif,
  StoreDP,
} from "../components/atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewNotif_, { NewNotifAlt_ } from "./NewNotif_";
import Branding_ from "./Branding_";

interface MainMenu_Props {}

const MainMenu_ = ({}: MainMenu_Props) => {
  const [mHI_, setMHI_] = useRecoilState(MenuHoverItem);
  const [mT_, setMT_] = useRecoilState(MenuTray);
  const [cT_, setCT_] = useRecoilState(CartTray);
  const [cV_, setCV_] = useRecoilState(CartValue);
  const [mTI_, setMTI_] = useRecoilState(MenuTrayItem);
  const [nN_, setNN_] = useRecoilState(NewNotif);
  const [dP_, setDP_] = useRecoilState(StoreDP);

  return (
    <div
      className={`flex flex-col w-[100px] h-full justify-center items-center relative bg-white shadow-md`}
    >
      <Branding_ customStyle={`absolute top-0`}/>
      <div
        className={`flex flex-col w-full h-[100px] justify-center items-center absolute top-6 p-4`}
      >
        <div
          className={`flex flex-col w-full h-full justify-center items-center bg-black/50 rounded-[4px] cursor-pointer`}
          onClick={() => {
            setMTI_("");
            setMT_(false);
          }}
        ></div>
      </div>
      
      <div
        className={`flex flex-col w-full min-h-[30px] justify-center items-center absolute bottom-6`}
      >
        <div
          className={`min-h-[20px] min-w-[20px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Logistics");
          }}
          onClick={() => {
            if (mTI_ == "Logistics") {
              setMT_(!mT_);
            } else {
              setMT_(true);
              setMTI_("Logistics");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faTractor}
            className={`h-[25px] w-[25px] ${
              mTI_ == "Logistics" ? "text-black/60" : "text-black/30"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
          {nN_.includes("Logistics" as never) ? <NewNotif_ /> : <div />}
        </div>
        <div
          className={`min-h-[25px] min-w-[25px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Equipment");
          }}
          onClick={() => {
            if (mTI_ == "Equipment") {
              setMT_(!mT_);
            } else {
              setMTI_("Equipment");
              setMT_(true);
            }
          }}
        >
          <FontAwesomeIcon
            icon={faWrench}
            className={`h-[22px] w-[22px] ${
              mTI_ == "Equipment" ? "text-black/60" : "text-black/30"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
          {nN_.includes("Equipment" as never) ? <NewNotif_ /> : <div />}
        </div>
        <div
          className={`min-h-[25px] min-w-[25px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Materials");
          }}
          onClick={() => {
            if (mTI_ == "Materials") {
              setMT_(!mT_);
            } else {
              setMT_(true);
              setMTI_("Materials");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faBrush}
            className={`h-[25px] w-[25px] ${
              mTI_ == "Materials" ? "text-black/60" : "text-black/30"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
          {nN_.includes("Materials" as never) ? <NewNotif_ /> : <div />}
        </div>
        <div
          className={`min-h-[25px] min-w-[25px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Consulting");
          }}
          onClick={() => {
            if (mTI_ == "Consulting") {
              setMT_(!mT_);
            } else {
              setMT_(true);
              setMTI_("Consulting");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faComments}
            className={`h-[25px] w-[25px] ${
              mTI_ == "Consulting" ? "text-black/60" : "text-black/30"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
          {nN_.includes("Consulting" as never) ? <NewNotif_ /> : <div />}
        </div>
        <div
          className={`min-h-[25px] min-w-[25px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Cart");
          }}
          onClick={() => {
            setCT_(!cT_);
          }}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`h-[25px] w-[25px] ${
              cT_ ? "text-black/60 animate-pulse" : "text-black/30"
            } ${
              dP_
                ? "opacity-50 pointer-events-none cursor-wait"
                : "opacity-100 pointer-events-auto"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}            
          />
          {cV_.length > 0 ? <NewNotifAlt_ /> : <div />}
        </div>

        <div className={`w-[50px] h-[1px] bg-black/20 my-4`} />

        <div
          className={`min-h-[20px] min-w-[20px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Facebook");
          }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={`h-[25px] w-[25px] text-black/30 hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
        </div>
        <div
          className={`min-h-[20px] min-w-[20px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Twitter");
          }}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={`h-[25px] w-[25px] text-black/30 hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
        </div>
        <div
          className={`min-h-[20px] min-w-[20px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Instagram");
          }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={`h-[25px] w-[25px] text-black/30 hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
};

export default MainMenu_;
