import type { NextPage } from "next";
import Head from "next/head";
import CenterStage_ from "../components/CenterStage_";
import { useRecoilState } from "recoil";
import { AddOn, MenuItem, MenuTrayItem, ScriptObjects } from "../components/atoms/atoms";;

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Head>
        <title>Of Script - Create and share your portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full pl-[100px] min-h-[20px] flex-col items-center justify-center text-center relative overflow-scroll">
        <CenterStage_ />
      </main>
    </div>
  );
};

export default Home;
