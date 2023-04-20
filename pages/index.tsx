import type { NextPage } from "next";
import Head from "next/head";
import SideMenu_ from "../components/SideMenu_";
import CenterStage_ from "../components/CenterStage_";
import { useRecoilState } from "recoil";
import { MenuItem, MenuTrayItem } from "../components/atoms/atoms";
import Messages_ from "../components/Messages_";
import Products_ from "../components/Products_";
import { getOptions } from "../Firebase";
import { useEffect } from "react";
import Modal_ from "../components/Modal_";

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
        <title>WhoseInn Mining</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full min-h-[20px] flex-col items-center justify-center text-center relative overflow-scroll">
        {mTI_ == "" ? (
          <CenterStage_ />
        ) : mTI_ == "Consulting" ? (
          <Messages_ />
        ) : mTI_ == "Materials" ? (
          <Products_ />
        ) : (
          <div className={``} />
        )}

        {/* <Modal_/> */}

        <SideMenu_ />
      </main>
    </div>
  );
};

export default Home;
