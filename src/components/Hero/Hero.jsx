import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">

      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">

        <div className="relative w-[95%] sm:w-48 h-10  bg-linear-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute  inset-0.75 bg-black rounded-full flex items-center justify-center gap-2">
            <i className="bx bx-diamond"></i>
            INTRODUCING
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8">EMAIL FOR <br /> DEVELOPERS</h1>
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-100 lg:max-w-120">
          The best way to reach uumans insted of spam folders, dlever transactional and marketing emails at scale.
        </p>

        <div className="flex gap-4 mt-12">
          <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-sm font-semibold tracking-wider transition all duration-300" href="#">
            Documentation <i className="bx bx-link-external"></i>
          </a>
          <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-sm font-semibold tracking-wider transition all duration-300 bg-gray-300 text-black" href="#">
            GET STARTED <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      <Spline className="absolute lg:top-0 top-[20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full" scene="https://prod.spline.design/xT2D5-PXRdX9r7gu/scene.splinecode " />
    </main>
  )
}

export default Hero
