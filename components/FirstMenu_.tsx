import MainMenu_ from "./MainMenu_";
import NavNotif_ from "./NavNotif_";

interface FirstMenu_Props {}

const FirstMenu_ = ({}: FirstMenu_Props) => {
  return (
    <div className={`flex w-full h-screen flex-col items-start justify-center`}>
      <MainMenu_ />
      <NavNotif_ bPad={`pb-[175px]`} data={["Script", "Podcasts", "Archive", "Messages"]} />
      <NavNotif_ bPad={`pb-6`} data={["Facebook", "Twitter", "Instagram"]} />
    </div>
  );
};

export default FirstMenu_;
