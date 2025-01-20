const Subscribe = () => {
  return (
    <div className="bg-[#DCFCFF] py-10 md:py-20">
      {/* Subscription Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-3">
          Subscribe to our emails
        </h2>
        <p className="text-[#191818] mt-4 text-base md:text-lg lg:text-xl mb-7">
          Be the first to know about new collections and exclusive offers.
        </p>
        {/* Input and Button */}
        <div className="flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Add your email here"
              className="w-full px-4 md:px-6 py-3 text-base md:text-lg border border-black focus:outline-none rounded"
            />
            <button className="absolute inset-y-1 right-1 px-4 md:px-8 py-1 md:py-2 bg-black text-white text-sm md:text-lg rounded">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
