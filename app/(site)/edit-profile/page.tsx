"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    photo: "",
    bio: "",
    phone: "",
    email: "",
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef(null);
  const router = useRouter(); // Inisialisasi router

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setProfileData({ ...profileData, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(profileData.email)) {
      alert("Email harus merupakan alamat Gmail yang valid (misalnya, contoh@gmail.com).");
      return;
    }

    if (profileData.bio.length < 6 || profileData.bio.length > 30) {
      alert("Bio harus antara 6 hingga 30 karakter.");
      return;
    }

    if (!/^\d{11,13}$/.test(profileData.phone)) {
      alert("Nomor HP harus terdiri dari 11 hingga 13 digit.");
      return;
    }

    localStorage.setItem("profileData", JSON.stringify(profileData));
    console.log("Data Profil yang Diperbarui:", profileData);

    // Redirect ke halaman profil setelah menyimpan
    router.push("/akun");
  };

  useEffect(() => {
    const storedProfile = localStorage.getItem("profileData");
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <motion.div
          className="animate_top rounded-lg bg-white px-7.5 pt-10 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            Edit Profil Anda
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {/* Foto Profil */}
            <div className="mb-7.5 flex flex-col items-center">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt="Foto Profil"
                  width={200}
                  height={200}
                  className="mb-4 rounded-full"
                />
              ) : (
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
                  <span className="text-gray-500">Gambar</span>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
              />
            </div>

            {/* Bio */}
            <div className="mb-7.5 w-full">
              <input
                type="text"
                placeholder="Bio"
                name="bio"
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({ ...profileData, bio: e.target.value })
                }
                className="w-full border-b border-stroke pb-3.5"
              />
            </div>

            {/* No HP */}
            <div className="mb-7.5 w-full">
              <input
                type="tel"
                placeholder="No HP"
                name="phone"
                value={profileData.phone}
                onChange={(e) =>
                  setProfileData({ ...profileData, phone: e.target.value })
                }
                className="w-full border-b border-stroke pb-3.5"
              />
            </div>

            {/* Email */}
            <div className="mb-7.5 w-full">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
                className="w-full border-b border-stroke pb-3.5"
              />
            </div>

            {/* Media Sosial */}
            <div className="mb-7.5 w-full">
              <input
                type="text"
                placeholder="Facebook"
                name="facebook"
                value={profileData.facebook}
                onChange={(e) =>
                  setProfileData({ ...profileData, facebook: e.target.value })
                }
                className="w-full border-b border-stroke pb-3.5"
              />
            </div>
            <div className="mb-7.5 w-full">
              <input
                type="text"
                placeholder="Twitter"
                name="twitter"
                value={profileData.twitter}
                onChange={(e) =>
                  setProfileData({ ...profileData, twitter: e.target.value })
                }
                className="w-full border-b border-stroke pb-3.5"
              />
            </div>
            <div className="mb-7.5 w-full">
              <input
                type="text"
                placeholder="Instagram"
                name="instagram"
                value={profileData.instagram}
                onChange={(e) =>
                  setProfileData({ ...profileData, instagram: e.target.value })
                }
                className="w-full border-b border-stroke pb-3.5"
              />
            </div>

            {/* Tombol Simpan */}
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
            >
              Simpan
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EditProfile;
