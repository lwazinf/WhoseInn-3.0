import type { NextPage } from "next";
import Head from "next/head";
import SideMenu_ from "../components/SideMenu_";
import CenterStage_ from "../components/pages/CenterStage_";
import { useRecoilState } from "recoil";
import { MenuItem, MenuTrayItem } from "../components/atoms/atoms";
import Archive_ from "../components/pages/Archive_";
import Script_ from "../components/pages/Script_";
import { getOptions } from "../Firebase";
import { useEffect } from "react";
import Scripts_ from "../components/pages/Scripts_";

const Home: NextPage = () => {
  const [mTI_, setMTI_] = useRecoilState(MenuTrayItem);
  const [mI_, setMI_] = useRecoilState(MenuItem);

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
        )
      }
        <SideMenu_ />
      </main>
    </div>
  );
};

export default Home;
