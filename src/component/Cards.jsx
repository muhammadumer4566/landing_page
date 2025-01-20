const Cards = () => {
  return (
    <div className="py-10 px-4 sm:px-5">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* First Section */}
        <div className="overflow-hidden">
          <div className="relative">
            <img
              src="/images/card.png"
              alt="Playful"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
          <div className="p-4 sm:p-6">
            {/* Heading and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Playful Kids Custom <br /> Apparel
              </h3>
              <button className="px-4 py-2 text-sm md:text-base text-white bg-black rounded">
                SHOP KIDS WEAR ➡
              </button>
            </div>
            {/* Text */}
            <p className="text-black text-base sm:text-lg">
              Fun, personalized clothing for little adventurers. <br /> From capes to caps.*
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="overflow-hidden">
          <div className="relative">
            <img
              src="/images/card1.png"
              alt="tops"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>
          <div className="p-4 sm:p-6">
            {/* Heading and Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Personalized Tees <br /> & Tops
              </h3>
              <button className="px-4 py-2 text-sm md:text-base text-white bg-black rounded">
                SHOP YOUR TOP ➡
              </button>
            </div>
            {/* Text */}
            <p className="text-black text-base sm:text-lg">
              Your art on tees, tanks, and long-sleeves. <br /> Multiple colors available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
