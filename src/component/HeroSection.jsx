const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] w-auto mt-3 max-w-[1292px] h-auto md:h-[530px] p-4 sm:p-6 md:p-12 lg:p-16 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mx-4 sm:mx-auto">
            {/* Text Section */}
            <div className="flex flex-col text-center md:text-left relative z-10">
                <div
                    className="bg-white inline-block px-3 py-2 mt-2 md:mt-3"
                    style={{ transform: "rotate(-1.74deg)" }}
                >
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Customize
                    </h1>
                </div>
                <div
                    className="inline-block px-3 py-2 mt-1"
                    style={{ transform: "rotate(-1.74deg)" }}
                >
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Anything
                    </h1>
                </div>
                <div
                    className="bg-[#FCEC02] inline-block px-3 py-2 mt-1"
                    style={{ transform: "rotate(-1.74deg)" }}
                >
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        we print it
                    </h1>
                </div>
                <p
                    className="text-[#191818] mt-3 md:mt-4 font-bold text-sm md:text-base lg:text-lg"
                    style={{ transform: "rotate(-1.24deg)" }}
                >
                    Apparel as your taste for your event, <br /> business, group, or team
                </p>
                <div
                    className="mt-5 md:mt-6 text-center"
                    style={{ transform: "rotate(-0.92deg)" }}
                >
                    <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base">
                        Start Designing
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative flex items-center justify-center w-full">
                {/* Decorative White Circle */}
                <div className="absolute top-[-3px] md:top-[-50px] lg:top-[-80px] w-[180px] h-[180px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-white rounded-full z-0" />
                {/* Image */}
                <img
                    src="/images/hero.png"
                    alt="Happy girl"
                    className="relative mt-4 w-[280px] md:w-[380px] lg:w-[505px] z-10"
                />
            </div>
        </div>
    );
};

export default HeroSection;
