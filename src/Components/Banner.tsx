import bannerImg from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="bg-base-100">
      <div className="hero block place-items-stretch py-0 lg:py-30 max-w-10/12 mx-auto">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-between gap-10 max-w-full mx-auto px-2">
          <div className="flex-1 flex justify-end">
            <img
              src={bannerImg}
              alt="Dev Stack Illustration"
              className="max-w-xs sm:max-w-sm lg:max-w-11/12 w-full object-contain"
            />
          </div>

          <div className="flex-1 text-left grow-2">
            <h1 className="text-4xl text-center pt-10 lg:text-left sm:text-5xl lg:text-6xl font-extrabold">
              Build Your Ideal <br />
              <span className="text-theme-gradient">Development Stack</span>
            </h1>

            <p className="py-6 text-gray-500 text-base lg:text-2xl sm:text-lg text-center md:text-left lg:text-left max-w-3xl">
              Explore frontend, backend, database, and tooling options, compare
              them side-by-side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex justify-center lg:justify-start lg:flex-wrap gap-5 my-12">
              <button className="btn border-none text-white bg-theme-gradient hover:opacity-90 rounded-lg font-normal lg:font-bold">
                Explore Technologies
              </button>
              <button className="btn lg:w-50 w-48 btn-outline rounded-lg border-gray-200 hover:bg-gray-100 ">
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
