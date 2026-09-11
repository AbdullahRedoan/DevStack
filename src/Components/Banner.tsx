import bannerImg from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="bg-base-100">
      <div className="hero py-0 lg:py-0 max-w-9/10 mx-auto">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-between gap-10 max-w-full mx-auto px-4">
          <div className="flex-1 flex justify-center">
            <img
              src={bannerImg}
              alt="Dev Stack Illustration"
              className="max-w-xs sm:max-w-sm lg:max-w-full w-full object-contain"
            />
          </div>

          <div className="flex-1 text-left">
            <h1 className="text-2xl text-center md:text-left lg:text-left sm:text-5xl lg:text-6xl font-extrabold">
              Build Your Ideal <br />
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="py-6 text-gray-500 text-base lg:text-2xl sm:text-lg text-center md:text-left lg:text-left max-w-3xl">
              Explore frontend, backend, database, and tooling options, compare
              them side-by-side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex lg:flex-wrap gap-4 my-12">
              <button className="btn border-none text-white bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 rounded-lg font-normal lg:font-bold">
                Explore Technologies
              </button>
              <button className="btn lg:w-50 btn-outline rounded-lg border-gray-200 hover:bg-gray-100 ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
