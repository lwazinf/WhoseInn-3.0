import type { NextPage } from "next";
import Head from "next/head";
import SideMenu_ from "../../components/SideMenu_";
import CenterStage_ from "../../components/pages/CenterStage_";
import { useRecoilState } from "recoil";
import { AddOn, MenuItem, MenuTrayItem, ScriptObjects } from "../../components/atoms/atoms";
import Archive_ from "../../components/pages/Archive_";
import Script_ from "../../components/pages/Script_";
import { useEffect } from "react";
import Podcasts_ from "../../components/pages/Podcasts_";

const Home: NextPage = () => {
  const [mTI_, setMTI_] = useRecoilState(MenuTrayItem);
  const [mI_, setMI_] = useRecoilState(MenuItem);
  const [addOn_, setAddOn_] = useRecoilState(AddOn);
  const [sO_, setSO_] = useRecoilState(ScriptObjects);
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Head>
        <title>Of Script - Create and share your portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full pl-[100px] min-h-[20px] flex-col items-center justify-center text-center relative overflow-scroll">
        <Archive_ />
        
        
        <SideMenu_ />
      </main>
    </div>
  );
};

export default Home;
