"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Fakta Menarik Start ===== --> */}
      <section className="px-4 py-12 md:py-20 lg:py-24 md:px-8 xl:px-0">
        <div className="relative z-1 mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-10 md:py-16 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-24">
          
          {/* Top Illustration */}
          <div className="flex justify-center mb-8">
            <Image
              width={335}
              height={384}
              src="/images/shape/shape-04.png"
              alt="Desain Grafis"
              className="w-32 md:w-48"
            />
          </div>

          {/* Heading and Description */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mx-auto mb-10 px-4 md:w-4/5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-black dark:text-white xl:text-4xl">
              Dipercaya oleh para Desainer
            </h2>
            <p className="text-base md:text-lg mx-auto lg:w-11/12">
              Kami menyediakan layanan desain grafis berkualitas tinggi untuk memenuhi kebutuhan branding dan pemasaran Anda. Dengan tim yang berpengalaman, kami siap membantu Anda mencapai visi kreatif Anda.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mx-auto w-full px-4 md:w-4/5 lg:w-3/4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <h3 className="mb-2 text-3xl md:text-4xl font-bold text-black dark:text-white">
                372
              </h3>
              <p className="text-sm md:text-lg">Klien di Seluruh Indonesia</p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <h3 className="mb-2 text-3xl md:text-4xl font-bold text-black dark:text-white">
                1000+
              </h3>
              <p className="text-sm md:text-lg">Unduhan</p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <h3 className="mb-2 text-3xl md:text-4xl font-bold text-black dark:text-white">
                46
              </h3>
              <p className="text-sm md:text-lg">Penghargaan</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Fakta Menarik End ===== --> */}
    </>
  );
};

export default FunFact;
