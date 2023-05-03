import { useRecoilState } from "recoil";
import { ScriptObjects } from "../atoms/atoms";

interface Video_Props {
  uuid_: string;
}

const Video_ = ({ uuid_ }: Video_Props) => {
  const [sO_, setSO_] = useRecoilState(ScriptObjects);
  return (
    <div
      className={`w-full min-h-[380px] opacity-70 rounded-[3px] flex flex-col justify-center items-center py-2 relative overflow-hidden transition-all duration-400 hover:duration-200 mb-2`}
      onClick={() => {}}
    >
      <div
        className={`w-full h-full flex flex-row justify-start items-center bg-transparent`}
      >
        <div className="w-full h-full flex flex-row justify-center items-center rounded-[3px] relative overflow-hidden">
          <video
            src="https://player.vimeo.com/external/178167299.sd.mp4?s=7b8659225e3202c779718a4a0d5a88df9801037e&profile_id=164&oauth2_token_id=57447761"
            className="min-w-[680px] h-full object-cover rounded-[3px]"
            autoPlay
            controls
          ></video>
          <div
            className={`w-full h-full flex flex-col justify-center items-center pl-6`}
          >
            <p
              className={`bg-transparent min-h-0 w-full text-[15px] font-black p-0 m-0 mb-[-4px] relative cursor-default text-red-500 transition-all duration-500 text-left`}
            >
              Candidate's Pick
            </p>
            <input
              type={`text`}
              className={`w-full bg-transparent min-h-0 text-[25px] font-black p-0 m-0 relative cursor-default text-black/50 transition-all duration-500 text-left`}
              placeholder="Starship Launch, last May."
              onChange={(data_) => {
                const index = sO_.findIndex((obj) => obj.uid == uuid_);

                const newArray = [...sO_];
                (newArray[index] = {
                  primary: data_.target.value,
                  secondary: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].secondary,
                  link: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].link,
                  type: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].type,
                  uid: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].uid,
                }),
                  setSO_(newArray);
              }}
            />
            <textarea
              className={`_inter text-[14px] text-left w-full mt-4 font-thin text-black/50`}
              placeholder="Who is this person to you? What can they tell us about you?"
              onChange={(data_) => {
                const index = sO_.findIndex((obj) => obj.uid == uuid_);

                const newArray = [...sO_];
                (newArray[index] = {
                  secondary: data_.target.value,
                  primary: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].primary,
                  link: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].link,
                  type: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].type,
                  uid: sO_.filter((obj_) => {
                    return obj_.uid == uuid_;
                  })[0].uid,
                }),
                  setSO_(newArray);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video_;
