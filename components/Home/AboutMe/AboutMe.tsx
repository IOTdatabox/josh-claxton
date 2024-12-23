import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Ether.js", "Solidity"],
    ["Node.js", "TypeScript", "Framer Motion", "react-moralis", "web3.js"],
  ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-8 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-9/12"
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <span className="flex-none text-gray-800 opacity-85 font-bold tracking-wider text-[30px]  sm-text-[20px] pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 gap-36">
          <div className="w-full md:w-8/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header text-sub">
              <span className="text-gray-800 font-bold font-mono ">
                Whatever you are, be a good one.
              </span>
              <br></br>
              <span className="text-gray-300 ">
                I&apos;ve been working as a full-stack developer at <span className=" text-gray-800">IT giants</span> and <span className=" text-gray-800">lean startups</span> for exactly 10 years.
                I never think front end coding is much easier than back end coding. Having a well design and pixel-perfect makes the difference.
                <span className=" text-gray-800">&nbsp; So, I&apos;m a big fan of front-end coding.&nbsp;</span>
                Back end layer are often invisible to the end user, yet no advanced application can work without them.
                <span className=" text-gray-800">&nbsp;So I love back end as well.&nbsp;</span>
                <br></br>
                I love both creating innovative digital products and working with my team, regardless of which affection spurred the other.
              </span>
            </div>
            <div className="font-Header text-sub">
              <span className="text-gray-800 font-bold font-mono ">
                Short Look at Professional Skills
              </span>
              <br></br>
              <span className="text-gray-300 ">
                TypeScript | C# | Node.js | Asp.Net Core | React | Next.js | Tailwind Css | PostgreSQL | 
                MySQL | MongoDB | Docker | AWS | Azure | Supabase | Web Development | System Architecture | MVP
              </span>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <Img
                src={"/img/me.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/me.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
