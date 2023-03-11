import type { NextPage } from "next";
import Head from "next/head";
import FirstMenu_ from "../components/FirstMenu_";
import SecondMenu_ from "../components/SecondMenu_";
import SideMenu_ from "../components/SideMenu_";
import CenterStage_ from "../components/CenterStage_";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Head>
        <title>WhoseInn Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full min-h-[20px] flex-col items-center justify-center text-center relative overflow-scroll">
        <CenterStage_ />
        <SideMenu_ />
      </main>
    </div>
  );
};

export default Home;
