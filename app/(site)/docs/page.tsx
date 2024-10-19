import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRIXEL - Jasa Desain Grafis",
  description: "BRIXEL menawarkan jasa desain grafis berkualitas untuk bisnis dan individu.",
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
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Selamat Datang di BRIVIXEL - Jasa Layanan Desain Grafis</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                BRIVIXEL menawarkan berbagai layanan desain grafis yang disesuaikan dengan kebutuhan bisnis Anda. Baik Anda mencari branding, grafik media sosial, atau desain cetak, kami membawa kreativitas dan profesionalisme ke setiap proyek.
                </p>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Layanan kami meliputi:
                </p>

                <ul className="list-disc ml-6 text-body-color dark:text-body-color-dark text-base">
                  <li>Desain Branding dan Logo</li>
                  <li>Grafik Media Sosial</li>
                  <li>Brosur dan Flyer</li>
                  <li>Kartu Nama dan Alat Tulis</li>
                  <li>Desain Kemasan</li>
                  <li>Dan masih banyak lagi!</li>
                </ul>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Kunjungi:{" "}
                  <b>
                    <a href="https://brixel.com/services">
                      brixel.com/services
                    </a>
                  </b>{" "}
                  untuk mempelajari lebih lanjut tentang layanan kami dan bagaimana kami dapat membantu bisnis Anda tampil menonjol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
