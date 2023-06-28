import type { NextPage } from "next";
import Head from "next/head";
import SideMenu_ from "../../components/SideMenu_";
import { useRecoilState } from "recoil";
import {
  AddOn,
  CurrentIndex,
  ListPosition,
  mapObjectAtom,
} from "../../components/atoms/atoms";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faAngleLeft,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";

const placeholders_ = {
  name: "400px",
  email: "300px",
  website: "200px",
  number: "100px",
  category: "0px",
  locations: "-100px",
  industry: "-200px",
  type: "-300px",
  overview: "-400px",
};

const placeholders = [
  "Name",
  "Email",
  "Website",
  "Number",
  "Category",
  "Locations",
  "Industry",
  "Type",
  "Overview",
];

const Home: NextPage = () => {
  const [mapObject, setMapObject] = useRecoilState(mapObjectAtom);
  const [currentIndex, setCurrentIndex] = useRecoilState<number>(CurrentIndex);
  const { data: session, status } = useSession();
  const currentUser_name = session?.user?.name;

  useEffect(() => {
    setMapObject({
      prepared: false,
      uid: "",
      created: "",
      author: "",
      data: {
        name: "",
        email: "",
        website: "",
        number: "",
        category: "",
        locations: "",
        industry: "",
        type: "",
        overview: "",
        attachments: [],
      },
      generated: {
        overview: "",
        cold_call: "",
        cold_email: "",
        conversation: [],
      },
    });
  }, []);

  const [currentDisplay, setCurrentDisplay] = useRecoilState(ListPosition);
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Head>
        <title>Of Script - Create and share your portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full pl-[100px] min-h-screen flex-col items-center justify-center text-center relative overflow-scroll">
        {session?.user?.name && (
          <p
            className={`mt-8 mb-4 ${
              session?.user?.name ? "opacity-100" : "opacity-0"
            } duration-500 transition-all font-medium text-[14px] italic text-black/50 flex flex-row`}
          >
            Currently editing as{" "}
            <p className={`text-red-600 ml-1`}>
              <div
                onClick={() => {
                  console.log(mapObject);
                }}
              >
                {currentUser_name}
              </div>
            </p>
            ..
          </p>
        )}
        <CreateLead_ />
        <div className={`w-[300px] flex flex-col justify-center items-center`}>
          <div
            className={`rounded-[4px] shadow-md w-[80px] h-[30px] flex flex-col justify-center items-center text-[13px] cursor-pointer text-white transition-all duration-500 bg-red-600 mt-4 mb-[-10px] ml-auto`}
            onClick={() => {
              
              console.log(mapObject);
            }}
          >
            Process
          </div>
        </div>
        <p className={`mt-8 font-medium text-[14px] italic text-black/50`}>
          Your recently created leads..
        </p>
        <div className="grid grid-cols-2 gap-8 gap-y-0">
          {/* {leads.map((lead, index) => (
            <Lead_ key={index} {...lead} />
            ))} */}
          <Lead_ />
          <Lead_ />
          <Lead_ />
          <Lead_ />
        </div>
        <div
          className={`flex flex-row items-center justify-center relative mt-4 text-black/50 hover:text-red-600/60 transition-all duration-[400ms] cursor-pointer`}
        >
          <FontAwesomeIcon
            icon={faAdd}
            className={`h-[15px] w-[15px] `}
            onClick={() => {}}
          />
          <p className={`font-medium text-[12px] relative ml-2`}>
            Add New Lead
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;

interface Lead_Props {}

const Lead_ = ({}: Lead_Props) => {
  return (
    <div
      className={`bg-white/50 flex flex-row items-center justify-center w-[300px] h-[100px] m-4 relative rounded-[3px] transition-all duration-[800ms] hover:bg-white`}
    >
      <div
        className={`flex flex-row items-center justify-center w-full h-full relative p-[4px] cursor-pointer transition-all duration-[800ms] opacity-50 hover:opacity-80`}
      >
        <QRCode
          className={`w-[92px] h-[92px] rounded-[4px] mix-blend-multiply transition-all duration-500 `}
          value={""}
          onClick={() => {
            // console.log(element)
          }}
        />
        <div
          className={`flex flex-col items-center justify-center w-[208px] h-[80px] relative p-[4px] rounded-[6px]`}
        >
          <div
            className={`min-w-0 min-h-0 flex flex-col justify-center items-center absolute right-[-35px] top-0`}
          >
            <FontAwesomeIcon
              icon={faAnglesRight}
              className={`h-[20px] w-[20px] mt-1 text-black/50 animate-pulse hover:text-red-600/60 cursor-pointer transition-all duration-[400ms]`}
              onClick={() => {}}
            />
          </div>
          <div
            className={`flex flex-row items-center justify-center relative right-2`}
          >
            <p className={`font-black text-black/80 text-[15px] m-[2px] mb-4`}>
              Ivory Tower Group
            </p>
          </div>
          <div
            className={`flex flex-row items-center justify-center relative right-2`}
          >
            <p
              className={`font-medium text-black/80 text-[13px] relative ml-[6px]`}
            >
              Simon Ericsson
            </p>
            <p className={`text-black/50 text-[12px] relative ml-[6px] italic`}>
              - CFO
            </p>
          </div>
          <p
            className={`font-medium text-black/50 text-[12px] relative ml-[6px] right-2`}
          >
            {/* 14 Sep 2022, 05:30 */}
            Bloemfontein, Free State
          </p>
        </div>
      </div>
    </div>
  );
};

interface CreateLead_Props {}

const CreateLead_ = ({}: CreateLead_Props) => {
  const [mapObject, setMapObject] = useRecoilState(mapObjectAtom);
  return (
    <div
      className={`w-[500px] h-[100px] bg-white/90 rounded-[4px] shadow-md flex flex-row justify-start items-center relative`}
      onClick={() => {}}
    >
      <QRCode
        className={`w-[92px] h-[92px] rounded-[4px] mix-blend-multiply transition-all duration-500 absolute top-1 left-1 opacity-90`}
        value={mapObject["Company Name"] ? mapObject["Company Name"] : ""}
        onClick={() => {
          // console.log(element)
        }}
      />
      <div
        className={`w-full h-full flex flex-col justify-center items-center`}
      >
        <SequentialQuestionnaire />
      </div>
    </div>
  );
};

interface SequentialQuestionnaireprops {}

const SequentialQuestionnaire = ({}: SequentialQuestionnaireprops) => {
  const [inputs, setInputs] = useState<string[]>([""]);
  const [currentDisplay, setCurrentDisplay] = useRecoilState(ListPosition);
  const [mapObject, setMapObject] = useRecoilState(mapObjectAtom);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const [currentIndex, setCurrentIndex] = useRecoilState<number>(CurrentIndex);

  useEffect(() => {
    const element = document.getElementById(placeholders[0].replace(" ", ""));
    element?.focus();
  }, []);

  const handlePrevious = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setCurrentIndex(previousIndex);
      const element = document.getElementById(
        placeholders[previousIndex].replace(" ", "")
      );
      if (element) {
        element.focus();
      }
    }
  };

  useEffect(() => {
    const element = inputRefs.current[currentIndex];
    if (element) {
      element.focus();
    }
  }, [currentIndex]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fieldName = placeholders[index].toLowerCase().replace(" ", "");
    // setInputs((prevInputs) => {
    //   const updatedInputs = [...prevInputs];
    //   updatedInputs[index] = e.target.value;
    //   return updatedInputs;
    // });

    setMapObject((prevMapObject) => {
      const updatedData = {
        ...prevMapObject.data,
        [fieldName]: e.target.value,
      };
      return {
        ...prevMapObject,
        data: updatedData,
      };
    });

    // Check if arrow keys (left or right) were pressed
    if (
      e.nativeEvent.code === "ArrowLeft" ||
      e.nativeEvent.code === "ArrowRight"
    ) {
      e.preventDefault();

      if (e.nativeEvent.code === "ArrowLeft") {
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 0) {
          setCurrentIndex(previousIndex);
          const element = document.getElementById(
            placeholders[previousIndex].replace(" ", "")
          );
          if (element) {
            element.focus();
          }
        }
      } else if (e.nativeEvent.code === "ArrowRight") {
        const nextIndex = currentIndex + 1;
        if (nextIndex < placeholders.length) {
          setCurrentIndex(nextIndex);
          const element = document.getElementById(
            placeholders[nextIndex].replace(" ", "")
          );
          if (element) {
            element.focus();
          }
        }
      }
    }
  };

  const handleEnterKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.shiftKey) {
      // Handle the case when both Enter and Shift keys are pressed together
      const previousIndex = currentIndex - 1;
      if (previousIndex >= 0) {
        setCurrentIndex(previousIndex);
        const element = document.getElementById(
          placeholders[previousIndex].replace(" ", "")
        );
        if (element) {
          element.focus();
        }
      }
    } else if (e.key === "Enter") {
      const nextIndex = currentIndex + 1;
      if (nextIndex < placeholders.length) {
        setCurrentIndex(nextIndex);
        const element = document.getElementById(
          placeholders[nextIndex].replace(" ", "")
        );
        if (element) {
          element.focus();
        }
      } else {
        // Reached the end of the list
        // Perform any necessary actions or handle the end state
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-start w-full">
      <div
        className={`min-w-0 min-h-0 flex flex-col justify-center items-center absolute right-[-35px]`}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`h-[20px] w-[20px] mt-1 text-black/70 animate-pulse hover:text-red-600/90 cursor-pointer transition-all duration-[400ms]`}
          onClick={() => {
            const nextIndex = currentIndex + 1;
            if (nextIndex < placeholders.length - 1) {
              setCurrentDisplay(
                placeholders_[placeholders[nextIndex].toLowerCase()]
              );
            }

            if (nextIndex < placeholders.length) {
              setCurrentIndex(nextIndex);
              const element = document.getElementById(
                placeholders[nextIndex].replace(" ", "")
              );
              if (element) {
                element.focus();
              }
            }
          }}
        />
      </div>
      <div
        className={`min-w-0 min-h-0 flex flex-col justify-center items-center absolute left-[-35px]`}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`h-[20px] w-[20px] mt-1 text-black/70 animate-pulse hover:text-red-600/90 cursor-pointer transition-all duration-[400ms]`}
          onClick={() => {
            const previousIndex = currentIndex - 1;

            if (currentIndex != 0) {
              setCurrentDisplay(
                placeholders_[placeholders[previousIndex].toLowerCase()]
              );
            }
            if (previousIndex >= 0) {
              setCurrentIndex(previousIndex);
              const element = document.getElementById(
                placeholders[previousIndex].replace(" ", "")
              );
              if (element) {
                element.focus();
              }
            }
          }}
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center min-w-full ml-auto max-h-[100px]`}
      >
        <div
          className={`flex flex-col justify-center items-center w-full relative top-[${currentDisplay}] transition-all duration-500 min-h-[100px]`}
        >
          {placeholders.map((placeholder, index) => {
  const isCurrentIndex = index === currentIndex;
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-[100px]`}
      style={{ opacity: isCurrentIndex ? 1 : 0.5 }}
    >
      <input
        ref={(ref) => {
          inputRefs.current[index] = ref;
          if (isCurrentIndex && ref) {
            ref.focus();
          }
        }}
        type="text"
        placeholder={placeholder}
        // value={}
        key={index}
        onChange={(e) => {
          handleInputChange(e, index);
        }}
        onKeyPress={(e) => handleEnterKey(e, index)}
        className={`_inter text-center w-full text-black/90 font-black text-[18px]`}
      />
    </div>
  );
})}
        </div>
      </div>
    </div>
  );
};
