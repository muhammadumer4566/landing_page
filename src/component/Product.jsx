const Product = () => {
  const products = [
    {
      id: 1,
      image: "/images/pro1.png",
      title: "Unisex Jersey Muscle Tank",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      oldPrices: "8",
      newPrices: "8",
    },
    {
      id: 2,
      image: "/images/pro2.png",
      title: "Sale Unisex Jersey Long-Sleeve T-Shirt",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      oldPrices: "8",
      newPrices: "8",
    },
    {
      id: 3,
      image: "/images/pro3.png",
      title: "Shirt Unisex 3/4-Sleeve Baseball Shirt",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      oldPrices: "8",
      newPrices: "8",
    },
    {
      id: 4,
      image: "/images/pro4.png",
      title: "Unisex Jersey Short-Sleeve V-Neck T-Shirt",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      oldPrices: "8",
      newPrices: "8",
    },
  ];

  return (
    <div className="bg-white py-10 px-5 mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-5">
        Proven bestsellers
      </h2>
      <div className="flex flex-wrap justify-center gap-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border w-[238px] h-[629px] shadow-xl overflow-hidden m-2"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-[238px] h-[427px] object-cover"
            />
            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{product.title}</h3>
              <div className="mt-2 flex justify-center items-center gap-3 text-gray-500">
                <span className="line-through">{product.oldPrice}</span>
                <span className="text-green-500 font-bold">{product.newPrice}</span>
              </div>
              <div className="mt-2 flex justify-center items-center gap-7 text-gray-500">
                <span>{product.oldPrices}</span>
                <span className="text-green-500 font-bold">{product.newPrices}</span>
              </div>
              {/* Color Options */}
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-black"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View All Button */}
      <div className="text-center mt-5">
        <button className="bg-black text-white px-10 py-3 text-sm italic">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Product;
