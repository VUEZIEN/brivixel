"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Nama Pengguna",
    email: "user@gmail.com",
    phone: "08123456789",
    bio: "Desainer grafis dengan lebih dari 5 tahun pengalaman.",
    profilePicture: "/images/user-profile.jpg",
    facebook: "",
    twitter: "",
    instagram: "",
  });

  useEffect(() => {
    // Ambil data profil dari localStorage
    const storedProfile = localStorage.getItem("profileData");
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      // Perbarui state user dengan data dari localStorage
      setUser((prevUser) => ({
        ...prevUser,
        bio: parsedProfile.bio || prevUser.bio,
        phone: parsedProfile.phone || prevUser.phone,
        email: parsedProfile.email || prevUser.email,
        profilePicture: parsedProfile.photo || prevUser.profilePicture,
        facebook: parsedProfile.facebook || prevUser.facebook,
        twitter: parsedProfile.twitter || prevUser.twitter,
        instagram: parsedProfile.instagram || prevUser.instagram,
      }));
    }
  }, []);

  return (
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
          className="animate_top rounded-lg bg-white px-7.5 pt-10 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
        >
          <h2 className="mb-8 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
            Profil Akun
          </h2>
          <div className="flex flex-col items-center">
            <Image
              src={user.profilePicture || "/images/default-profile.jpg"}
              alt="Foto Profil"
              width={150}  // Width
              height={150} // Height
              className="rounded-full mb-4" // Ensures the image is circular
            />
            <h3 className="text-2xl font-semibold mb-2">{user.name}</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6 text-center">
              {user.bio}
            </p>

            <div className="flex flex-col gap-3 items-center">
              <p className="text-lg">Email: {user.email}</p>
              <p className="text-lg">Telepon: {user.phone}</p>
              <p className="text-lg">Facebook: {user.facebook || 'N/A'}</p>
              <p className="text-lg">Twitter: {user.twitter || 'N/A'}</p>
              <p className="text-lg">Instagram: {user.instagram || 'N/A'}</p>
            </div>

            {/* Horizontal line above the button */}
            <hr className="my-6 w-full border-gray-300 dark:border-gray-600" />

            <Link href="/edit-profile">
              <button className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primary-dark">
                Edit Profil
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserProfile;
