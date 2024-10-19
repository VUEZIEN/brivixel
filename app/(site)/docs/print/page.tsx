import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRIXEL - Tema Website",
  description: "Temukan berbagai tema dan konsep desain BRIXEL yang mencerminkan kreativitas dan profesionalisme.",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>\
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Temukan Tema Website BRIVIXEL</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  BRIVIXEL menghadirkan desain tema website yang modern, responsif, dan kreatif. Website kami dirancang dengan fokus pada kemudahan penggunaan, estetika yang memikat, dan fungsionalitas yang memadai untuk berbagai kebutuhan.
                </p>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Fitur utama dari tema ini meliputi:
                </p>

                <ul className="list-disc ml-6 text-body-color dark:text-body-color-dark text-base">
                  <li>Desain yang Responsif untuk Semua Perangkat</li>
                  <li>Tema Gelap dan Terang yang Menyesuaikan Preferensi Pengguna</li>
                  <li>Penggunaan Animasi yang Halus dan Modern</li>
                  <li>Tipografi yang Elegan dan Mudah Dibaca</li>
                  <li>Penekanan pada Navigasi yang Sederhana dan Intuitif</li>
                </ul>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Kunjungi:{" "}
                  <b>
                    <a href="https://brixel.com/theme">
                      brixel.com/theme
                    </a>
                  </b>{" "}
                  untuk mempelajari lebih lanjut tentang konsep desain yang kami gunakan dan bagaimana tema ini dapat meningkatkan pengalaman pengguna Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
