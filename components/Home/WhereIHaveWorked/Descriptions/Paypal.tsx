import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Paypal() {
    const tasks = [
        {
            text: "Implemented complex features in algorithmic trading platforms using FastAPI and Pandas for efficient data processing and Scikit-Learn for predictive analytics.",
            keywords: ["algorithmic trading", "Pandas", "Scikit-Learn"],
        },
        {
            text: "Architected front-end architectures and worked closely with UX designers to bring compelling and intuitive user interfaces to life, improving end-user satisfaction ratings by 25%.",
            keywords: ["front-end architectures"],
        },
        {
            text: "Implemented CI/CD pipelines, increasing deployment efficiency and reducing downtime using GCP's suite of tools.",
            keywords: ["CI/CD" ,"GCP"],
        },
        {
            text: "Developed comprehensive billing systems and payment gateways integration for e-commerce clients, enhancing transaction security and user satisfaction.",
            keywords: ["transaction security"],
        },
        {
            text: "Collaborated in the creation of dynamic SPA (Single Page Applications) that improved the user journey, leading to a 90% increase in session time and a 50% decrease in bounce rates.",
            keywords: ["dynamic SPA"],
        },
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-300 sm:text-lg text-sm tracking-wide font-mono">
                        Full Stack Developer
                    </span>
                    {/* Date */}
                    <span className="font-mono text-sm text-gray-800"> 2019 - Jul 2020</span>
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
