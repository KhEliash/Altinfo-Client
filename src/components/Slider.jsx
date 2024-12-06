import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Fade, Slide } from "react-awesome-reveal";

const Slider = () => {
  return (
    <div>
      <div className="   relative h-[400px] lg:h-[600px]">
        <div className="flex   h-full">
          <div className=" hidden  w-1/2 lg:flex items-center justify-start pl-10">
            <Slide cascade>
              {/* <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-100 dark:text-[#151515] ">
                Unlocking Alternative Solutions: Explore, Compare, Decide with
                AltInfoHub.
              </h1> */}

              <div class=" text-left space-y-7 py-12 px-6 md:px-12">
                <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 dark:text-gray-300">
                  Unlock Alternative Solutions
                </h1>
                <p class="text-lg md:text-xl font-light max-w-3xl mx-auto text-gray-700 dark:text-gray-400">
                  Discover the best alternatives to your favorite products and
                  services. Explore, compare, and make informed decisions with{" "}
                  <span class="font-semibold">AltInfoHub</span>—your trusted
                  guide to smarter choices.
                </p>
                <div class="mt-8">
                  <a
                    href="#explore"
                    class="bg-[#C73659] text-gray-200 hover:bg-rose-600 font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300"
                  >
                    Explore Now
                  </a>
                </div>
              </div>
            </Slide>
          </div>
          <div className=" w-full lg:w-1/2 absolute bottom-0 top-0  right-0 ">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
            >
              {/* slide 1 */}
              <SwiperSlide className="  my-auto  ">
                <div className=" flex items-center justify-center">
                  <img
                    src="https://i.ibb.co/b2JH3W9/Remove-bg-ai-1715400363952.png"
                    alt="img"
                    className="  h-[300px] lg:h-[400px] rounded-xl"
                  />
                </div>
              </SwiperSlide>
              {/* slide 2 */}
              <SwiperSlide className="   my-auto ">
                <div className=" flex items-center justify-center ">
                  <img
                    src=" https://i.ibb.co/t3M5CTT/Remove-bg-ai-1715400409266.png"
                    alt="img"
                    className=" h-[300px] lg:h-[400px] mr-24"
                  />
                </div>
              </SwiperSlide>
              {/* slide 3 */}
              <SwiperSlide className="   my-auto ">
                <div className="  flex items-center justify-center ">
                  <img
                    src=" https://i.ibb.co/bFQftdY/Remove-bg-ai-1715400396244.png"
                    alt="img"
                    className="  h-[300px] lg:h-[500px] rounded-xl mb-24"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
