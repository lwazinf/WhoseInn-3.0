import {
  faLock,
  faRobot,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import QRCode from "react-qr-code";
import { doc, updateDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { useRecoilState } from "recoil";
import { Loading, mapObjectAtom } from "./atoms/atoms";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface Archive_Props {
  data: any;
  gptSpin: string;
}

const Archive_ = ({ data, gptSpin }: Archive_Props) => {
  const [prompt_, setPrompt_] = useState("");
  const [loading_, setLoading_] = useRecoilState(Loading);
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(data)
  }, [])

  const router = useRouter();
  const reloadPage = () => {
    router.reload();
  };

  const update_ = async (dataUpdate: any) => {
    const documentRef = doc(db, "leads", data.uid);
    try {
      await updateDoc(documentRef, dataUpdate);
      setLoading_(false);
      reloadPage();
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const processDoc = () => {
    if (!data.prepared) {
      handleProcess();
    }
  };

  async function handleProcess() {
    if (!data.prepared) {
      setLoading_(true);
      try {
        const emailScript = await fetch(
          "/api/chatGPT?prompt=" +
            encodeURIComponent(
              `${
                (data.data?.name, data.data?.category, data.data?.locations, data.data?.overview)
              } write a short cold email script, selling a website`
            )
        );
        const overviewScript = await fetch(
          "/api/chatGPT?prompt=" +
            encodeURIComponent(
              `${
                (data.data?.name, data.data?.category, data.data?.locations, data.data?.overview)
              } write a short overview on this business as a lead`
            )
        );
        const callScript = await fetch(
          "/api/chatGPT?prompt=" +
            encodeURIComponent(
              `${
                (data.data?.name, data.data?.category, data.data?.locations, data.data?.overview)
              } write a short cold call script, selling a website`
            )
        );
        const overviewBody = await overviewScript.json();
        const callBody = await callScript.json();
        const emailBody = await emailScript.json();

        data.generated.overview = overviewBody.quote;
        data.generated.cold_email = emailBody.quote;
        data.generated.cold_call = callBody.quote;
        data.prepared = true;

        update_(data);
      } catch (error) {
        setLoading_(false);
        console.error(error);
        // setQuoteLoadingError(true);
      } finally {
        // setQuoteLoading(false);
      }
    }
  }

  async function handleSubmit(prompt: string) {
    const content_ = data.content;

    if (prompt) {
      setLoading_(true);
      try {
        const response = await fetch(
          "/api/chatGPT?prompt=" + encodeURIComponent(prompt.replace("#", ""))
        );
        const body = await response.json();
        const currentDate = new Date();
        const sastOffset = 4 * 60; // Offset in minutes

        currentDate.setMinutes(
          currentDate.getMinutes() +
            currentDate.getTimezoneOffset() +
            sastOffset
        );
        const sastTimeString = currentDate.toUTCString();
        data.content = [
          ...content_,
          ...[
            {
              type: "OneCell",
              H0: sastTimeString,
              H1: prompt_.split("#")[1],
              P1: body.quote,
              uid: v4(),
              author: "Lwazi Ndlovu",
            },
          ],
        ];
        // console.log(data);
        update_(data);
      } catch (error) {
        setLoading_(false);
        console.error(error);
        // setQuoteLoadingError(true);
      } finally {
        // setQuoteLoading(false);
      }
    }
  }

  const defaultData = [
    {
      type: "twoCell",
      H1: "Company Name",
      H2: "Email",
      P1: data.data?.name,
      P2: data.data?.email,
    },
    {
      type: "twoCell",
      H1: "Website",
      H2: "Number",
      P1: "https://" + data.data?.website,
      P2: data.data?.number,
    },
    {
      type: "twoCell",
      H1: "Category",
      H2: "Locations",
      P1: data.data?.category?.charAt(0).toUpperCase() + data.data?.category?.slice(1),
      P2: data.data?.locations,
    },
    {
      type: "twoCell",
      H1: "Industry",
      H2: "Type",
      P1: data.data?.industry?.charAt(0).toUpperCase() + data.data?.industry?.slice(1),
      P2: data.data?.type?.charAt(0).toUpperCase() + data.data?.type?.slice(1),
    },
    {
      type: "OneCell",
      H1: "Overview (Supervisor)",
      P1: data.data?.overview,
    },
    {
      type: "OneCell",
      H1: "Overview (AI)",
      P1: data.generated?.overview,
    },
    {
      type: "OneCell",
      H1: "Cold Call Script",
      P1: data.generated?.cold_call,
    },
    {
      type: "OneCell",
      H1: "Email Script",
      P1: data.generated?.cold_email,
    },
  ];

  return (
    <div
      className={`min-w-[800px] min-h-2 flex flex-row justify-center items-start relative mb-12 mx-auto`}
    >
      {data?.prepared ? (
        <div
          className={`min-w-[120px] bg-white/90 rounded-[4px] shadow-lg flex flex-col justify-start items-center p-3 pt-8 mt-8 relative transition-all duration-[400ms] ${
            data?.prepared
              ? "opacity-100 pointer-events-auto min-h-2"
              : "opacity-0 pointer-events-none h-0"
          }`}
        >
          <div
            className={`duration-[200ms] transition-all ${
              data ? "opacity-100" : "opacity-0"
            }`}
          >
            {[1].map((obj_, index) => {
              return <Lead_ data={data} key={index} />;
            })}
          </div>
          <div
            className={`w-[800px] min-h-[400px] ${
              data ? "opacity-50" : "opacity-0"
            } mt-2 pt-4 pb-4 bg-black/5 rounded-[4px] flex flex-col justify-start items-center relative overflow-hidden transition-all duration-[800ms] hover:duration-200`}
            onClick={() => {
              // setAddOn_(true);
            }}
          >
            <div
              className={`duration-[200ms] transition-all ${
                data ? "opacity-100" : "opacity-0"
              }`}
            >
              {data && (
                <QRCode
                  className={`w-[185px] h-[185px] absolute top-6 left-8 mix-blend-multiply`}
                  value={"http://ofscript.ai/archive/" + data.data?.uid}
                />
              )}
            </div>
            {defaultData.map((obj_, index) => {
              if (obj_.type == "twoCell") {
                return (
                  <TwoCell_
                    edit={false}
                    headings={false}
                    H1={obj_.H1}
                    // @ts-ignore
                    H2={obj_.H2}
                    P1={obj_.P1}
                    P2={obj_.P2}
                    width_={`w-[68%]`}
                    key={index}
                  />
                );
              } else {
                return (
                  <OneCell_
                    edit={false}
                    headings={false}
                    H1={obj_.H1}
                    P1={obj_.P1}
                    key={index}
                  />
                );
              }
            })}
            <div
              className={`w-[93%] min-h-[100px] flex flex-col justify-center items-center my-3`}
            >
              <p
                className={`_Inter text-[14px] text-black font-black w-full text-left ml-1 mb-1`}
              >
                Attachments
              </p>
              <div
                className={`w-full h-[100px] flex flex-row justify-between items-center`}
              >
                {
                    // @ts-ignore
                    data.attachments?.map((obj__, index) => {
                  return (
                    <div
                      className={`flex flex-row justify-center items-center rounded-[3px] h-full w-[178px] mx-1 bg-black/20 hover:bg-black/80 transition-all duration-200 cursor-pointer`}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className={`${
              data.content?.length == 0
                ? "w-0 mt-0 pt-0 pb-0"
                : "w-[800px] mt-2 pt-4 pb-4"
            } min-h-[20px] ${
              data ? "opacity-50" : "opacity-0"
            } bg-black/0 rounded-[4px] flex flex-col justify-start items-center relative overflow-hidden transition-all duration-[800ms] hover:duration-200`}
            onClick={() => {
              // setAddOn_(true);
            }}
          >
            {
                    // @ts-ignore
                    data.content?.map((obj_, index) => {
              return <NoteCell_ data={data} obj={obj_} gptSpin={gptSpin} key={index} />;
            })}
          </div>
          <div
            className={`w-[800px] min-h-[100px] mt-2 pt-4 pb-4 bg-black/5 opacity-50 rounded-[3px] flex flex-col justify-start items-center relative overflow-hidden transition-all duration-400 hover:duration-200`}
            onClick={() => {
              // setAddOn_(true);
            }}
          >
            <div
              className={`absolute top-0 left-0 rounded-[4px] shadow-md p-4 px-8 w-full h-full`}
            >
              <div className={`w-full h-[100px]`}>
                <textarea
                  className={`_inter text-[15px] text-start w-full h-full bg-transparent font-thin text-black/50 mt-2`}
                  placeholder="Add a note to this.."
                  onChange={(obj_) => {
                    setPrompt_(gptSpin + "#" + obj_.target.value);
                  }}
                />
              </div>
            </div>
            <div
              className={`absolute right-[30px] bottom-[18px] rounded-[3px] shadow-md w-[42px] h-[18px] flex flex-col justify-center items-center text-[13px] pointer-events-none text-white transition-all duration-500 bg-red-600 ${
                loading_ && "animate-ping opavity-20"
              }`}
              onClick={() => {}}
            ></div>
            <div
              className={`absolute right-3 bottom-3 rounded-[4px] shadow-md w-[80px] h-[30px] flex flex-col justify-center items-center text-[13px] cursor-pointer text-white transition-all duration-500 bg-red-600 ${
                loading_ && "animate-pulse"
              }`}
              onClick={() => {
                if (!loading_) {
                  handleSubmit(prompt_);
                }
                    // @ts-ignore
                // console.log(session?.user.name);
              }}
            >
              {loading_ ? "Hold Up" : "Process"}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`w-full min-h-screen absolute top-0 rounded-[4px] shadow-lg flex flex-col justify-center items-center transition-all duration-[400ms] ${
            !data?.prepared
              ? "opacity-100 pointer-events-auto min-h-2"
              : "opacity-0 pointer-events-none h-0"
          }`}
        >
          <div
            className={`w-[550px] h-[250px] bg-white rounded-[4px] shadow-md flex flex-col justify-center items-center`}
          >
            <div
              className={`w-full h-full flex flex-col justify-center items-center relative`}
            >
              <div
                className={`absolute right-[30px] bottom-[18px] rounded-[3px] shadow-md w-[42px] h-[18px] flex flex-col justify-center items-center text-[13px] pointer-events-none text-white transition-all duration-500 bg-red-600 ${
                  loading_ && "animate-ping opavity-20"
                }`}
                onClick={() => {}}
              />
              <div
                className={`absolute right-3 bottom-3 rounded-[4px] shadow-md w-[80px] h-[30px] flex flex-col justify-center items-center text-[13px] cursor-pointer text-white transition-all duration-500 bg-red-600 ${
                  loading_ && "animate-pulse"
                }`}
                onClick={() => {
                  if (!loading_) {
                    processDoc();
                  }
                }}
              >
                {loading_ ? "Hold Up" : "Process"}
              </div>
              <FontAwesomeIcon
                icon={faLock}
                className={`h-[60px] w-[60px] text-black/5 opacity-50 transition-all duration-[400ms]`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive_;

interface Lead_Props {
  data: any;
}

const Lead_ = ({ data }: Lead_Props) => {
  const [email_, setEmail_] = useState("");
  const [phone_, setPhone_] = useState("");
  const [website_, setWebsite_] = useState("");
  const [linkedIn_, setLinkedIn_] = useState("");
  const [twitter_, setTwitter_] = useState("");
  const [instagram_, setInstagram_] = useState("");

  const date_ = new Date(data.created?.seconds).toUTCString();

  // console.log(useAuth());

  // console.log(
  //   data.name?.toUpperCase().split(' ').map((obj_) => {
  //     return obj_[0]
  //   }).join('')
  // )

  return (
    <div
      className={`w-[800px] h-[180px] mt-2 bg-black/5 opacity-90 rounded-[4px] flex flex-col justify-center items-center p-6 px-14 relative overflow-visible mb-5 cursor-default duration-200 transition-all`}
    >
      <div
        className={`w-full h-full flex flex-col justify-center items-center absolute top-0 rounded-[4px]`}
      >
        <img
          src={`/assets/images/bazooka.jpg`}
          className={`w-full h-full object-cover opacity-20 rounded-[4px]`}
        />
        <div
          className={`w-full h-full absolute transition-all ${
            data.status ? "greenAir" : "redAir"
          } rounded-[4px]`}
        >
          <p
            className={`font-black text-[80px] h-full leading-tight text-white/30 absolute left-[30px] -rotate-90`}
          >
            {data.name
              ?.toUpperCase()
              .split(" ")
                    // @ts-ignore
              .map((obj_) => {
                return obj_[0];
              })
              .join("")}
          </p>
        </div>
        <div className={`w-full h-full absolute transition-all rounded-[4px]`}>
          <div
            className={`w-full h-full bg-white/30 backdrop-blur-lg flex flex-col relative overflow-hidden justify-center items-center rounded-[4px]`}
          >
            <p
              className={`font-black text-[30px] leading-tight text-black/70 tracking-tight relative top-2 right-[100px] mix-blend-multiply`}
            >
              {data.name?.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-[50%] h-[50%] ${
          data.status ? "bg-green-600" : "bg-red-600"
        } ml-auto mr-[80px] flex flex-row justify-start items-center my-2`}
      >
        {/* <div
              className={`flex flex-row items-center justify-start w-[50%] h-full mt-auto`}
            >
              <FontAwesomeIcon
                icon={faAt}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                placeholder="you@server.com"
                onChange={(obj_) => {
                  setEmail_(obj_.target.value);
                }}
              />
            </div>
            <div
              className={`flex flex-row items-center justify-center w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faPhone}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 hover:text-black/60 transition-all duration-500 w-[50%] text-left pl-1`}
                placeholder="000-000-0000"
                onChange={(obj_) => {
                  setPhone_(obj_.target.value);
                }}
              />
            </div> */}
      </div>

      <div
        className={`w-[50%] h-[50%] ${
          data.status ? "bg-green-600" : "bg-red-600"
        } ml-auto mr-[80px] flex flex-row justify-start items-center my-2`}
      >
        {/* <div
              className={`flex flex-row items-center justify-start w-[50%] h-full mt-auto`}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                onChange={(data_) => {
                  setLinkedIn_(data_.target.value);
                }}
                placeholder="username"
              />
            </div>
            <div
              className={`flex flex-row items-center justify-center w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                onChange={(data_) => {
                  setTwitter_(data_.target.value);
                }}
                placeholder="username"
              />
            </div> */}
      </div>

      <div
        className={`w-[50%] h-[50%] ${
          data.status ? "bg-green-600" : "bg-red-600"
        } ml-auto mr-[80px] flex flex-row justify-start items-center my-2`}
      >
        {/* <div
              className={`flex flex-row items-center justify-start w-[50%] h-full mt-auto`}
            >
              <FontAwesomeIcon
                icon={faGlobeAfrica}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                placeholder="ofscript.ai"
                onChange={(obj_) => {
                  setWebsite_(obj_.target.value);
                }}
              />
            </div>
            <div
              className={`flex flex-row items-center justify-center w-full h-full`}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={`h-[20px] w-[20px] mr-4 text-black/70 hover:text-black/60 ml-2 transition-all duration-[400ms] cursor-pointer`}
              />
              <input
                type={`text`}
                className={`_inter bg-transparent min-h-0 text-[15px] font-medium p-0 m-0 relative cursor-default text-black/40 transition-all duration-500 w-[50%] text-left pl-1`}
                onChange={(data_) => {
                  setInstagram_(data_.target.value);
                }}
                placeholder="username"
              />
            </div> */}
      </div>
      {/* <div
        className={`absolute right-[-50px] h-full w-[40px] flex flex-col justify-center items-center`}
      >
        <FontAwesomeIcon
          icon={faLocation}
          className={`h-[20px] w-[20px] text-black/40 hover:ml-6 hover:text-black/60 m-4 my-2 mr-6 transition-all duration-[400ms] cursor-pointer`}
        />
        <FontAwesomeIcon
          icon={faRobot}
          className={`h-[20px] w-[20px] text-black/40 hover:ml-6 hover:text-black/60 m-4 my-2 mr-6 transition-all duration-[400ms] cursor-pointer`}
        />
        <FontAwesomeIcon
          icon={faInfoCircle}
          className={`h-[20px] w-[20px] text-black/40 hover:ml-6 hover:text-black/60 m-4 my-2 mr-6 transition-all duration-[400ms] cursor-pointer`}
        />
      </div> */}
      <div
        className={`absolute right-[50px] h-full w-[40px] flex flex-col justify-center items-center opacity-70`}
      >
        <div
          className={`text-[13px] text-black/60 -rotate-90 w-[180px] text-center relative right-[30px]`}
        >
          <p className={`font-black text-[37px] text-black/80 relative top-2`}>
            {date_?.split(" ")[4]?.substring(0, 5)}
          </p>{" "}
          {date_.split(" ")[1]} {date_.split(" ")[2]},{" "}
          {date_.split(" ")[0].substring(0, 3)} {date_.split(" ")[3]}
          <p
            className={`text-[13px] font-bold leading-tight text-black/50 tracking-tight`}
          >
            {data.author?.toUpperCase()}
          </p>
        </div>
      </div>
      {/* <div
            className={`absolute bottom-[-40px] w-full h-[40px] flex flex-col text-right text-[13px] opacity-50 justify-center items-center`}
          >
            Service - Mining and Construction
          </div>
          <div
            className={`absolute bottom-[-60px] w-full h-[40px] flex flex-col justify-center items-center text-[15px] opacity-70 font-medium`}
          >
            IVORY TOWER GROUP
          </div> */}
    </div>
  );
};

interface TwoCell_Props {
  H1: string;
  P1: string;
  H2: string;
  P2: string;
  width_: string;
  edit: boolean;
  headings: boolean;
}

export const TwoCell_ = ({
  H1,
  H2,
  P1,
  P2,
  width_,
  edit,
  headings,
}: TwoCell_Props) => {
  const [mapObject, setMapObject] = useRecoilState(mapObjectAtom);
  const handleInputChange0 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedMapObject = {
      ...mapObject,
      [H1]: e.target.value,
    };
    setMapObject(updatedMapObject);
  };
  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedMapObject = {
      ...mapObject,
      [H2]: e.target.value,
    };
    setMapObject(updatedMapObject);
  };
  return (
    <div
      className={`${width_} h-[50px] flex flex-row ml-auto mr-12 justify-center items-center`}
    >
      <div
        className={`w-full h-full flex flex-col justify-start items-start pl-8`}
      >
        {edit && !headings ? (
          <input
            placeholder={H1}
            type="text"
            className={`_Inter text-[14px] text-black font-black`}
          />
        ) : (
          <p className={`_Inter text-[14px] text-black font-black`}>{H1}</p>
        )}
        {edit ? (
          <input
            placeholder={H1}
            onChange={(e) => {
              handleInputChange0(e);
            }}
            value={mapObject[H1]}
            type="text"
            id={`${H1.replace(' ', '')}`}
            className={`_Inter text-[13px] text-black/50`}
          />
        ) : (
          <p className={`_Inter text-[13px] text-black/50`}>{P1}</p>
        )}
      </div>
      <div
        className={`w-full h-full flex flex-col justify-start items-start pl-8`}
      >
        {edit && !headings ? (
          <input
            placeholder={H2}
            type="text"
            className={`_Inter text-[14px] text-black font-black`}
          />
        ) : (
          <p className={`_Inter text-[14px] text-black font-black`}>{H2}</p>
        )}
        {edit ? (
          <input
            placeholder={H2}
            value={mapObject[H2]}
            onChange={(e) => {
              handleInputChange1(e);
            }}
            type="text"
            id={`${H2.replace(' ', '')}`}
            className={`_Inter text-[13px] text-black/50`}
          />
        ) : (
          <p className={`_Inter text-[13px] text-black/50`}>{P2}</p>
        )}
      </div>
    </div>
  );
};

interface OneCell_Props {
  H1: string;
  P1: string;
  edit: boolean;
  headings: boolean;
}

export const OneCell_ = ({ H1, P1, edit, headings }: OneCell_Props) => {
  const [mapObject, setMapObject] = useRecoilState(mapObjectAtom);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedMapObject = {
      ...mapObject,
      [H1]: e.target.value,
    };
    setMapObject(updatedMapObject);
  };

  return (
    <div
      className={`w-full min-h-[50px] flex flex-row justify-center items-center my-1`}
    >
      <div
        className={`w-full h-full flex flex-col justify-start items-start px-8`}
      >
        {edit && !headings ? (
          <input
            placeholder={H1}
            type="text"
            className={`_Inter text-[14px] text-black font-black`}
            value={mapObject[H1]}
            onChange={(e) => handleInputChange(e)}
          />
        ) : (
          <p className={`_Inter text-[14px] text-black font-black`}>{H1}</p>
        )}
        {edit ? (
          <input
            placeholder={H1}
            type="text"
            className={`_Inter text-[13px] text-black/50 text-left`}
            value={mapObject[H1]}
            id={`${H1.replace(' ', '')}`}
            onChange={(e) => handleInputChange(e)}
          />
        ) : (
          <p className={`_Inter text-[13px] text-black/50 text-left`}>{P1}</p>
        )}
      </div>
    </div>
  );
};

interface NoteCell_Props {
  obj: any;
  data: any;
  gptSpin: string;
}

// @ts-ignore
const NoteCell_ = ({ obj, data, gptSpin }) => {
  const router = useRouter();
  const reloadPage = () => {
    router.reload();
  };
  // @ts-ignore
  const update_ = async (dataUpdate) => {
    const documentRef = doc(db, "leads", data.uid);
    try {
      await updateDoc(documentRef, dataUpdate);
      // console.log("Document successfully updated!");
      reloadPage()
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
  return (
    <div className="w-full min-h-[50px] flex flex-row justify-center items-center my-2">
      <div className="w-full h-full flex flex-col justify-center items-start px-8">
        <div className="_Inter w-full flex flex-row text-[13px] italic text-black mb-2 ml-[0px]">
          {obj.H0?.slice(0, 22)}{" "}
          <p className="_Inter text-[13px] italic text-black/50 ml-1">
            - {obj.author}
          </p>
          <FontAwesomeIcon
            icon={faTrash}
            className="h-[13px] w-[13px] ml-2 mt-1 text-red-600/50 hover:text-red-600 cursor-pointer transition-all duration-[400ms]"
            onClick={() => {
              // @ts-ignore
              data.content = data.content.filter((obj_) => {
                return obj_.uid !== obj.uid;
              });
              update_(data);
            }}
          />
        </div>
        <p className="_Inter text-[14px] text-black font-black">
          <FontAwesomeIcon
            icon={faUser}
            className="h-[15px] w-[15px] mr-2 text-black/50 transition-all duration-[400ms]"
          />{" "}
          {obj.H1}
        </p>
        <p className="_Inter text-[13px] text-black/50 text-left">
          <FontAwesomeIcon
            icon={faRobot}
            className="h-[15px] w-[15px] mr-2 text-black/50 transition-all duration-[400ms]"
          />{" "}
          {obj.P1}
        </p>
      </div>
    </div>
  );
};

