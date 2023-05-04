import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { ScriptObjects } from "../atoms/atoms";

interface Profiles_Props {
  uuid_: string;
}

const Profiles_ = ({ uuid_ }: Profiles_Props) => {
  return (
    <div
      className={`w-full h-[180px] opacity-80 rounded-[3px] flex flex-col justify-center items-center p-6 px-4 relative overflow-hidden transition-all duration-400 hover:duration-200 mb-2`}
      onClick={() => {}}
    >
      <div
        className={`w-full min-h-2 flex flex-row justify-between items-center my-2`}
      >
        <Profile_ uuid_={uuid_} index_={0} />
        <Profile_ uuid_={uuid_} index_={1} />
      </div>
    </div>
  );
};

export default Profiles_;

// // // // // //

interface Profile_Props {
  index_: number;
  uuid_: string;
}

const Profile_ = ({ index_, uuid_ }: Profile_Props) => {
  const [images_, setImages_] = useState<any>();
  const [sO_, setSO_] = useRecoilState(ScriptObjects);
  const inputFile = useRef(null);
  const onSelectFile = (e: { target: { files: any } }) => {
    const selectedFile = e.target.files;
    setImages_(selectedFile[0]);
  };
  return (
    <div className={`flex flex-row items-center justify-start w-full h-full`}>
      <div
        className={`min-w-[100px] h-[100px] flex flex-col rounded-[4px] bg-black/30 hover:bg-black/10 transition-all duration-200 hover:duration-400 m-4 cursor-pointer`}
        onClick={() => {
          // @ts-ignore
          inputFile.current.click();
        }}
      >
        <img
          className={`h-full w-full object-cover opacity-90`}
          src={`${
            index_ == 0
                ? sO_.filter((obj_) => {
                        // @ts-ignore
                    return obj_.uid == uuid_;
                        // @ts-ignore
                  })[0].links[0]
                : sO_.filter((obj_) => {
                        // @ts-ignore
                    return obj_.uid == uuid_;
                        // @ts-ignore
                  })[0].links[1]
          }`}
        />
        <input
          type="file"
          id="file"
          ref={inputFile}
          onChange={(data_) => {
            const selectedFile = data_.target.files;
            if (selectedFile) {
              setImages_(selectedFile[0]);
            }

                        // @ts-ignore
            const index = sO_.findIndex((obj) => obj.uid == uuid_);

            const newArray = [...sO_];

                        // @ts-ignore
            newArray[index] = {
              links:
                index_ == 0
                  ? [
                      URL.createObjectURL(images_).toString(),
                      sO_.filter((obj_) => {
                        // @ts-ignore
                        return obj_.uid == uuid_;
                        // @ts-ignore
                      })[0].links[1],
                    ]
                  : [
                      sO_.filter((obj_) => {
                        // @ts-ignore
                        return obj_.uid == uuid_;
                        // @ts-ignore
                      })[0].links[0],
                      URL.createObjectURL(images_).toString(),
                    ],

              primary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].primary,

              secondary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].secondary,

              tertiary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].tertiary,

              type: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].type,
              uid: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].uid,
            };

            setSO_(newArray);
          }}
          accept="image/png, image/jpeg, image/webp"
          style={{ display: "none" }}
        />
      </div>
      <div className={`flex flex-col items-start justify-center w-full h-full`}>
        <input
          type={`text`}
          className={`bg-transparent min-h-0 text-[18px] font-black p-0 m-0 relative cursor-default text-black/50 transition-all duration-500 w-[50%] text-left pl-1`}
          placeholder="Trooper #2"
          onChange={(data_) => {
                        // @ts-ignore
            const index = sO_.findIndex((obj) => obj.uid == uuid_);

            const newArray = [...sO_];
                        // @ts-ignore
            newArray[index] = {
              links: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].links,
              primary:
                index_ == 0
                  ? [
                      data_.target.value,
                      sO_.filter((obj_) => {
                        // @ts-ignore
                        return obj_.uid == uuid_;
                        // @ts-ignore
                      })[0].primary[1],
                    ]
                  : [
                      sO_.filter((obj_) => {
                        // @ts-ignore
                        return obj_.uid == uuid_;
                        // @ts-ignore
                      })[0].primary[0],
                      data_.target.value,
                    ],

              secondary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].secondary,

              tertiary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].tertiary,

              type: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].type,
              uid: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].uid,
            };

            setSO_(newArray);

            // console.log()
          }}
        />
        <input
          type={`text`}
          className={`bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-red-500/70 transition-all duration-500 w-[50%] text-left pl-1`}
          placeholder="Trooper002@ofscript.ai"
          onChange={(data_) => {
                        // @ts-ignore
            const index = sO_.findIndex((obj) => obj.uid == uuid_);

            const newArray = [...sO_];
                        // @ts-ignore
            newArray[index] = {
              links: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].links,
              primary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].primary,

              secondary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].secondary,

              tertiary:
                index_ == 0
                  ? [
                      data_.target.value,
                      sO_.filter((obj_) => {
                        // @ts-ignore
                        return obj_.uid == uuid_;
                        // @ts-ignore
                      })[0].tertiary[1],
                    ]
                  : [
                      sO_.filter((obj_) => {
                        // @ts-ignore
                        return obj_.uid == uuid_;
                        // @ts-ignore
                      })[0].tertiary[0],
                      data_.target.value,
                    ],

              type: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].type,
              uid: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].uid,
            };

            setSO_(newArray);

            // console.log()
          }}
        />
        <textarea
          className={`_inter text-[14px] text-left w-full font-thin pl-1 text-black/50 mt-2`}
          placeholder="Who is this person to you? What can they tell us about you?"
          onChange={(data_) => {
                        // @ts-ignore
            const index = sO_.findIndex((obj) => obj.uid == uuid_);

            const newArray = [...sO_];
                        // @ts-ignore
            newArray[index] = {
              links: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].links,
              primary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].primary,

              tertiary: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].tertiary,

              secondary:
                index_ == 0
                  ? [
                      data_.target.value,
                      sO_.filter((obj_) => {
                        // @ts-ignore
                        return obj_.uid == uuid_;
                        // @ts-ignore
                      })[0].secondary[1],
                    ]
                  : [
                      sO_.filter((obj_) => {
                        // @ts-ignore
                        return obj_.uid == uuid_;
                        // @ts-ignore
                      })[0].secondary[0],
                      data_.target.value,
                    ],
              type: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].type,
              uid: sO_.filter((obj_) => {
                        // @ts-ignore
                return obj_.uid == uuid_;
                        // @ts-ignore
              })[0].uid,
            };

            setSO_(newArray);

            // console.log()
          }}
        />
      </div>
    </div>
  );
};
