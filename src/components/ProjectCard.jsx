import { useState } from "react";
import { CardWrapper } from "./CardWrapper";

export const ProjectCard = ({ title, bullets, tags }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <CardWrapper classText="col-span-full">
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold">{title}</div> 
                    <div
                        className="cursor-pointer text-gray-400 hover:text-white transition"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "▲" : "▼"}
                    </div>
                </div>

                {/* Smooth expanding description */}
                <div
                    className={`transition-all duration-500 overflow-hidden ${
                        isExpanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                >
                    {bullets.map((point, index) => (
                        <div key={index} className="mt-1 text-sm text-gray-300">
                            {point}
                        </div>
                    ))}

                    {/* Tags section */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-2 py-1 text-xs bg-gray-700 text-gray-200 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
};
