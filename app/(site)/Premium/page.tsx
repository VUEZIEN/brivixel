"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";

interface FormData {
  nama: string;
  telepon: string;
  desain: string;
  paymentMethod: string;
  paymentProof: File | null; // New state for payment proof
}

const PaketKecil = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    telepon: "",
    desain: "",
    paymentMethod: "",
    paymentProof: null, // Initialize payment proof state
  });

  const [customDesain, setCustomDesain] = useState<string>(""); // New state for manual input
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedTelepons, setSubmittedTelepons] = useState<string[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showBarcode, setShowBarcode] = useState<boolean>(false);
  const [barcodeDataUrl, setBarcodeDataUrl] = useState<string | null>(null);
  const [paymentProofPreview, setPaymentProofPreview] = useState<string | null>(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCustomDesainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomDesain(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFormData({ ...formData, paymentProof: file });

      // Create a preview URL for the uploaded image
      const previewUrl = URL.createObjectURL(file);
      setPaymentProofPreview(previewUrl);
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors: { [key: string]: string } = {};

    if (!formData.nama) {
      formIsValid = false;
      newErrors.nama = "Nama harus diisi.";
    }

    if (!formData.telepon) {
      formIsValid = false;
      newErrors.telepon = "No. Telepon harus diisi.";
    } else if (submittedTelepons.includes(formData.telepon)) {
      formIsValid = false;
      newErrors.telepon = "No. Telepon ini sudah digunakan.";
    }

    // Use customDesain if manual option is selected
    if (formData.desain === "Manual" && !customDesain) {
      formIsValid = false;
      newErrors.desain = "Silakan ketik desain Anda.";
    } else if (!formData.desain) {
      formIsValid = false;
      newErrors.desain = "Jenis desain harus diisi.";
    }

    if (!formData.paymentMethod) {
      formIsValid = false;
      newErrors.paymentMethod = "Pilih metode pembayaran.";
    }

    if (!formData.paymentProof) {
      formIsValid = false;
      newErrors.paymentProof = "Unggah bukti pembayaran.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const generateBarcode = (paymentMethod: string) => {
    const barcodeUrls = {
      DANA: "/images/icon/qr_dana.jpg",
      BCA: "/images/icon/BCA.png",
      Gopay: "/images/icon/dana.png",
    };
    return barcodeUrls[paymentMethod];
  };

  const handlePaymentClick = (method: string) => {
    setFormData({ ...formData, paymentMethod: method });
    setShowBarcode(true);
    const barcodeUrl = generateBarcode(method);
    setBarcodeDataUrl(barcodeUrl);
  };

  const downloadImage = async () => {
    const element = document.getElementById("form-image")!;
    const canvas = await html2canvas(element);
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "form-data.png";
    link.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await downloadImage();

      // Use customDesain if manual is selected
      const desain =
        formData.desain === "Manual" ? customDesain : formData.desain;

      const message = `Nama: ${formData.nama}\nNo. Telepon: ${formData.telepon}\nDesain: ${desain}\nMetode Pembayaran: ${formData.paymentMethod}`;
      const phoneNumber = "087782525212";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message,
      )}`;

      const whatsappWindow = window.open(url, "_blank");
      if (whatsappWindow) {
        setSubmittedTelepons([...submittedTelepons, formData.telepon]);
        setStatusMessage("Data berhasil dikirim!");
      } else {
        setStatusMessage("Gagal mengirim data. Pastikan WhatsApp terinstal.");
      }

      setFormData({
        nama: "",
        telepon: "",
        desain: "",
        paymentMethod: "",
        paymentProof: null,
      });
      setCustomDesain(""); // Reset custom desain field
      setTimeout(() => setStatusMessage(null), 3000);
    } else {
      setStatusMessage("Gagal mengirim data.");
      setTimeout(() => setStatusMessage(null), 3000);
    }
  };
  return (
    <>
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
              Paket Besar
            </h2>

            <form id="form-image" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nama"
                  className="mb-2 block text-sm font-medium text-black dark:text-white"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2.5 dark:bg-gray-700 dark:text-white"
                />
                {errors.nama && (
                  <p className="mt-1 text-sm text-red-500">{errors.nama}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="telepon"
                  className="mb-2 block text-sm font-medium text-black dark:text-white"
                >
                  No. Telepon
                </label>
                <input
                  type="tel"
                  name="telepon"
                  id="telepon"
                  value={formData.telepon}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2.5 dark:bg-gray-700 dark:text-white"
                />
                {errors.telepon && (
                  <p className="mt-1 text-sm text-red-500">{errors.telepon}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="desain"
                  className="mb-2 block text-sm font-medium text-black dark:text-white"
                >
                  Pilih Jenis Desain
                </label>
                <select
                  name="desain"
                  id="desain"
                  value={formData.desain}
                  onChange={handleChange}
                  className="w-full rounded-lg border p-2.5 dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Pilih desain</option>
                  <option value="Desain Logo">Desain Logo</option>
                  <option value="Desain Poster">Desain Poster</option>
                  <option value="Desain Banner">Desain Banner</option>
                  <option value="Desain Aplikasi">Desain Aplikasi</option>
                  <option value="Desain Website">Desain Website</option>
                  <option value="UI Design">Desain UI (User Interface)</option>
                  <option value="UX Design">Desain UX (User Experience)</option>
                  <option value="Mobile App Design">
                    Desain Aplikasi Mobile
                  </option>
                  <option value="Landing Page Design">
                    Desain Landing Page
                  </option>
                  <option value="Prototype Design">Desain Prototype</option>
                  <option value="Manual">Lainnya</option>
                </select>
                {errors.desain && (
                  <p className="mt-1 text-sm text-red-500">{errors.desain}</p>
                )}
              </div>

              {formData.desain === "Manual" && (
                <div>
                  <label
                    htmlFor="custom-desain"
                    className="mb-2 block text-sm font-medium text-black dark:text-white"
                  >
                    Ketik Desain Anda
                  </label>
                  <input
                    type="text"
                    name="custom-desain"
                    id="custom-desain"
                    value={customDesain}
                    onChange={handleCustomDesainChange}
                    className="w-full rounded-lg border p-2.5 dark:bg-gray-700 dark:text-white"
                    placeholder="Masukkan desain yang diinginkan"
                  />
                </div>
              )}

              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  Metode Pembayaran
                </label>
                <div className="flex space-x-4">
                  <img
                    src="/images/icon/BCA.png"
                    alt="BCA Icon"
                    className="cursor-pointer"
                    onClick={() => handlePaymentClick("BCA")}
                    style={{ width: "100px" }}
                  />
                  <img
                    src="/images/icon/dana.png"
                    alt="DANA Icon"
                    className="cursor-pointer"
                    onClick={() => handlePaymentClick("DANA")}
                    style={{ width: "100px" }}
                  />
                  <img
                    src="/images/icon/gopay.png"
                    alt="Gopay Icon"
                    className="cursor-pointer"
                    onClick={() => handlePaymentClick("Gopay")}
                    style={{ width: "100px" }}
                  />
                </div>
                {errors.paymentMethod && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.paymentMethod}
                  </p>
                )}
              </div>

              {showBarcode && barcodeDataUrl && (
                <div className="mt-5">
                  <p className="font-medium">Scan barcode untuk pembayaran:</p>
                  <img src={barcodeDataUrl} alt="Barcode" className="mt-3" />
                </div>
              )}
              <div>
                <label
                  htmlFor="paymentProof"
                  className="mb-2 block text-sm font-medium text-black dark:text-white"
                >
                  Unggah Bukti Pembayaran
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full rounded-lg border p-2.5 dark:bg-gray-700 dark:text-white"
                />
                {errors.paymentProof && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.paymentProof}
                  </p>
                )}

                {paymentProofPreview && ( // Check if there's a preview to show
                  <div className="mt-4">
                    <img
                      src={paymentProofPreview}
                      alt="Preview Bukti Pembayaran"
                      className="max-w-full rounded-lg" // Optional styling
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-2.5 text-white hover:bg-blue-700"
              >
                Unduh & Kirim
              </button>
            </form>

            {statusMessage && (
              <p className="mt-5 text-center text-red-500">{statusMessage}</p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PaketKecil;
