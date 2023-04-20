interface CenterStage_Props {}

const CenterStage_ = ({}: CenterStage_Props) => {
  return (
    <div
      className={`w-[1200px] flex flex-col justify-start items-center relative mb-12`}
    >
      <div
        className={`w-[1082px] h-[350px] bg-black/50 mb-4 rounded-[4px] relative overflow-hidden mt-11`}
      >
        <div
          className={`w-full min-h-[350px] bg-black/50 mb-4 relative bottom-[330px]`}
        >
          <img
            src={
              "https://images.pexels.com/photos/10410019/pexels-photo-10410019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            className={`object-cover w-full h-full opacity-100 transition-all duration-100`}
          />
          <div
            className={`w-[150px] h-[40px] bg-white/70 hover:bg-white/90 flex flex-row justify-center items-center relative bottom-[111px] left-[50px] text-black/80 rounded-[4px] p-1 cursor-pointer transition-all duration-200 backdrop-blur-lg`}
          >
            <p className={`text-[14px] font-black `}>Access Now</p>
          </div>
          <div
            className={`w-[150px] h-[40px] bg-transparent hover:bg-white/70 border-[1px] border-solid border-white/20 flex flex-row justify-center items-center relative bottom-[150px] left-[210px] rounded-[4px] p-1 cursor-pointer transition-all duration-200 backdrop-blur-lg text-white/50 hover:text-black/80`}
          >
            <p className={`text-[14px] font-black transition-all duration-200`}>
              Learn More
            </p>
          </div>

          <div
            className={`w-[370px] h-[150px] absolute bottom-[220px] left-[50px] pointer-events-none`}
          >
            <p
              className={`_inter text-[60px] text-left text-white/50 font-medium tracking-[-4px] relative top-[10px] right-[0px]`}
            >
              WHOSE
            </p>
            <p
              className={`_inter text-[60px] text-left text-white/80 font-black absolute bottom-[50px] left-[208px]`}
            >
              INN
            </p>
            <p
              className={`_inter text-[29px] text-left text-white/70 font-serif tracking-[1px] absolute bottom-[32px] left-[211px]`}
            >
              Mining
            </p>
            <p
              className={`_inter text-[15px] text-justify text-white/90 w-[310px] font-serif italic relative top-[35px] right-[0px]`}
            >
              No Need to Dig Deep: Unearth Top Mining Contractors & Equipment
              with ease!
            </p>
          </div>
        </div>
      </div>
      <p
        className={`mb-2 ._monts text-center text-[25px] font-black text-black/80`}
      >
        Discover the right service providers for your business.
      </p>
      <div
        className={`md:min-w-2 md:min-h-2 grid grid-cols-3 gap-[16px] justify-items-center items-start`}
      >
        {[
          {
            image:
              "https://images.pexels.com/photos/2449454/pexels-photo-2449454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            id: 1,
            heading: "Logistics",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at augue eget justo rhoncus dignissim. Nullam gravida risus sed libero facilisis, ac convallis lacus molestie. Sed sit amet arcu risus. Fusce consectetur, nisi ac ullamcorper posuere, quam metus iaculis augue, vel elementum risus sapien id risus. ",
          },
          {
            image:
              "https://images.pexels.com/photos/4946889/pexels-photo-4946889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            id: 2,
            heading: "Mining",
            description:
              "Sed et iaculis. Donec vel pulvinar nunc. Sed semper nulla sed felis lobortis rhoncus. Aliquam erat volutpat. In porttitor neque dolor, ac sodales purus bibendum id. Praesent lobortis, nisi in imperdiet hendrerit, odio lectus faucibus tellus, at pharetra quis erat. Morbi venenatis dolor eget dui facilisis, id semper metus iaculis.",
          },
          {
            image:
              "https://images.pexels.com/photos/261621/pexels-photo-261621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            id: 3,
            heading: "Professional Services",
            description:
              "Proin ac ultricies lacus. Ut fringilla ex non nulla eleifend scelerisque. In hac habitasse platea dictumst. Proin vel lectus tincidunt, fringilla quam non, mollis metus. Donec sit amet tincidunt odio. Vestibulum euismod aliquet odio, ut congue ex bibendum eget. Nam elementum pretium dolor, eget bibendum lacus maximus et.",
          },
        ].map((obj_) => {
          return (
            <div
              className={`w-[350px] min-h-[250px] flex flex-col justify-center items-center`}
              key={obj_.id}
            >
              <div
                className={`w-[350px] h-[250px] flex flex-col justify-center items-center relative overflow-hidden rounded-[3px] bg-white/80 hover:bg-white backdrop-blur-lg transition-all duration-100 cursor-pointer`}
              >
                <img
                  src={obj_.image}
                  className={`object-cover w-full h-full opacity-100 transition-all duration-100`}
                />
              </div>
              <p
                className={`relative top-4 ._monts text-center text-[20px] font-medium text-black/60`}
              >
                {obj_.heading}
              </p>
              <p
                className={`relative top-4 ._inter text-justify text-[14px] font-medium text-black/40 px-3`}
              >
                {obj_.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className={`w-[1200px] flex flex-row justify-center items-center relative`}>
      <div className={`w-[400px] h-full bg-blue-100 flex flex-row justify-center items-center relative`}>
        <img src={`/assets/images/MSH.png`} className={`w-[500px] absolute top-0 left-0 object-contain`}/>
        </div>
        <img src={`/assets/images/N4CF.png`} className={`w-[600px] object-cover ml-[-50px] my-[-100px]`}/>
      </div>
    </div>
  );
};

export default CenterStage_;
