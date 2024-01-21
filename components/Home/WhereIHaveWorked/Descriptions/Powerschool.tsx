import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Powerschool() {
  const tasks = [
    {
      text: "Improved server-side logic for multiple projects, aligning with industry best practices in backend development with Node.js.",
      keywords: ["backend development"],
    },
    {
      text: "Engaged in database administration tasks, writing optimized SQL queries for PostgreSQL and schema design for MongoDB and Neo4j.",
      keywords: ["PostgreSQL", "Neo4j"],
    },
    {
      text: "Aided in the development of an innovative Just Walk-Out retail technology platform, which revolutionized shopping experiences.",
      keywords: ["Just Walk-Out"],
    },
    {
      text: "Developed and optimized several interactive dashboards using D3.js and Chart.js for real-time data visualization and reporting.",
      keywords: ["D3.js", "Chart.js"],
    },
    {
      text: "Integrated numerous third-party services and APIs to extend app functionalities, including payment processing, social media interactions, and geolocation services.",
      keywords: ["payment processing", "social media interactions", "geolocation services"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-300 sm:text-lg text-sm tracking-wide font-mono">
            Junior Full Stack Developer
          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-800">Jun 2015 - Jul 2019</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-800 text-subsub"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
