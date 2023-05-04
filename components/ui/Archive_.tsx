import { useRecoilState } from "recoil";
import { MenuTray, ScriptObjects } from "../atoms/atoms";
import { uuid } from "uuidv4";

interface Archive_Props {}

export const Archive_ = ({}: Archive_Props) => {
  const [sO_, setSO_] = useRecoilState(ScriptObjects);
  const [mT_, setMT_] = useRecoilState(MenuTray);
  return (
    <div className={`w-full h-full flex flex-col justify-start items-center`}>
      {[
        { type: "Profiles", active: 8 },
        { type: "Video Player", active: 3 },
        { type: "Image", active: 2 },
        { type: "Label", active: 2 },
      ].map((obj_) => {
        return (
          <div
            className={`flex flex-col w-full h-[40px] hover:h-[50px] m-1 justify-center items-center bg-black/10 hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative text-black/50 hover:text-white/90`}
            key={obj_.type}
            onClick={() => {
              const _x = sO_;
              const x__ = uuid()
              // @ts-ignore
              if (obj_.type == "Profiles") {
                setSO_(
                  _x.concat([
                        // @ts-ignore
                    {
                      type: obj_.type,
                      primary: ["", ""],
                      secondary: ["", ""],
                      tertiary: ["", ""],
                      links: [
                        "https://via.placeholder.com/500",
                        "https://via.placeholder.com/500",
                      ],
                      uid: x__,
                    },
                  ])
                );
              } else if (obj_.type == "Video Player") {
                setSO_(
                  _x.concat([
                        // @ts-ignore
                    { type: obj_.type, link: "", primary: "", secondary: "", uid: x__ },
                  ])
                );
              } else if (obj_.type == "Image") {
                setSO_(
                  _x.concat([
                        // @ts-ignore
                    {
                      type: obj_.type,
                      link: "https://via.placeholder.com/500",
                      primary: "",
                      uid: x__
                    },
                  ])
                );
              } else if (obj_.type == "Label") {
                setSO_(
                        // @ts-ignore
                  _x.concat([{ type: obj_.type, primary: "", secondary: "", uid: x__ }])
                );
              }
              setMT_(false);
            }}
          >
            <p className={`_inter text-[15px] font-black`}>{obj_.type}</p>
            <div
              className={`flex flex-col justify-center items-center min-w-[5px] min-h-[5px] absolute right-2 p-[1px] px-[4px] bg-red-500 rounded-[2px] text-[12px] font-black text-white/90 opacity-80`}
            >
              {obj_.active}
            </div>
          </div>
        );
      })}
      {/* <div
        className={`flex flex-col w-full h-[40px] hover:h-[50px] m-1 justify-center items-center bg-black/30 hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative`}
      >
        <div
          className={`flex flex-col justify-center items-center min-w-[5px] min-h-[5px] absolute right-2 p-[1px] px-[2px] bg-orange-500 rounded-[3px] text-[12px] font-black text-white/90`}
        >
          12
        </div>
      </div> */}
      {/* <div
        className={`flex flex-col w-full h-[40px] hover:h-[50px] m-1 justify-center items-center bg-black/10 hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative`}
      ></div> */}
    </div>
  );
};
