import { CardWrapper } from "./CardWrapper";

export const Education = () => {
    const educationList = [
        { name: "Poornima College of Engineering", timeline: "2022-2026" },
        { name: "Kendriya Vidyalaya", timeline: "2020-2022" },
    ];

    return (
        <CardWrapper classText="row-span-2">
            <div className=" font-[poppins] p-5">
                <div className="title text-lg font-semibold pl-2">Education</div>
                <div className="relative border-l-2 border-gray-300 pl-4 mt-4">
                    {educationList.map((edu, index) => (
                        <div key={index} className="mb-6 last:mb-0 relative">
                            {/* Dot */}
                            <div className="absolute -left-6 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
                            
                            {/* Content */}
                            <div className="text-lg">
                                <div className="font-medium">{edu.name}</div>
                                <div className="text-xs text-gray-500">{edu.timeline}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CardWrapper>
    );
};
