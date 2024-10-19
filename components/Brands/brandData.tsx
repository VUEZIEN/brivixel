import { FaLaptop, FaMobileAlt, FaTabletAlt, FaMousePointer, FaKeyboard, FaDesktop } from "react-icons/fa"; // Ikon dari react-icons
import { Brand } from "@/types/brand";

const brandData: Brand[] = [
  {
    id: 0.25,
    name: "Laptop Designer",
    href: "#",
    image: <FaLaptop />, // Ikon Laptop
    imageLight: <FaLaptop />,
  },
  {
    id: 0.3,
    name: "Mobile Designer",
    href: "#",
    image: <FaMobileAlt />, // Ikon HP (Mobile)
    imageLight: <FaMobileAlt />,
  },
  {
    id: 0.4,
    name: "Tablet Designer",
    href: "#",
    image: <FaTabletAlt />, // Ikon Tablet
    imageLight: <FaTabletAlt />,
  },
  {
    id: 0.5,
    name: "Pointer Expert",
    href: "#",
    image: <FaMousePointer />, // Ikon Pointer
    imageLight: <FaMousePointer />,
  },
  {
    id: 0.6,
    name: "Keyboard Designer",
    href: "#",
    image: <FaKeyboard />, // Ikon Keyboard
    imageLight: <FaKeyboard />,
  },
  {
    id: 0.7,
    name: "Desktop Designer",
    href: "#",
    image: <FaDesktop />, // Ikon Desktop
    imageLight: <FaDesktop />,
  },
];

export default brandData;
