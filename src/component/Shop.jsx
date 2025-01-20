const Shop = () => {
  return (
    <div className="w-full py-10 mt-6 bg-[#DCFCFF] flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-8 px-4">
        {/* Title Section */}
        <h3 className="text-3xl md:text-5xl font-extrabold text-center">
          Shop Our Top Categories
        </h3>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-3">
          {/* First Column */}
          <div className="flex flex-col gap-4">
            <div className="relative group">
              <img
                src="/images/hats.png"
                alt="Hats"
                className="w-[353px] h-[213px] object-cover"
              />
              <button className="absolute bottom-4 left-12 transform -translate-x-1/2 bg-white px-4 py-1 shadow-lg font-bold text-black text-sm transition-transform">
                HATS
              </button>
            </div>
            <div className="relative group">
              <img
                src="/images/men.png"
                alt="Men"
                className="w-[353px] h-[446px] object-cover"
              />
              <button className="absolute bottom-4 left-20 transform -translate-x-1/2 bg-white px-4 py-1 shadow-lg font-bold text-black text-sm transition-transform">
                MEN-UNISEX
              </button>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4">
            <div className="relative group">
              <img
                src="/images/women.png"
                alt="Women"
                className="w-[436px] h-[440px] object-cover"
              />
              <button className="absolute bottom-4 left-16 transform -translate-x-1/2 bg-white px-4 py-1 shadow-lg font-bold text-black text-sm transition-transform">
                WOMEN
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <img
                  src="/images/todlor.png"
                  alt="Toddlers"
                  className="w-[329px] h-[213px] object-cover"
                />
                <button className="absolute bottom-4 left-16 transform -translate-x-1/2 bg-white px-2 py-1 shadow-lg font-bold text-black text-sm transition-transform">
                  TODDLERS
                </button>
              </div>
              <div className="relative group">
                <img
                  src="/images/drink.png"
                  alt="Drinkware"
                  className="w-[329px] h-[213px] object-cover"
                />
                <button className="absolute bottom-4 left-16 transform -translate-x-1/2 bg-white px-2 py-1 shadow-lg font-bold text-black text-sm transition-transform">
                  DRINKWARE
                </button>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-4">
            <div className="relative group">
              <img
                src="/images/kids.png"
                alt="Infant"
                className="w-[329px] h-[213px] object-cover"
              />
              <button className="absolute bottom-4 left-16 transform -translate-x-1/2 bg-white px-3 py-1 shadow-lg font-bold text-black text-sm transition-transform">
                INFANT
              </button>
            </div>
            <div className="relative group">
              <img
                src="/images/mami.png"
                alt="Miami"
                className="w-[329px] h-[211px] bg-black object-cover"
              />
              <button className="absolute bottom-4 left-36 transform -translate-x-1/2 bg-white px-4 py-1 shadow-lg font-bold text-black text-sm transition-transform text-center whitespace-nowrap">
                Miami Custom Reposit Specials
              </button>
            </div>
            <div className="relative group">
              <img
                src="/images/youth.png"
                alt="Youth"
                className="w-[329px] h-[213px] object-cover"
              />
              <button className="absolute bottom-4 left-16 transform -translate-x-1/2 bg-white px-2 py-1 shadow-lg font-bold text-black text-sm transition-transform">
                YOUTH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
