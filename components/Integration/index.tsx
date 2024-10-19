"use client";
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobepremierepro, SiAdobephotoshop, SiCoreldraw, SiAdobecreativecloud } from "react-icons/si";

const Integration = () => {
  // Motion variants for animation
  const iconVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center">
        <h2 className="text-3xl font-bold">Desain dengan Platform Terbaik</h2>
        <p className="mt-4 text-lg">Kami memanfaatkan software desain unggulan untuk hasil maksimal.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-y-10 mt-8">
        {/* First row with 3 icons */}
        <div className="flex justify-center gap-x-10">
          <motion.div
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-1/6"
          >
            <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7">
              <SiCoreldraw size={50} className="text-green-500" />
            </div>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="animate_top w-1/6"
          >
            <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7">
              <FaFigma size={50} className="text-black" />
            </div>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="animate_top w-1/6"
          >
            <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7">
              <SiAdobecreativecloud size={50} className="text-blue-500" />
            </div>
          </motion.div>
        </div>

        {/* Second row with 3 icons */}
        <div className="flex justify-center gap-x-10 mt-10">
          <motion.div
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="animate_top w-1/6"
          >
            <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7">
              <SiAdobephotoshop size={50} className="text-blue-700" />
            </div>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top w-1/6"
          >
            <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7">
              <SiAdobeillustrator size={50} className="text-orange-500" />
            </div>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="animate_top w-1/6"
          >
            <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7">
              <SiAdobepremierepro size={50} className="text-purple-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
