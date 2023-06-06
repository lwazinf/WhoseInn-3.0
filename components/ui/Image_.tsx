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
  function base64ToFile(base64DataUrl, fileName) {
    const byteString = atob(base64DataUrl.split(',')[1]); // Remove the data:image/jpeg;base64 part
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    
    const blob = new Blob([ab], { type: 'image/jpeg' }); // Set the appropriate MIME type
    return new File([blob], fileName, { type: 'image/jpeg' });
  }
  const data___ = sO_.filter((obj_) => {
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
              data___ != 'https://via.placeholder.com/500' ? URL.createObjectURL(base64ToFile(data_, "image.jpg")) : data___
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
                        // @ts-ignore
                        link: data_.target.files[0], // Use the result from FileReader as the link
                      // @ts-ignore
                        primary: sO_.filter((obj_) => obj_.uid == uuid_)[0].primary,
                      // @ts-ignore
                        type: sO_.filter((obj_) => obj_.uid == uuid_)[0].type,
                      // @ts-ignore
                        uid: sO_.filter((obj_) => obj_.uid == uuid_)[0].uid,
                      };
              
                      resolve(newArray);
                    };
                    // reader.readAsDataURL(images_[0]);
                  });
              
                  promise.then((newArray) => {
                    // @ts-ignore
                    setSO_(newArray); 
                  });
                  console.log(data_.target.files[0])
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
                placeholder="Long smart quote.."
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
