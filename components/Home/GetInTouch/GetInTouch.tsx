import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <div className="flex flex-row space-x-2 items-center">
          <span className=" font-sans text-gray-800 text-[30px] text-bold">What&apos;s Next?</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-300 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Get In Touch</span>
      <p className="flex font-Header tracking-wider text-gray-300  text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Whether you&apos;re in blue ocean or red ocean, whether you&apos;re running or building a business, whether you&apos;re trying to sustain or move your business forward,
        Now I&apos;m here as a full stack developer with experience in product development, data analysis as I can help you by with a computer and data.
      </p>
      <div className="pt-4">
        <a href="mailto:jclaxton.lean@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-[25px] text-AAsecondary border-AAsecondary 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}
