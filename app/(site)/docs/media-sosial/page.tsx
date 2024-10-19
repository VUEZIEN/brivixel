import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRIVIXEL - Media Sosial",
  description: "Ikuti BRIVIXEL di media sosial untuk mendapatkan update terbaru seputar desain grafis.",
};

export default function SocialMediaPage() {
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
                <h1>Temukan BRIVIXEL di Media Sosial</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Tetap terhubung dengan kami di media sosial untuk mendapatkan inspirasi desain, tips kreatif, dan informasi tentang layanan terbaru dari BRIVIXEL. Kami aktif di berbagai platform untuk memastikan Anda selalu mendapatkan update terbaru seputar dunia desain grafis.
                </p>

                <ul className="list-none ml-0 text-body-color dark:text-body-color-dark text-base">
                  <li>
                    <b>Instagram:</b>{" "}
                    <a href="https://instagram.com/brixel" className="text-primary hover:underline">
                      @brixel
                    </a>{" "}
                    - Ikuti kami untuk portofolio terbaru, cerita di balik desain, dan inspirasi visual.
                  </li>
                  <li>
                    <b>Facebook:</b>{" "}
                    <a href="https://facebook.com/brixel" className="text-primary hover:underline">
                      BRIXEL Desain Grafis
                    </a>{" "}
                    - Dapatkan update tentang layanan kami dan berinteraksi langsung dengan tim kami.
                  </li>
                  <li>
                    <b>Twitter:</b>{" "}
                    <a href="https://twitter.com/brixel" className="text-primary hover:underline">
                      @brixel
                    </a>{" "}
                    - Ikuti kami untuk tips desain singkat dan informasi tren terbaru di industri.
                  </li>
                  <li>
                    <b>LinkedIn:</b>{" "}
                    <a href="https://linkedin.com/company/brixel" className="text-primary hover:underline">
                      BRIXEL
                    </a>{" "}
                    - Jaringan profesional kami dan berita tentang kolaborasi bisnis.
                  </li>
                  <li>
                    <b>Pinterest:</b>{" "}
                    <a href="https://pinterest.com/brixel" className="text-primary hover:underline">
                      BRIXEL Kreatif
                    </a>{" "}
                    - Jelajahi papan inspirasi desain kami untuk berbagai proyek kreatif.
                  </li>
                </ul>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Ikuti kami di platform media sosial favorit Anda untuk selalu terinspirasi dan mendapatkan konten yang segar serta mendukung perjalanan desain Anda bersama BRIVIXEL!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
