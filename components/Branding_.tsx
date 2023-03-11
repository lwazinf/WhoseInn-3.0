interface Branding_Props {
    customStyle: string
}

const Branding_ = ({customStyle}: Branding_Props) => {
  return (
    <div
      className={`flex flex-col justify-start items-center h-full w-full pt-[130px] hover:pt-[133px] pr-[20px] opacity-50 hover:opacity-100 transition-all duration-[1000ms] hover:duration-200 ${customStyle}`}
    >
      <p
        className={`._inter min-h-0 font-black text-[40px] p-0 m-0 relative cursor-default text-black/50 transition-all duration-500 -rotate-90`}
      >
        INN
      </p>
      <p
        className={`._inter min-h-0 font-medium text-[40px] p-0 m-0 relative bottom-[-50px] cursor-default text-black/20 transition-all duration-500 -rotate-90`}
      >
        WHOSE
      </p>
      <p
        className={`._inter min-h-0 font-medium text-[20px] p-0 m-0 relative bottom-[114px] left-[30px] cursor-default text-black/20 transition-all duration-500 -rotate-90`}
      >
        .COM
      </p>
    </div>
  );
};

export default Branding_;
