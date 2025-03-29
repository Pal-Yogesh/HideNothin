"use client";
import React, { useState } from "react";
import AnimateButton from "./AnimateButton";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "phoneNumber") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      access_key: "68a9ecea-2579-455e-bc2f-3a249d7bf4a5",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        console.error("Submission failed:", result);
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="mx-[4%] mt-8 text-[#202020]">
      <h2 className="text-[64px] md:text-[96px] text-center bigshoulderdisplay">
        Get In Touch
      </h2>
      <div className="md:flex items-center justify-center md:pt-10">
        <form
          onSubmit={handleSubmit}
          className="md:w-[60%] p-4 py-10 md:p-0 md:px-14 md:py-20 space-y-6 md:space-y-10 bg-[#F4F5F5] rounded-2xl custombevietnam"
        >
          <div className="md:grid md:grid-cols-2 md:gap-6 space-y-6 ">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-[18px]">
                First Name <span className="text-[#EC5B37]">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                className="w-full md:w-[345px] h-[51px] bg-white px-3  text-[16px] text-[#6A6C71]   rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC5B37] focus:border-[#EC5B37] "
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-[18px]">
                Last Name <span className="text-[#EC5B37]">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Smith"
                required
                className="w-full md:w-[345px] h-[51px] bg-white px-3  text-[16px] text-[#6A6C71]   rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC5B37] focus:border-[#EC5B37]"
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-6 space-y-6 ">
            <div>
              <label htmlFor="email" className="block mb-2 text-[18px]">
                Email <span className="text-[#EC5B37]">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full md:w-[345px] h-[51px] bg-white px-3  text-[16px] text-[#6A6C71]   rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC5B37] focus:border-[#EC5B37]"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-2 text-[18px]">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="1234567890"
                maxLength={10}
                className="w-full md:w-[345px] h-[51px] bg-white px-3  text-[16px] text-[#6A6C71]   rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC5B37] focus:border-[#EC5B37]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-[18px]">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave your message"
              rows={4}
              className="w-full h-[180px]  bg-white p-3 text-[16px] text-[#6A6C71]   rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC5B37] focus:border-[#EC5B37]"
            />
          </div>

          <div className="flex justify-end items-center">
            {/* <button
              type="submit"
              className=" w-[102px] h-[48px] text-white bg-[#EC5B37] rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Submit
            </button> */}
            <AnimateButton label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
