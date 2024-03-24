import Image from "next/image";
import React from "react";

const LandscapeImage = () => {
  return (
    <div className="mt-auto w-full h-auto">
      <div className="flex flex-row justify-between items-end mb-[1rem] lg:mb-[1.3rem]">
        <h1 className="text-green italic font-bold z-2 lg:absolute lg:text-[9rem]">
          Step into serenity.
        </h1>
        <div className="relative w-[59px] h-[59px] lg:w-[150px] lg:h-[150px] lg:absolute lg:right-[2rem]">
          <Image
            src="/gradientCircle.png"
            fill={true}
            alt="gradient-circle-img"
          />
        </div>
      </div>
      <div className="relative min-h-[451px] max-h-[697px] z-1">
        <Image src="/landscape.png" fill={true} alt="landscape-image" />
      </div>
    </div>
  );
};

export default LandscapeImage;
