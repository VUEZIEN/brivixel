import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRIVIXEL - Update Website",
  description: "Informasi terbaru mengenai update website dari BRIVIXEL.",
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
                <h1>Update Website BRIVIXEL</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Berikut adalah informasi terbaru mengenai update website dari BRIVIXEL:
                </p>

                <ol className="list-decimal ml-6 text-body-color dark:text-body-color-dark text-base">
                  <li>
                    <b>Daftar atau Masuk ke Akun:</b> Jika belum memiliki akun, daftar terlebih dahulu di{" "}
                    <a href="https://brixel.com/signup" className="text-primary hover:underline">
                      halaman pendaftaran
                    </a>. Jika sudah memiliki akun, langsung{" "}
                    <a href="https://brixel.com/login" className="text-primary hover:underline">
                      masuk ke akun Anda
                    </a>.
                  </li>

                  <li>
                    <b>Pilih Paket Desain Grafis:</b> Setelah masuk, buka halaman{" "}
                    <a href="https://brixel.com/packages" className="text-primary hover:underline">
                      paket desain grafis
                    </a> dan pilih paket yang sesuai dengan kebutuhan Anda. Kami menawarkan berbagai pilihan paket untuk desain logo, media sosial, brosur, dan lainnya.
                  </li>

                  <li>
                    <b>Lengkapi Formulir Pemesanan:</b> Isi detail proyek Anda di formulir pemesanan, termasuk informasi seperti tujuan desain, preferensi warna, dan gaya yang diinginkan.
                  </li>

                  <li>
                    <b>Kirim Pemesanan dan Lakukan Pembayaran:</b> Setelah semua informasi lengkap, kirim pemesanan Anda dan lanjutkan ke halaman pembayaran. Kami mendukung berbagai metode pembayaran yang aman dan mudah.
                  </li>

                  <li>
                    <b>Tunggu Konfirmasi:</b> Setelah pembayaran berhasil, Anda akan menerima email konfirmasi dengan rincian pesanan Anda. Tim kami akan mulai bekerja pada proyek Anda dan memberikan hasil dalam waktu yang ditentukan.
                  </li>
                </ol>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Jika ada pertanyaan lebih lanjut, jangan ragu untuk menghubungi tim kami di{" "}
                  <b>
                    <a href="https://brixel.com/contact" className="text-primary hover:underline">
                      brixel.com/contact
                    </a>
                  </b>. Kami siap membantu Anda mewujudkan desain yang sesuai dengan visi Anda!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
