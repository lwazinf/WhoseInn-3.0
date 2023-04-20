interface Modal_Props {}

const Modal_ = ({}: Modal_Props) => {
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm fixed top-0 right-0`}
    >
      <div
        className={`w-[820px] h-[400px] rounded-[4px] bg-white/90 backdrop-blur-md flex flex-row justify-start items-center relative overflow-hidden`}
      >
        <div className={`w-[520px] h-full relative overflow-hidden`}>
          <div className={`w-full h-full relative`}>
            <img
              src={`/assets/media/lambo.jpg`}
              className={`h-full object-cover`}
            />
            {/* <div className={`mix-blend-multiply absolute right-4 top-[180px]`} */}
            <p
              className={`_monts ml-[-20px] text-[58px] font-[700] text-white/80 hover:text-white absolute right-4 top-[300px] transition-all duration-200 cursor-pointer _federo mix-blend-overlay`}
            >
              WhoseInn
            </p>
            <p
              className={`_monts ml-[-20px] text-[40px] font-[700] text-white/50 hover:text-white absolute right-[-20px] top-[20px] transition-all duration-200 cursor-pointer _federo mix-blend-overlay`}
            >
              WhoseInn
            </p>
            <p
              className={`_monts ml-[-20px] text-[58px] font-[700] text-white/60 hover:text-white absolute left-[-10px] top-[42px] transition-all duration-200 cursor-pointer _federo mix-blend-overlay`}
            >
              WhoseInn
            </p>
          </div>
        </div>
        <div className={`w-[300px] h-full flex flex-col justify-center items-center p-4 relative overflow-hidden`}>
        
        <p
          className={`text-[20px] text-black/80 font-black text-center w-full mb-5`}
        >
          {
          // isSignIn_ ? 
            'Sign In'
            //  : "Sign Up"
          }
        </p>
        <p
          className={`text-[13px] text-black/50 font-medium text-left w-[215px]`}
        >
          E-Mail
        </p>
        <input
          type={'email'}
          placeholder={`email address..`}
          onChange={(obj) => {
            // setEmail_(obj.target.value);
          }}
          className={`bg-white/80 hover:bg-white rounded-[4px] m-2 mt-1 h-[35px] p-2 transition-all duration-400 font-thin`}
        />
        <p
          className={`text-[13px] text-black/50 font-medium text-left w-[215px] mt-1`}
        >
          Password
        </p>
        <input
          type={"password"}
          placeholder={`password..`}
          onChange={(obj) => {
            // setPassword_(obj.target.value);
          }}
          className={`bg-white/80 hover:bg-white rounded-[4px] m-2 h-[35px] p-2 transition-all duration-400 font-thin`}
        />

<div
          onChange={(obj) => {
            // setPassword_(obj.target.value);
          }}
          className={`w-[220px] bg-black/50 hover:bg-black/70 rounded-[4px] m-2 mt-6 h-[35px] flex flex-row justify-center items-center transition-all duration-400 _monts text-[14px] text-white/80 hover:text-white font-black cursor-pointer`}
        >
          Sign In
        </div>

        </div>
      </div>
      <span
        className={`text-[13px] text-white/50 _inter font-medium mr-auto text-center w-full mt-4 pointer-events-auto cursor-pointer`}
      >
        Forgot Password?
      </span>
    </div>
  );
};

export default Modal_;
