import Image from "next/image";
import React from "react";

const SelectedWork = () => {
  return (
    <div className="mt-28 md:mt-40 overflow-hidden">
      <div>
        <div className="flex justify-center items-center gap-28">
          <div
           
            className="w-[414px] h-[3px] bg-gradient-to-r from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
          ></div>

          <div >
            <div className="flex flex-col items-center">
              <div className="w-[3px] h-[86px] bg-gradient-to-b from-[#EC5B37] to-[#FFFFFF] "></div>

              <div className="w-[322px] bigshoulderdisplay text-[64px] lg:text-[96px] text-[#202020] text-center mt-2">
                <h2>
                  Selected <span className="text-[#EC5B37]">(Works)</span>{" "}
                  23&apos;24
                </h2>
              </div>
            </div>
          </div>

          <div
            className="w-[414px] h-[3px] bg-gradient-to-l from-[#EC5B37] to-[#FFFFFF] hidden xl:block"
          ></div>
        </div>
      </div>

      <div className="mx-[4%]">
        <div className="flex justify-between md:items-center mb-10">
          <h2 className="text-[20px] custombevietnam text-[#EC5B37]">
            / <span className="text-[#202020]">our works</span>
          </h2>
          <h2 className="text-right text-[#6A6C71] text-[16px]">
            Scroll to explore <br />3 works
          </h2>
        </div>

        <div className="space-y-10 md:space-y-20">
          <div >
            <Image
              src="/spectrumstudio.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full hidden lg:block"
            />
            <Image
              src="/mobilespectrumstudio.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full lg:hidden"
            />
          </div>
          <div >
            <Image
              src="/PrismPulse.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full hidden lg:block"
              priority
            />
            <Image
              src="/mobilePrismPulse.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full lg:hidden"
              priority
            />
          </div>
          <div >
            <Image
              src="/MosaicMotion.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full hidden lg:block"
              priority
            />
            <Image
              src="/mobileMosaicMotion.svg"
              alt="spectrumstudio"
              width={1000}
              height={1000}
              className="w-full h-full lg:hidden"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
