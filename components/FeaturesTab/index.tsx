"use client";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";

import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Tab Fitur Mulai ===== --> */}
      <section className="relative pb-20 pt-18.5 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            {/* Remove Image imports as they are not needed anymore */}
          </div>

    {/* <!-- Menu Tab Mulai --> */}
    <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-10 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-5 xl:mb-15 xl:gap-8"
          >
            {featuresTabData.map((feature, index) => (
              <div
                key={index}
                onClick={() => setCurrentTab(feature.id)}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-4 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-8 xl:py-4 ${
                  currentTab === feature.id
                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle3 font-medium text-black dark:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                </div>
                <div className="w-4/5 md:w-auto">
                  <button className="text-xs font-medium text-black dark:text-white sm:text-sm lg:text-base">
                    {feature.title}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
          {/* <!-- Menu Tab Selesai --> */}

          {/* <!-- Konten Tab Mulai --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {featuresTabData.map((feature) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={feature.id} // Use unique id for the key
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Konten Tab Selesai --> */}
        </div>
      </section>
      {/* <!-- ===== Tab Fitur Selesai ===== --> */}
    </>
  );
};

export default FeaturesTab;
