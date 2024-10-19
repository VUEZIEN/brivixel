
import Kontak from "@/components/kontak/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Kontak - BRIVIXEL",
  description: "Ini adalah halaman Masuk untuk BRIVIXEL",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Kontak />
    </>
  );
};

export default Kontak;
