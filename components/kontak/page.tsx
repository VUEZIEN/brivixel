"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";

interface FormData {
  nama: string;
  email: string;
  alasan: string;
}

const Bergabung = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    email: "",
    alasan: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors: { [key: string]: string } = {};

    // Validasi nama
    if (!formData.nama) {
      formIsValid = false;
      newErrors.nama = "Nama harus diisi.";
    }

    // Validasi email
    if (!formData.email) {
      formIsValid = false;
      newErrors.email = "Email harus diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Email tidak valid.";
    } else if (submittedEmails.includes(formData.email)) {
      formIsValid = false;
      newErrors.email = "Email ini sudah digunakan.";
    }

    // Validasi alasan
    if (!formData.alasan) {
      formIsValid = false;
      newErrors.alasan = "Alasan harus diisi.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const downloadImage = async () => {
    const element = document.getElementById("form-image")!;
    const canvas = await html2canvas(element);
    const dataURL = canvas.toDataURL("image/png");

    // Create a link to download the image
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "form-data.png";
    link.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Download image
      await downloadImage();

      const message = `Nama: ${formData.nama}\nEmail: ${formData.email}\nAlasan: ${formData.alasan}`;
      const phoneNumber = "087782525212";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Mengirim data ke WhatsApp
      const whatsappWindow = window.open(url, "_blank");
      if (whatsappWindow) {
        // Mengirimkan data berhasil
        setSubmittedEmails([...submittedEmails, formData.email]);
        setStatusMessage("Data berhasil dikirim!");
      } else {
        // Mengirimkan data gagal
        setStatusMessage("Gagal mengirim data. Pastikan WhatsApp terinstal.");
      }

      // Reset form setelah pengiriman
      setFormData({ nama: "", email: "", alasan: "" });
      setTimeout(() => setStatusMessage(null), 3000); // Menyembunyikan pesan setelah 3 detik
    } else {
      setStatusMessage("Gagal mengirim data.");
      setTimeout(() => setStatusMessage(null), 3000); // Menyembunyikan pesan setelah 3 detik
    }
  };

  return (
    <>
      {/* ===== Section Bergabung Start ===== */}
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Bergabung dengan Komunitas Kami
            </h2>

            <form id="form-image" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nama"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border dark:bg-gray-700 dark:text-white"
                />
                {errors.nama && (
                  <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border dark:bg-gray-700 dark:text-white"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="alasan"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Mengapa Ingin Bergabung?
                </label>
                <textarea
                  name="alasan"
                  id="alasan"
              
                  value={formData.alasan}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded-lg border dark:bg-gray-700 dark:text-white"
                ></textarea>
                {errors.alasan && (
                  <p className="text-red-500 text-sm mt-1">{errors.alasan}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full p-3 text-white bg-black rounded-lg hover:bg-opacity-90 dark:bg-white dark:text-black"
              >
                Daftar Sekarang
              </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
              <div className="mt-4 text-center text-sm font-medium text-green-600">
                {statusMessage}
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {/* ===== Section Bergabung End ===== */}
    </>
  );
};

export default Bergabung;
