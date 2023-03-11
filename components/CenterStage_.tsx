interface CenterStage_Props {}

const CenterStage_ = ({}: CenterStage_Props) => {
  return (
    <div
      className={`w-[1200px] flex flex-col justify-start items-center relative`}
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
          // { image: "", id: 4 },
          // { image: "", id: 5 },
          // { image: "", id: 6 },
        ].map((obj_) => {
          return (
            <div
              className={`w-[350px] min-h-[250px] flex flex-col justify-center items-center`}
            >
              <div
                className={`w-[350px] h-[250px] flex flex-col justify-center items-center relative overflow-hidden rounded-[3px] bg-white/80 hover:bg-white backdrop-blur-lg transition-all duration-100 cursor-pointer`}
                key={obj_.id}
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
    </div>
  );
};

export default CenterStage_;
