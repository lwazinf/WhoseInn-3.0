import { useRef, useState } from "react";
import { ScriptObjects } from "../atoms/atoms";
import { useRecoilState } from "recoil";

interface Image_Props {
  uuid_: string;
}

const Image_ = ({ uuid_ }: Image_Props) => {
  const [images_, setImages_] = useState<any>();
  const inputFile = useRef(null);
  const [sO_, setSO_] = useRecoilState(ScriptObjects);
  const onSelectFile = (e: { target: { files: any } }) => {
    const selectedFile = e.target.files;
    setImages_(selectedFile[0]);
  };
  return (
    <div
      className={`w-full min-h-[380px] opacity-70 rounded-[3px] flex flex-col justify-center items-center py-2 relative overflow-hidden transition-all duration-400 hover:duration-200 mb-2`}
    >
      <div
        className={`w-full h-full flex flex-row justify-start items-center bg-transparent`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center rounded-[3px] relative overflow-hidden cursor-pointer">
          <img
            src={`${
              images_
                ? sO_.filter((obj_) => {
                  return obj_.uid == uuid_;
                })[0].link : sO_.filter((obj_) => {
                  return obj_.uid == uuid_;
                })[0].link
            }`}
            className={`w-full h-[350px] object-cover rounded-[3px] opacity-90`}
            onClick={() => {
              // @ts-ignore
              inputFile.current.click();
            }}
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
  
              const index = sO_.findIndex((obj) => obj.uid == uuid_);
  
              const newArray = [...sO_];
  
              newArray[index] = {
                link:
                URL.createObjectURL(images_).toString(),
  
                primary: sO_.filter((obj_) => {
                  return obj_.uid == uuid_;
                })[0].primary,
  
                type: sO_.filter((obj_) => {
                  return obj_.uid == uuid_;
                })[0].type,
                
                uid: sO_.filter((obj_) => {
                  return obj_.uid == uuid_;
                })[0].uid,
              };
  
              setSO_(newArray);
            }}
            accept="image/png, image/jpeg, image/webp"
            style={{ display: "none" }}
          />
          <div
            className={`w-full h-[40px] rounded-[6px] flex flex-col justify-center items-center px-10 pt-6`}
          >
            <textarea
              className={`_inter text-[15px] text-center w-full font-thin text-black/50`}
              placeholder="This weapon has no ammunition, I use it as a hammer though!"
              onChange={(data_) => {
                const index = sO_.findIndex((obj) => obj.uid == uuid_);

                const newArray = [...sO_];
                newArray[index] = {
                  link: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].link,
                  primary: data_.target.value,
                  type: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].type,
                  uid: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].uid,
                };

                setSO_(newArray);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image_;
