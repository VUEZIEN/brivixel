import React from "react";
import { FeatureTab } from "@/types/featureTab";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, icon } = featureTab; // Use icon instead of image

  return (
    <div className="flex items-center gap-8 lg:gap-19">
      <div className="md:w-1/2">
        <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
          {title}
        </h2>
        <p className="mb-5">{desc1}</p>
        <p className="w-11/12">{desc2}</p>
      </div>
      <div className="relative mx-auto flex justify-center items-center md:w-1/2">
        <div className="h-12 w-12">{icon}</div> {/* Render the icon here */}
      </div>
    </div>
  );
};

export default FeaturesTabItem;
