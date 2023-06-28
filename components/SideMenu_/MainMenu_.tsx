import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileArrowDown,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import {
  CartTray,
  CartValue,
  MenuHoverItem,
  MenuTray,
  MenuTrayItem,
  NewNotif,
} from "../atoms/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewNotif_ from "./NewNotif_";
import Branding_ from "./Branding_";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface MainMenu_Props {}

const MainMenu_ = ({}: MainMenu_Props) => {
  const [mHI_, setMHI_] = useRecoilState(MenuHoverItem);
  const [mT_, setMT_] = useRecoilState(MenuTray);
  const [cT_, setCT_] = useRecoilState(CartTray);
  const [cV_, setCV_] = useRecoilState(CartValue);
  const [mTI_, setMTI_] = useRecoilState(MenuTrayItem);
  const [nN_, setNN_] = useRecoilState(NewNotif);
  const [dP_, setDP_] = useState(true);
  const router = useRouter();
  const { query: _data } = router;

  const q = router.query;

  useEffect(() => {
    setMT_(false);
  }, [q]);

  return (
    <div
      className={`flex flex-col w-[100px] h-full justify-center items-center relative bg-white shadow-md`}
    >
      <Branding_ customStyle={`absolute top-0`} />

      <div
        className={`flex flex-col w-full min-h-[30px] justify-center items-center absolute bottom-6`}
      >
        
        <div
          className={`min-h-[25px] min-w-[25px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Narrate");
          }}
          onClick={() => {
            if (mTI_ == "Narrate") {
              router.push("/narrate");
              setMT_(false);
              setMTI_("Narrate");
            } else {
              setMT_(true);
              setMTI_("Narrate");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faWaveSquare}
            className={`h-[21px] w-[21px] ${
              mTI_ == "Narrate" ? "text-black/60" : "text-black/30"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
          {nN_.includes("Narrate" as never) ? <NewNotif_ /> : <div />}
        </div>
        {/* <div
          className={`min-h-[25px] min-w-[25px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Script");
          }}
          onClick={() => {
            if (
              router.pathname.replace("/", "").charAt(0).toUpperCase() +
                router.pathname.replace("/", "").slice(1) !=
              "Script"
            ) {
              setMTI_("Script");
              router.push("/script");
            } else {
              setMT_(!mT_);
            }
          }}
        >
          <FontAwesomeIcon
            icon={faPerson}
            className={`h-[22px] w-[22px] ${
              mTI_ == "Script" ? "text-black/60" : "text-black/30"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
          {nN_.includes("Script" as never) ? <NewNotif_ /> : <div />}
        </div> */}
        <div
          className={`min-h-[25px] min-w-[25px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Archive");
          }}
          onClick={() => {
            router.push("/archive");
            // if (mTI_ == "Archive") {
            //   router.push("/archive");
            //   setMT_(false);
            //   setMTI_(
            //     router.pathname.replace("/", "").charAt(0).toUpperCase() +
            //       router.pathname.replace("/", "").slice(1)
            //   );
            // } else {
            //   setMT_(true);
            //   setMTI_("Archive");
            // }
          }}
        >
          <FontAwesomeIcon
            icon={faFileArrowDown}
            className={`h-[25px] w-[25px] ${
              mTI_ == "Archive" ? "text-black/60" : "text-black/30"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
          {nN_.includes("Archive" as never) ? <NewNotif_ /> : <div />}
        </div>
        {/* <div
          className={`min-h-[25px] min-w-[25px] m-2 relative flex justify-center items-center`}
          onMouseLeave={() => {
            setMHI_("");
          }}
          onMouseEnter={() => {
            setMHI_("Messages");
          }}
          onClick={() => {
            setCT_(!cT_);
          }}
        >
          <FontAwesomeIcon
            icon={faCommenting}
            className={`h-[25px] w-[25px] ${
              cT_ ? "text-black/60 animate-pulse" : "text-black/30"
            } ${
              dP_
                ? "opacity-50 pointer-events-none cursor-wait"
                : "opacity-100 pointer-events-auto"
            } hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
          />
          {cV_.length > 0 ? <NewNotifAlt_ /> : <div />}
        </div> */}

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
          <a href={`https://twitter.com/ofscriptai`} target={`_blank`}>
            <FontAwesomeIcon
              icon={faTwitter}
              className={`h-[25px] w-[25px] text-black/30 hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
            />
          </a>
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
          <a href={`https://instagram.com/ofscriptai`} target={`_blank`}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={`h-[25px] w-[25px] text-black/30 hover:text-black/60 transition-all duration-[400ms] cursor-pointer`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainMenu_;
