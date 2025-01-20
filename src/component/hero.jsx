const Hero = () => {
    return (
      <div className="relative bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] w-full mt-3 h-auto md:h-[530px] p-6 md:p-12 lg:p-16 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative flex items-center justify-center w-full md:w-[50%] h-64 md:h-[530px] overflow-hidden">
          <img
            src="/images/hero1.png"
            alt="Happy girl"
            className="w-full h-full md:absolute md:top-20 md:left-20 object-contain md:object-cover"
          />
        </div>
  
        {/* Text Section */}
        <div className="flex flex-col text-center md:text-left w-full md:w-[40%] relative z-10">
          {/* Headings */}
          <div
            className="inline-block px-4 py-2 mt-3"
            style={{ transform: "rotate(-1.74deg)" }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
              Customizable
            </h1>
          </div>
          <div style={{ transform: "rotate(-1.74deg)" }}>
            <h1 className="bg-[#FCEC02] inline-block px-4 py-2 mt-1 text-3xl md:text-5xl lg:text-6xl font-extrabold">
              Hoodies for
            </h1>
          </div>
          <div
            className="inline-block px-4 py-2"
            style={{ transform: "rotate(-1.74deg)" }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
              Every Style
            </h1>
          </div>
          {/* Description */}
          <p
            className="text-[#191818] mt-5 font-bold text-base md:text-xl lg:text-2xl"
            style={{ transform: "rotate(-1.74deg)" }}
          >
            Your designs on comfy hoodies. Choose <br /> from vibrant colors for all seasons.
          </p>
          {/* Button */}
          <div
            className="mt-4"
            style={{ transform: "rotate(-1.74deg)", display: "inline-block" }}
          >
            <button className="bg-black text-white font-bold px-4 py-3 rounded-lg text-sm md:text-base">
              SHOP HOODIES
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  