import { useState } from "react";
import { CardWrapper } from "./CardWrapper";

export const ProjectCard = ({ title, bullets }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <CardWrapper classText="col-span-full">
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="text-lg">{title}</div> 
                    <div
                        className="cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "▲" : "▼"}
                    </div>
                </div>

                {/* Conditionally rendered with smooth height transition */}
                <div
                    className={` text-sm overflow-hidden transition-all duration-500 ${
                        isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    {bullets.map((point, index) => (
                        <div key={index} className="mt-2">
                            {point}
                        </div>
                    ))}
                </div>
            </div>
        </CardWrapper>
    );
};
