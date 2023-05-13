import { useRecoilState } from "recoil";
import { ScriptObjects } from "../atoms/atoms";
import { uuid } from "uuidv4";
import { useEffect, useState } from "react";

interface Label_Props {
  uuid_: string;
  docLock_: boolean;
  docData_: any;
}

const Label_ = ({ uuid_, docLock_, docData_ }: Label_Props) => {
  const [sO_, setSO_] = useRecoilState(ScriptObjects);
  let [_sO, _setSO] = useState();
  // Object.assign({}, ...sO_, { uid: uid_, primary: "", secondary: "" })
  useEffect(() => {
    // setSO_([_sO])
  }, []);
  return (
    <div
      className={`w-full min-h-[80px] opacity-70 rounded-[3px] flex flex-col justify-center items-center py-2 relative overflow-hidden transition-all duration-400 hover:duration-200 mb-2`}
      onClick={() => {}}
    >
      <div
        className={`w-full h-[80px] rounded-[6px] flex flex-col justify-center items-center px-10`}
      >
        {docLock_ ? (
          <p
            className={`w-full bg-transparent min-h-0 text-[25px] font-black p-0 m-0 relative cursor-default text-black/50 transition-all duration-500 text-center`}
          >
            {
              docData_.primary
            }
          </p>
        ) : (
          <input
            type={`text`}
            className={`w-full bg-transparent min-h-0 text-[25px] font-black p-0 m-0 relative cursor-default text-black/50 transition-all duration-500 text-center`}
            placeholder={"Your incredibly creative title"}
            onChange={(data_) => {
              // @ts-ignore
              const index = sO_.findIndex((obj) => obj.uid == uuid_);

              const newArray = [...sO_];
              // @ts-ignore
              newArray[index] = {
                primary: data_.target.value,
                secondary: sO_.filter((obj_) => {
                  // @ts-ignore
                  return obj_.uid == uuid_;
                  // @ts-ignore
                })[0].secondary,
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
          />
        )}
      </div>
      <div
        className={`w-full max-h-[10px] rounded-[6px] flex flex-col justify-center items-center px-10`}
      >
        {docLock_ ? (
          <p
            className={`_inter text-[15px] text-center w-full font-thin text-black/50`}
          >
            {
              docData_.primary
            }
          </p>
        ) : (
          <textarea
          className={`_inter text-[15px] text-center w-full font-thin text-black/50`}
          placeholder="This weapon has no ammunition, I use it as a hammer though!"
          onChange={(data_) => {
            // @ts-ignore
            const index = sO_.findIndex((obj) => obj.uid == uuid_);

            const newArray = [...sO_];
            // @ts-ignore
            newArray[index] = {
              secondary: data_.target.value,
              primary: sO_.filter((obj_) => {
                // @ts-ignore
                return obj_.uid == uuid_;
                // @ts-ignore
              })[0].primary,
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
        />
        )}
        
      </div>
    </div>
  );
};

export default Label_;
