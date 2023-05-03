import type { NextPage } from "next";
import Head from "next/head";
import SideMenu_ from "../components/SideMenu_";
import CenterStage_ from "../components/pages/CenterStage_";
import { useRecoilState } from "recoil";
import { AddOn, MenuItem, MenuTrayItem, ScriptObjects } from "../components/atoms/atoms";
import Archive_ from "../components/pages/Archive_";
import Script_ from "../components/pages/Script_";
import { getOptions } from "../Firebase";
import { useEffect } from "react";
import Scripts_ from "../components/pages/Scripts_";

const Home: NextPage = () => {
  const [mTI_, setMTI_] = useRecoilState(MenuTrayItem);
  const [mI_, setMI_] = useRecoilState(MenuItem);
  const [addOn_, setAddOn_] = useRecoilState(AddOn);
  const [sO_, setSO_] = useRecoilState(ScriptObjects);

  useEffect(() => {
    const y_ = async () => {
      const x_: any = await getOptions();
      // @ts-ignore
      // setCache_(x_);
      setMI_(x_);
    };
    y_();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Head>
        <title>Of Script - Create and share your portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full pl-[100px] min-h-[20px] flex-col items-center justify-center text-center relative overflow-scroll">
        {mTI_ == "" ? (
          <CenterStage_ />
        ) : mTI_ == "Archive" ? (
          <Archive_ />
        ) : mTI_ == "Script" ? (
          <Script_ />
        ) : mTI_ == "Scripts" ? (
          <Scripts_ />
        ) : (
          <div className={``} />
        )}
        {/* <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/5 backdrop-blur-md flex flex-col justify-center items-center ${
            addOn_
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } transition-all duration-200`}
          onClick={() => {
            
          }}
        >
          <div className={`w-[800px] min-h-[400px] bg-white rounded-[4px] p-6 grid grid-cols-2 gap-2 justify-start items-start`}>
            
            {
              ['blank', 'video', 'single', 'label'].map((obj_) => {
                return (
                  <div
              className={`w-full h-full bg-black/5 hover:bg-black/20 transition-all duration-700 hover:duration-200 rounded-[2px] flex flex-row justify-center items-center cursor-pointer mb-2`}
              key={obj_}
              onClick={() => {
                const _x = sO_;
                setSO_(_x.concat([{type: obj_}]));
                setAddOn_(false);
              }}
            ></div>
                )
              })
            }
          </div>
        </div> */}
        <SideMenu_ />
      </main>
    </div>
  );
};

export default Home;
