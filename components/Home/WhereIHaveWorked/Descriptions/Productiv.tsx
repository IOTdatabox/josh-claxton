import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Productiv() {
  const tasks = [
    {
      text: "Spearheaded the development of a SaaS MVP, integrating React and Vue for dynamic front-end experiences and Node.js for robust server-side functionality.",
      keywords: ["SaaS MVP", "React", "Node.js"],
    },
    {
      text: "Developed RESTful and GraphQL APIs using Node.js and Python, ensuring a robust back-end to front-end integration.",
      keywords: ["RESTful", "GraphQL tasks", "Node.js", "Python"],
    },
    {
      text: "Led database schema design and query performance optimization for MySQL, PostgreSQL, and MongoDB, upholding top-tier data interactions and response times for front-end requests.",
      keywords: ["database schema", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      text: "Utilized advanced front-end state management patterns to build complex application states, leading to a more predictable UI behavior across large-scale projects.",
      keywords: ["front-end state management patterns", "predictable UI behavior"],
    },
    {
      text: "Improved front-end performance, by employing efficient bundling strategies with Webpack and code-splitting techniques in React.",
      keywords: ["bundling strategies", "code-splitting techniques"],
    },
    {
      text: "Directed the product execution strategy, balancing stakeholder vision with technical integrity.",
      keywords: ["product execution strategy"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-300 sm:text-lg text-sm tracking-wide font-mono">
            Senior Full Stack Developer
          </span>
          {/* Date */}
          <span className="font-mono text-sm text-gray-800">Nov 2022 - Dec 2023</span>
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
