import { FeatureTab } from "@/types/featureTab";
import { FaPaintBrush, FaClipboardCheck, FaCogs } from "react-icons/fa"; // Example icons from react-icons

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Kreatif",
    desc1: `Kreativitas dalam desain adalah kunci untuk menarik perhatian dan memberikan pengalaman yang unik. Kami menghadirkan solusi desain yang segar dan inovatif.`,
    desc2: `Setiap proyek mencerminkan pemikiran kreatif dan pendekatan yang disesuaikan untuk memenuhi kebutuhan klien.`,
    icon: <FaPaintBrush className="h-24 w-24" />, // Icon for Kreatif
  },
  {
    id: "tabTwo",
    title: "Profesional",
    desc1: `Desain yang profesional menciptakan kesan yang kuat dan membangun kepercayaan. Kami fokus pada kualitas dan detail untuk setiap elemen desain.`,
    desc2: `Pendekatan kami memastikan bahwa setiap proyek tidak hanya terlihat hebat, tetapi juga memenuhi standar industri yang tinggi.`,
    icon: <FaClipboardCheck className="h-24 w-24" />, // Icon for Profesional
  },
  {
    id: "tabThree",
    title: "Custom",
    desc1: `Kami menawarkan solusi desain yang sepenuhnya disesuaikan dengan kebutuhan klien. Setiap proyek dirancang untuk mencerminkan identitas dan nilai unik merek Anda.`,
    desc2: `Desain kustom memastikan bahwa produk akhir tidak hanya fungsional tetapi juga menciptakan koneksi yang mendalam dengan audiens target.`,
    icon: <FaCogs className="h-24 w-24" />, // Icon for Custom
  },
];

export default featuresTabData;
