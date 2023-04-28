interface Archive_Props {}

export const Archive_ = ({}: Archive_Props) => {
  return (
    <div className={`w-full h-full flex flex-col justify-start items-center`}>
      <div
        className={`flex flex-col w-full h-[40px] hover:h-[50px] m-1 justify-center items-center bg-black/30 hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative`}
      >
        <div
          className={`flex flex-col justify-center items-center min-w-[5px] min-h-[5px] absolute right-2 p-[1px] px-[2px] bg-orange-500 rounded-[3px] text-[12px] font-black text-white/90`}
        >
          12
        </div>
      </div>
      <div
        className={`flex flex-col w-full h-[40px] hover:h-[50px] m-1 justify-center items-center bg-black/10 hover:bg-black/50 rounded-[4px] transition-all duration-[400ms] cursor-pointer relative`}
      ></div>
    </div>
  );
};