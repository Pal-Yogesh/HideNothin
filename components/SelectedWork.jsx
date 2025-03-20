import Image from "next/image";
import React from "react";

const SelectedWork = () => {
  return (
    <div className="mt-40 overflow-hidden">
      <div>
        <div className="flex justify-center items-center gap-28">
          <div
            data-aos="fade-right"
            className="w-[414px] h-[3px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] "
          ></div>

          <div data-aos="fade-up" className="flex flex-col items-center">
            <div className="w-[3px] h-[86px] bg-gradient-to-b from-[#EC5B37] to-[#FFFFFF] "></div>

            <div className="w-[322px] bigshoulderdisplay text-[96px] text-[#202020] text-center mt-2">
              <h2>
                Selected <span className="text-[#EC5B37]">(Works)</span>{" "}
                23&apos;24
              </h2>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="w-[414px] h-[3px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] "
          ></div>
        </div>
      </div>

      <div className="mx-[4%]">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[20px] custombevietnam text-[#EC5B37]">
            / <span className="text-[#202020]">our works</span>
          </h2>
          <h2 className="text-right">
            Scroll to explore <br />3 works
          </h2>
        </div>

        <div className="space-y-20">
          <div data-aos="flip-down" data-aos-duration="3000">
            <Image
              src="/spectrumstudio.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div data-aos="flip-down" data-aos-duration="2000">
            <Image
              src="/PrismPulse.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
          <div data-aos="flip-down" data-aos-duration="2000">
            <Image
              src="/MosaicMotion.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
