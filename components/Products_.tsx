import { useRecoilState } from "recoil";
import { MenuItem, TagInfo } from "./atoms/atoms";

interface Products_Props {}

const Products_ = ({}: Products_Props) => {
  const [mI_, setMI_] = useRecoilState(MenuItem);
  const [tI_, setTI_] = useRecoilState(TagInfo);
  return (
    <div
      className={`w-[1200px] min-h-screen flex flex-col justify-start items-center relative mt-10`}
    >
      <div
        className={`w-[1000px] h-[500px] flex flex-row justify-center items-center`}
      >
        <div
          className={`w-[500px] h-[500px] flex flex-row justify-center items-center rounded-[2px] p-1 m-1 relative overflow-hidden`}
        >
          <img
            src={tI_?.grid ? 'https://via.placeholder.com/1000' : 'https://via.placeholder.com/500'}
            className={`w-full h-full object-cover absolute top-0 right-0`}
          />
        </div>
        <div
          className={`w-[500px] h-[500px] flex flex-col justify-center items-center m-1`}
        >
          <div
            className={`w-[500px] h-[250px] flex flex-row justify-center items-center`}
          >
            <div
              className={`w-[250px] h-[250px] flex flex-row justify-center items-center rounded-[2px] pr-1 mr-1 pb-1 mb-1 mt-1 pt-1 relative overflow-hidden`}
            >
              <img
                src={tI_?.grid ? 'https://via.placeholder.com/1000' : 'https://via.placeholder.com/500'}
                className={`w-full h-full object-cover absolute top-0 right-0`}
              />
            </div>
            <div
              className={`w-[250px] h-[250px] flex flex-row justify-center items-center rounded-[2px] pl-1 ml-1 pb-1 mb-1 mt-1 pt-1 relative overflow-hidden`}
            >
              <img
                src={tI_?.grid ? 'https://via.placeholder.com/1000' : 'https://via.placeholder.com/500'}
                className={`w-full h-full object-cover absolute top-0 right-0`}
              />
            </div>
          </div>
          <div
            className={`w-[500px] h-[250px] flex flex-row justify-center items-center rounded-[2px] pt-2 mt-2 relative overflow-hidden`}
          >
            <img
                src={tI_?.grid ? 'https://via.placeholder.com/1000' : 'https://via.placeholder.com/500'}
                className={`w-full h-full object-cover absolute top-0 right-0`}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products_;
