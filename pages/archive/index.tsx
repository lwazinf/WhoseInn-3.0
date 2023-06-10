import type { NextPage } from "next";
import Head from "next/head";
import SideMenu_ from "../../components/SideMenu_";
import CenterStage_ from "../../components/pages/CenterStage_";
import { useRecoilState } from "recoil";
import {
  AddOn,
  MenuItem,
  MenuTrayItem,
  ScriptObjects,
} from "../../components/atoms/atoms";
import Archive_ from "../../components/pages/Archive_";
import Script_ from "../../components/pages/Script_";
import { useEffect, useState } from "react";
import Podcasts_ from "../../components/pages/Podcasts_";

const Home: NextPage = () => {
  const [mTI_, setMTI_] = useRecoilState(MenuTrayItem);
  const [mI_, setMI_] = useRecoilState(MenuItem);
  const [addOn_, setAddOn_] = useRecoilState(AddOn);
  const [sO_, setSO_] = useRecoilState(ScriptObjects);

  const [OBJs_, setOBJs_] = useState([
    { data: "Mapping", id_: "input0" },
    { data: "Tapping", id_: "input1" },
  ]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Head>
        <title>Of Script - Create and share your portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full pl-[100px] min-h-[20px] flex-col items-center justify-center text-center relative overflow-scrol">
        {/* <Archive_ /> */}
        {["Name of Company", "Question #2"].map((obj_, idx) => {
          return (
            <div
              className={`w-full min-h-screen flex flex-row justify-center items-center relative`}
              key={idx}
            >
              <div
                className={`min-w-[524px] min-h-[350px] bg-white/90 rounded-[0px] flex flex-row justify-start items-center p-3 relative`}
                onClick={() => {
                }}
              >
                <div
                  className={`w-full h-[40px] absolute top-[-9px] left-0 flex flex-row justify-between items-start px-[4px]`}
                >
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                </div>
                <div
                  className={`w-full h-[40px] absolute bottom-[-30px] left-0 flex flex-row justify-between items-start px-[4px]`}
                >
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                  <div className={`bg-white/90 w-4 h-4 rotate-45`} />
                </div>
                {/* <img
                  src={`/assets/images/helmet.jpg`}
                  className={`w-[550px] h-[400px] object-cover mr-2 rounded-[2px]`}
                /> */}
                <div
                  className={`w-full h-full flex flex-col justify-center mt-auto mb-12 items-center`}
                >
                  {/* <p className={`w-[350px] text-black/50 text-[14px] pb-2`}>
                    {obj_}
                  </p> */}
                  {OBJs_.map((obj_, idx) => {
                    return (
                      <input
                        type={`text`}
                        key={idx}
                        id={OBJs_.id_}
                        className={`_inter text-center w-full text-black/90 font-black text-[18px]`}
                        placeholder={obj_.data}
                        onClick={() => {
                          setOBJs_([
                            { data: "Mapping", id_: "input0" },
                            { data: "Tapping", id_: "input1" },
                          ]);
                        }}
                        onChange={(obj_) => {
                          // setQuote_(obj_.target.value);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <SideMenu_ />
      </main>
    </div>
  );
};

export default Home;
