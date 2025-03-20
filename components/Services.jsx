import Image from "next/image";
import React from "react";

const servicescontent = [
  { title: "Branding", image: "/Branding.svg" },
  { title: "Web Design", image: "/Webdesign.svg" },
  { title: "Development", image: "/development.svg" },
];

const Services = () => {
  return (
    <>
      <div className="mt-32 mx-[4%] ">
        <div>
          <h2 className="text-[20px] custombevietnam text-[#EC5B37] pb-10">
            / <span className="text-[#202020]">our services</span>
          </h2>
          <div className="flex justify-between items-center">
            <div className="text-[#202020] text-[96px] text-left w-[550px] leading-tight bigshoulderdisplay ">
              <h2 className="text-[#EC5B37] ">You Request.</h2>
              We Build!
            </div>
            <div className="text-right custombevietnam">
              {" "}
              <h2>Scroll to explore</h2>3 works
            </div>
          </div>
        </div>

        <div className="bigshoulderdisplay">
          {servicescontent.map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center mt-16 gap-10"
            >
              <div className="bg-[#F4F5F5] w-[50%] h-[224px] flex justify-center items-center rounded-md">
                <h2 className="text-[24px]">{service.title}</h2>
              </div>
              <div className="w-[50%] h-[224px] flex justify-center items-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
