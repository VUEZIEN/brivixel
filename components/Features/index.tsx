"use client";
import React from "react";
import featuresData from "./featuresData"; // Anda bisa memperbarui data ini untuk menjelaskan mengapa desain grafis penting
import SingleFeature from "./SingleFeature"; // Anda mungkin perlu memperbarui komponen ini agar sesuai dengan tema
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Mengapa Harus Desain Grafis Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "MENGAPA HARUS MENDESAIN DI SINI?",
              subtitle: " Pentingnya Mendesain untuk Bisnis Anda",
              description: `Desain grafis bukan hanya tentang estetika; ini adalah cara untuk
              menyampaikan pesan dan membangun identitas merek. Mendesain di sini
              akan membantu Anda mencapai tujuan bisnis dengan lebih efektif.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Alasan item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Alasan item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Mengapa Harus Desain Grafis End ===== --> */}
    </>
  );
};

export default Feature;
