import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className=" font-bold tracking-wider text-gray-800 text-lg md:text-[30px] w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
                      absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://www.demostack.com/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
                              transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/demostack.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/boat_renting.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-sub">DemoStack </span>
                <a href="https://www.demostack.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Interactive Product Demo Software
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-300 text-left md:text-right ">
                  I contributed to building Demostack, a platform that empowers sales teams with custom demo environments, using Next.js, AWS, and Vercel.
                  The app simplifies creating, distributing, and tracking tailored demos, helping businesses close deals more effectively.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">AWS</span>
                <span className="pr-4 z-10">Vercel</span>
              </ul>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://senja.io/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/senja.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/parking_renting.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-sub">Senja</span>
                <a href="https://senja.io/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-sub hover:cursor-pointer">
                    Platform To Collect, Manage and Share Testimonials
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-300 text-left ">
                  I developed Senja, an all-in-one testimonial management app, using the MERN stack (MongoDB, Express, React, Node.js) and Sanity CMS.
                  This app helps creators collect, manage, and showcase testimonials to boost trust and drive results effortlessly.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary
               text-subsub font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Mern</span>
                <span className="pr-4 z-10">Sanity</span>
                <span className="pr-4 z-10">Shadcn UI</span>
              </ul>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"https://www.wealthfront.com/"}>
                <a target="_blank"
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></a>
              </Link>

              <Img src={"/wealthfront.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/crypto_exchange.png"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-sub">WealthFront</span>
                <Link href={"https://www.wealthfront.com/"}>
                  <a target="_blank" className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Retirement Plan In WealthFront
                  </a>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-300 text-left md:text-right">
                  I contributed to building key features in the Wealthfront app, focusing on retirement planning and supporting other financial tools like automated bond ladders and automated stock investing. Leveraging Next.js and React,
                  I helped create a seamless, user-friendly experience for wealth management and long-term financial planning.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Shadcn UI</span>
              </ul>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"https://thedocapp.net/"}>
                <a target="_blank"
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></a>
              </Link>

              <Img src={"/thedocapp.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/gift_shopping.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-sub">TheDocApp</span>
                <Link href={"https://thedocapp.net/"} passHref>
                  <a target="_blank" rel="noopener noreferrer" className="md:text-gray-300 text-AAsecondary font-bold text-sub hover:cursor-pointer">
                    Patient Management System
                  </a>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-300 text-left ">
                  I built a HIPAA-accredited patient management solution using ASP.NET Core, MS SQL, Azure, and React to improve how healthcare providers manage patient data securely and efficiently.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Asp.Net Core</span>
                <span className="pr-4 z-10">MS SQL</span>
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Azure</span>
              </ul>
            </div>
          </div>
        </div>

        {/* // ? Project 5 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >


            <div className="relative rounded w-full h-[80%] col-span-7 ">
              <Link href={"https://www.shoppingbagsdirect.com/"}>
                <a target="_blank"
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
                              transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></a>
              </Link>

              <Img src={"/shoppingbag.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>
          <div
            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
          >
            <div className="flex flex-col space-y-1 md:items-end z-10">
              <span className="text-AAsecondary text-sub">ShoppingBagsDirect</span>

              <Link href={"https://www.shoppingbagsdirect.com/"} passHref>
                  <a target="_blank" rel="noopener noreferrer" className="md:text-gray-300 text-AAsecondary font-bold text-sub hover:cursor-pointer">
                  Wholesale Shopping Paper Bags
                  </a>
                </Link>

            </div>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
              <p className="text-gray-300 md:text-gray-300 text-left md:text-right">
                I played a key role in designing and developing a bag shopping e-commerce platform using ASP.NET, MS SQL, and Azure. The project aimed to deliver a seamless shopping experience for customers while maintaining a robust, scalable backend infrastructure.
              </p>
            </div>
            <ul
              className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
            >
              <span className="pr-4 z-10">Asp.Net Core</span>
              <span className="pr-4 z-10">MS SQL</span>
              <span className="pr-4 z-10">Azure</span>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
