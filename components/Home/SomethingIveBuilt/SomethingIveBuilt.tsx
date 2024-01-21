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
              <a href="https://getmyboart.com" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
                              transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/boat_renting.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
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
                <span className="text-AAsecondary text-sub">Get My Boat </span>
                <a href="https://getmyboat.com" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Worldwide Board Renting Service
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-300 text-left md:text-right ">
                  I built over 40 web pages and architected and implemented booking, listing and matching functionalities.
                  Also the project included an online payment system, advanced search by geolocation and user review system.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">MobX</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://getbyboat.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
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
              <a href={"https://www.hipcamp.com/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/parking_renting.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
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
                <span className="text-AAsecondary text-sub">Find Yourself Outside</span>
                <a href="https://www.hipcamp.com/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-300 text-AAsecondary font-bold text-sub hover:cursor-pointer">
                    Parking Booking Service
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-300 text-left ">
                  I proposed a Next.js/Postgres/Prisma based app leveraging location APIs and serverless functions.
                  Created database models to normalize parking data like lot locations, spaces, reservations.
                  Built Next.js app with signup/payment integrations and dynamic spot selection.
                  Integrated IoT beacons to passively track space usage through Bluetooth.
                  Leveraged geofencing APIs to update space availability in real-time from mobile.
                  Automated permit payments and notifications through webhooks.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary
               text-subsub font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Serverless</span>
                <span className="pr-4 z-10">Space API</span>
                <span className="pr-4 z-10">IOT beacons</span>
                <span className="pr-4 z-10">Payment Integraion</span>
                <span className="pr-4 z-10">Supabase</span>

              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://www.hipcamp.com/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
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
              <Link href={"https://www.luno.com/en/gb"}>
                <a target="_blank"
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></a>
              </Link>

              <Img src={"/crypto_exchange.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
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
                <span className="text-AAsecondary text-sub">Luno</span>
                <Link href={"https://www.luno.com/en/gb"}>
                  <a target="_blank" className=" md:text-gray-300 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Trustable Crypto Exhange Service
                  </a>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-300 text-left md:text-right">
                  Developed the UI/UX for placing orders, account management and portfolio tracking using React and Next.js.
                  Ensured smooth cross-device experience on web and mobile. Integrated payment gateways like Wyre, Moonpay for fiat on/off-ramps. Enabled crypto deposits/withdrawals using web3 APIs.
                  Built admin dashboards to monitor system health, manage users/assets, detect fraud and generate compliance reports.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Portfolio Tsracking</span>
                <span className="pr-4 z-10">web3 APIs</span>
                <span className="pr-4 z-10">UI/UX</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Node.js</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://www.luno.com/en/gb" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
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
              <Link href={"https://pfefferundfrost.de/en"}>
                <a target="_blank"
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></a>
              </Link>

              <Img src={"/gift_shopping.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
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
                <span className="text-AAsecondary text-sub">Pfeffer & Frost</span>
                <Link href={"https://pfefferundfrost.de/en"} passHref>
                  <a target="_blank" rel="noopener noreferrer" className="md:text-gray-300 text-AAsecondary font-bold text-sub hover:cursor-pointer">
                    Sustainable Business Gifts
                  </a>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-300 text-left ">
                  Built an AI-powered personalized gifting site leveraging Luminate API. The recommendation engine analyzed shopper behavior to suggest perfect gifts.
                  Optimized the shopping experience on these sites using A/B testing and analytics to improve user flows, up-selling, and conversion rates.
                  Ensured seamless checkout and payment experiences integrating with Braintree, PayPal and leading card gateways.
                  Leveraged headless commerce architectures like Magento PWA Studio and Commerce.js for performance and flexibility across devices.


                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Luminate API</span>
                <span className="pr-4 z-10">A/B testing</span>
                <span className="pr-4 z-10">Payment Gateway</span>
                <span className="pr-4 z-10">Commerce.js</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://pfefferundfrost.de/en" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
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
            <div className="relative rounded w-full h-full col-span-7 ">
              <Img src={"/wms1.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>
          <div
            className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
          >
            <div className="flex flex-col space-y-1 md:items-end z-10">
              <span className="text-AAsecondary text-sub">WMS</span>
              <span className=" md:text-gray-300 text-AAsecondary font-bold text-sub">
                WMS with RFID/SKU tracking system
              </span>
            </div>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
              <p className="text-gray-300 md:text-gray-300 text-left md:text-right">
                A leading retailer needed to modernize their warehouse management system (WMS) to improve inventory accuracy and fulfillment speed.
                proposed a cloud-native solution and developed Node API, MongoDB schema, React admin app. I integrated Zebra RFID printers/readers via IoT Core MQTT.
              </p>
            </div>
            <ul
              className="flex flex-wrap w-full text-AAsecondary md:text-AAsecondary
               text-subsub font-Text2 md:justify-end"
            >
              <span className="pr-4 z-10">WMS</span>
              <span className="pr-4 z-10">Zebra RFID</span>
              <span className="pr-4 z-10">IOT Core</span>
              <span className="pr-4 z-10">MQTT</span>
              <span className="pr-4 z-10">Analysis</span>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
