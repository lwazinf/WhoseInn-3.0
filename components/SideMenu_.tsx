import FirstMenu_ from "./SideMenu_/FirstMenu_";
import SecondMenu_ from "./SideMenu_/SecondMenu_";
import ThirdMenu_ from "./SideMenu_/ThirdMenu_";

interface SideMenu_Props {}

const SideMenu_ = ({}: SideMenu_Props) => {
  return (
    <div className={`min-w-[100px] m-h-2 overflow-hidden fixed left-0 top-0`}>
      <SecondMenu_ />
      <ThirdMenu_ />
      <FirstMenu_ />
    </div>
  );
};

export default SideMenu_;
