import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function QTS() {
    const tasks = [
        {
            text: "Developed and launched a new WMS equipped with RFID/SKU tracking system using React.js and Node.js, resulting in a 25% increase in online sales within the first three months.",
            keywords: ["WMS", "React.js", "Node.js"],
        },
        {
            text: "Automated repetitive tasks and workflows by developing custom scripts and utilities in Python, saving over 100 hours in manual work annually.",
            keywords: ["Python"],
        },
        {
            text: "Executed a pivotal role in developing interactive data visualization tools using D3.js and React, driving a 40% uplift in user comprehension of complex datasets for enterprise clients.",
            keywords: ["D3.js"],
        },
        {
            text: "Implemented a versatile front-end component library in collaboration with UX designers, which expedited the prototyping phase and increased developer productivity by 60%.",
            keywords: ["front-end component library"],
        },
        {
            text: "Engineered a real-time IoT monitoring system, effectively reducing response times by 200%.",
            keywords: ["IoT"],
        },
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-300 sm:text-lg text-sm tracking-wide font-mono">
                        Software Engineer
                    </span>
                    {/* Date */}
                    <span className="font-mono text-sm text-gray-800">Jul 2020 - Nov 2022</span>
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
