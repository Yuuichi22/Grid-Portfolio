import { useRef } from "react";
import { CardWrapper } from "./CardWrapper";

export const Project = ({ img, desc,icons}) => {
    return (
        
            <div className="group relative w-[250px] h-[200px] perspective-1000">
                {/* Front Side (Image) */}
                <div 
                    className="absolute w-full h-full bg-cover rounded-md transition-transform duration-500 group-hover:rotate-y-180"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    
                </div>

                {/* Back Side (Description) */}
                <div className="absolute w-full h-full flex flex-col gap-2 justify-center items-center  bg-gray-800 bg-opacity-80 text-white text-sm rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2 ">
                    <div className="text-[12px]  text-center ">{desc}</div>
                    <div className="flex gap-4 flex-wrap ">
                    {icons.map((icon,i) => <img className = "h-5" src={icon} />) }
                    </div>
                    
                </div>
            </div>
    
    );
};
