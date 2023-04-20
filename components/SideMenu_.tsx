import FirstMenu_ from "./FirstMenu_";
import SecondMenu_ from "./SecondMenu_";
import StoreDP_ from "./StoreDP_";
import ThirdMenu_ from "./ThirdMenu_";

interface SideMenu_Props {}

const SideMenu_ = ({}: SideMenu_Props) => {
  return (
    <div className={`min-w-[100px] m-h-2 overflow-hidden fixed left-0 top-0`}>
      <SecondMenu_ />
      <ThirdMenu_ />
      <FirstMenu_ />
      <StoreDP_/>
    </div>
  );
};

export default SideMenu_;
