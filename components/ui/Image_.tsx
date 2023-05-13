import { useRef, useState } from "react";
import { ScriptObjects } from "../atoms/atoms";
import { useRecoilState } from "recoil";

interface Image_Props {
  uuid_: string;
  docLock_: boolean;
  docData_: any;
}

const Image_ = ({ uuid_, docLock_, docData_ }: Image_Props) => {
  const [images_, setImages_] = useState<any>();
  const inputFile = useRef(null);
  const [sO_, setSO_] = useRecoilState(ScriptObjects);
  const onSelectFile = (e: { target: { files: any } }) => {
    const selectedFile = e.target.files;
    setImages_(selectedFile);
  };
  const data_ = sO_.filter((obj_) => {
    // @ts-ignore
    return obj_.uid == uuid_;
    // @ts-ignore
  })[0].link
  return (
    <div
      className={`w-full min-h-[380px] opacity-70 rounded-[3px] flex flex-col justify-center items-center py-2 relative overflow-hidden transition-all duration-400 hover:duration-200 mb-2`}
    >
      <div
        className={`w-full h-full flex flex-row justify-start items-center bg-transparent`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center rounded-[3px] relative overflow-hidden "
        onClick={() => {
          // @ts-ignore
          !docLock_ && inputFile.current.click();
        }}>
          {docLock_ ? (
            <img
              src={`${docData_.link}`}
              className={`w-full h-[350px] object-cover rounded-[3px] opacity-90`}
              onClick={() => {}}
            />
          ) : (
            <img
            src={`${
              typeof data_ != 'string' ? URL.createObjectURL(data_) : data_
            }`}
              className={`w-full h-[350px] object-cover rounded-[3px] opacity-90 cursor-pointer`}
              
            />
          )}
          {!docLock_ && (
            <input
              type="file"
              id="file"
              ref={inputFile}
              onChange={(data_) => {
                setImages_(data_.target.files);
                // @ts-ignore
                const index = sO_.findIndex((obj) => obj.uid == uuid_);
              
                const newArray = [...sO_];
              
                if (images_) {
                  const promise = new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      // @ts-ignore
                      newArray[index] = {
                        link: e.target.result, // Use the result from FileReader as the link
                        primary: sO_.filter((obj_) => obj_.uid == uuid_)[0].primary,
                        type: sO_.filter((obj_) => obj_.uid == uuid_)[0].type,
                        uid: sO_.filter((obj_) => obj_.uid == uuid_)[0].uid,
                      };
              
                      resolve(newArray);
                    };
                    reader.readAsDataURL(images_[0]);
                  });
              
                  promise.then((newArray) => {
                    // @ts-ignore
                    setSO_(newArray);
                  });
                }
              }}
              
              accept="image/png, image/jpeg, image/webp"
              style={{ display: "none" }}
            />
          )}
          <div
            className={`w-full h-[40px] rounded-[6px] flex flex-col justify-center items-center px-10 pt-6`}
          >
            {docLock_ ? (
              <p
                className={`_inter text-[15px] text-center w-full font-thin text-black/50`}
              >
                {docData_.primary}
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
                    link: sO_.filter((obj_) => {
                      // @ts-ignore
                      return obj_.uid == uuid_;
                      // @ts-ignore
                    })[0].link,
                    primary: data_.target.value,
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
      </div>
    </div>
  );
};

export default Image_;
