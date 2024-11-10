"use client";
import SidebarLink from "@/components/Docs/SidebarLink";
import { useState, useEffect } from "react";
import jsPDF from "jspdf"; // Import jsPDF for PDF generation

const questions = [
  {
    question:
      "Jelaskan bagaimana prinsip hierarki visual dalam desain UI dapat memengaruhi cara pengguna berinteraksi dengan antarmuka. Sebutkan elemen-elemen yang dapat digunakan untuk menciptakan hierarki yang efektif dan berikan contoh aplikasi yang menerapkannya dengan baik.",
    options: [
      "A. Hierarki visual tidak penting dalam desain UI.",
      "B. Menggunakan ukuran, warna, dan penempatan elemen untuk menunjukkan informasi penting.",
      "C. Mengabaikan pengaturan elemen dan hanya fokus pada estetika.",
      "D. Semua elemen harus memiliki ukuran dan warna yang sama untuk konsistensi.",
      "E. Hanya menggunakan gambar untuk menarik perhatian pengguna.",
    ],
    correctAnswer:
      "B. Menggunakan ukuran, warna, dan penempatan elemen untuk menunjukkan informasi penting.",
  },
  {
    question:
      "Dalam konteks desain UX, diskusikan pentingnya memahami perilaku pengguna melalui metode penelitian seperti wawancara dan survei. Bagaimana data yang diperoleh dari penelitian ini dapat diterapkan dalam proses desain untuk meningkatkan pengalaman pengguna?",
    options: [
      "A. Penelitian pengguna tidak perlu dilakukan, karena desainer sudah tahu apa yang terbaik.",
      "B. Data dari penelitian dapat membantu desainer membuat keputusan berdasarkan asumsi.",
      "C. Menggunakan data untuk mengidentifikasi masalah dan kebutuhan pengguna, sehingga desain dapat disesuaikan.",
      "D. Penelitian hanya diperlukan jika produk gagal di pasaran.",
      "E. Semua desainer harus menggunakan metode yang sama dalam penelitian mereka.",
    ],
    correctAnswer:
      "C. Menggunakan data untuk mengidentifikasi masalah dan kebutuhan pengguna, sehingga desain dapat disesuaikan.",
  },
  {
    question:
      "Jelaskan perbedaan antara prototyping dan wireframing dalam desain produk digital. Kapan sebaiknya masing-masing digunakan dalam siklus desain, dan apa manfaat dari masing-masing metode dalam mengkomunikasikan ide kepada pemangku kepentingan?",
    options: [
      "A. Prototyping dan wireframing adalah hal yang sama dan bisa digunakan secara bergantian.",
      "B. Wireframing digunakan untuk ide awal, sementara prototyping untuk validasi interaksi dan fungsionalitas.",
      "C. Wireframing tidak diperlukan jika ada prototyping.",
      "D. Prototyping hanya perlu dilakukan pada tahap akhir desain.",
      "E. Keduanya tidak penting dalam desain produk digital.",
    ],
    correctAnswer:
      "D. Prototyping hanya perlu dilakukan pada tahap akhir desain.",
  },
  {
    question:
      "Bagaimana pengaruh pengalaman pengguna (UX) terhadap konversi dalam desain web? Diskusikan elemen-elemen UX yang dapat meningkatkan tingkat konversi, serta contoh konkret dari situs web yang telah berhasil menerapkan strategi ini.",
    options: [
      "A. UX tidak berhubungan dengan konversi.",
      "B. Mengabaikan pengalaman pengguna tidak akan mempengaruhi tingkat konversi.",
      "C. Elemen seperti navigasi yang intuitif, kecepatan pemuatan, dan call to action yang jelas dapat meningkatkan konversi.",
      "D. Hanya desain visual yang penting untuk meningkatkan konversi.",
      "E. Konversi dapat ditingkatkan tanpa mempertimbangkan UX.",
    ],
    correctAnswer: "E. Konversi dapat ditingkatkan tanpa mempertimbangkan UX.",
  },
  {
    question:
      "Jelaskan pentingnya aksesibilitas dalam desain antarmuka dan bagaimana desainer dapat memastikan bahwa produk mereka dapat diakses oleh semua pengguna, termasuk mereka yang memiliki disabilitas. Berikan contoh alat atau standar yang dapat digunakan untuk mencapai hal ini.",
    options: [
      "A. Aksesibilitas hanya penting untuk produk yang ditujukan untuk penyandang disabilitas.",
      "B. Menggunakan warna dan kontras yang tepat, serta menyediakan teks alternatif untuk gambar.",
      "C. Aksesibilitas tidak berpengaruh pada pengguna umum.",
      "D. Semua desain harus selalu mengikuti pedoman yang sama.",
      "E. Hanya produk berbasis web yang perlu mempertimbangkan aksesibilitas.",
    ],
    correctAnswer:
      "A. Aksesibilitas hanya penting untuk produk yang ditujukan untuk penyandang disabilitas.",
  },
  {
    question:
      "Diskusikan peran psikologi dalam desain grafis dan UI/UX. Bagaimana pemahaman terhadap prinsip-prinsip psikologi dapat membantu desainer menciptakan antarmuka yang lebih efektif dan menarik bagi pengguna?",
    options: [
      "A. Psikologi tidak ada hubungannya dengan desain.",
      "B. Memahami bagaimana warna dan bentuk mempengaruhi emosi pengguna dapat membantu dalam perancangan.",
      "C. Hanya estetika yang penting dalam desain, bukan psikologi.",
      "D. Pengguna akan selalu bereaksi sama terhadap semua desain.",
      "E. Hanya beberapa desainer yang perlu mempelajari psikologi.",
    ],
    correctAnswer:
      "B. Memahami bagaimana warna dan bentuk mempengaruhi emosi pengguna dapat membantu dalam perancangan.",
  },
  {
    question:
      "Jelaskan bagaimana prinsip desain inklusif dapat diterapkan dalam UI/UX. Apa tantangan yang mungkin dihadapi desainer saat mencoba menciptakan antarmuka yang dapat diakses oleh berbagai kelompok pengguna, termasuk yang memiliki kebutuhan khusus?",
    options: [
      "A. Desain inklusif tidak perlu dipertimbangkan.",
      "B. Menyediakan berbagai opsi dan fleksibilitas dalam penggunaan antarmuka dapat membantu.",
      "C. Desainer tidak perlu berkolaborasi dengan pengguna.",
      "D. Hanya desainer yang berpengalaman yang dapat menerapkan desain inklusif.",
      "E. Semua pengguna memiliki kebutuhan yang sama.",
    ],
    correctAnswer:
      "B. Menyediakan berbagai opsi dan fleksibilitas dalam penggunaan antarmuka dapat membantu.",
  },
  {
    question:
      "Bagaimana analisis data pengguna dapat membantu desainer dalam meningkatkan produk digital? Diskusikan metode yang dapat digunakan untuk mengumpulkan dan menganalisis data ini, serta bagaimana hasil analisis dapat diterapkan dalam iterasi desain.",
    options: [
      "A. Analisis data pengguna tidak penting dalam proses desain.",
      "B. Menggunakan analitik web, survei, dan pengujian pengguna untuk mengumpulkan data.",
      "C. Desainer tidak perlu menganalisis data pengguna, cukup mengikuti tren.",
      "D. Semua data pengguna sama pentingnya.",
      "E. Hanya data kuantitatif yang penting.",
    ],
    correctAnswer:
      "B. Menggunakan analitik web, survei, dan pengujian pengguna untuk mengumpulkan data.",
  },
  {
    question:
      "Jelaskan bagaimana storytelling dapat digunakan dalam desain UI/UX untuk menciptakan pengalaman pengguna yang lebih mendalam dan bermakna. Apa saja elemen kunci dari storytelling yang dapat diterapkan dalam desain?",
    options: [
      "A. Storytelling tidak relevan dalam desain.",
      "B. Menggunakan narasi untuk menghubungkan elemen visual dan konten.",
      "C. Hanya menggunakan teks panjang tanpa gambar.",
      "D. Storytelling hanya penting untuk iklan.",
      "E. Hanya satu elemen dari cerita yang perlu ditekankan.",
    ],
    correctAnswer:
      "B. Menggunakan narasi untuk menghubungkan elemen visual dan konten.",
  },
  {
    question:
      "Diskusikan bagaimana teknologi terkini seperti AI dan machine learning dapat mengubah cara desainer mendekati UI/UX. Apa potensi manfaat dan tantangan yang mungkin dihadapi dalam mengintegrasikan teknologi ini dalam proses desain?",
    options: [
      "A. Teknologi tidak memiliki dampak pada desain.",
      "B. AI dapat membantu menganalisis perilaku pengguna dan memberikan rekomendasi desain.",
      "C. Desainer tidak perlu memahami teknologi untuk menciptakan desain yang baik.",
      "D. Hanya perusahaan besar yang dapat menggunakan AI.",
      "E. AI tidak relevan dalam desain UI/UX.",
    ],
    correctAnswer: "D. Hanya perusahaan besar yang dapat menggunakan AI.",
  },
  {
    question:
      "Apa yang dimaksud dengan desain berpusat pada pengguna (user-centered design) dan bagaimana pendekatan ini dapat meningkatkan hasil akhir dari produk digital? Sebutkan langkah-langkah kunci dalam proses desain berpusat pada pengguna.",
    options: [
      "A. Desain berpusat pada pengguna tidak diperlukan.",
      "B. Mengutamakan kebutuhan dan preferensi pengguna dalam setiap tahap desain.",
      "C. Hanya menggunakan asumsi pribadi dalam proses desain.",
      "D. Desain tidak perlu melibatkan pengguna sama sekali.",
      "E. Proses desain harus selalu mengikuti metode yang sama.",
    ],
    correctAnswer:
      "B. Mengutamakan kebutuhan dan preferensi pengguna dalam setiap tahap desain.",
  },
  {
    question:
      "Bagaimana penggunaan microinteractions dalam desain UI dapat meningkatkan pengalaman pengguna? Diskusikan elemen-elemen microinteractions dan contoh situasi di mana mereka dapat diterapkan secara efektif.",
    options: [
      "A. Microinteractions tidak penting dalam desain.",
      "B. Microinteractions memberikan umpan balik yang halus dan meningkatkan interaksi pengguna.",
      "C. Hanya menggunakan elemen yang besar dan mencolok dalam desain.",
      "D. Microinteractions hanya berlaku untuk aplikasi mobile.",
      "E. Semua interaksi harus bersifat statis.",
    ],
    correctAnswer:
      "B. Microinteractions memberikan umpan balik yang halus dan meningkatkan interaksi pengguna.",
  },
  {
    question:
      "Diskusikan bagaimana desainer dapat mempertimbangkan faktor emosional dalam desain antarmuka. Apa pentingnya menciptakan hubungan emosional dengan pengguna, dan bagaimana hal ini dapat mempengaruhi kesuksesan produk?",
    options: [
      "A. Faktor emosional tidak penting dalam desain.",
      "B. Membuat antarmuka yang menyenangkan dan intuitif dapat membangun keterikatan pengguna.",
      "C. Hanya fokus pada fungsionalitas tanpa mempertimbangkan emosi.",
      "D. Emosi pengguna tidak mempengaruhi penggunaan produk.",
      "E. Semua desain harus berfokus pada logika dan efisiensi.",
    ],
    correctAnswer:
      "B. Membuat antarmuka yang menyenangkan dan intuitif dapat membangun keterikatan pengguna.",
  },
  {
    question:
      "Jelaskan konsep desain responsif dalam konteks pengembangan web. Apa saja teknik yang dapat digunakan untuk memastikan bahwa situs web dapat diakses dengan baik di berbagai perangkat?",
    options: [
      "A. Desain responsif tidak diperlukan jika desain sudah bagus.",
      "B. Menggunakan media queries dan grid layout untuk menyesuaikan tampilan di berbagai ukuran layar.",
      "C. Hanya fokus pada desktop tanpa mempertimbangkan perangkat mobile.",
      "D. Desain responsif hanya untuk situs web besar.",
      "E. Memastikan semua elemen memiliki ukuran yang sama untuk konsistensi.",
    ],
    correctAnswer:
      "C. Hanya fokus pada desktop tanpa mempertimbangkan perangkat mobile.",
  },
  {
    question:
      "Diskusikan pentingnya tipografi dalam desain grafis. Bagaimana pemilihan jenis huruf dan pengaturan teks dapat mempengaruhi persepsi dan pengalaman pengguna?",
    options: [
      "A. Tipografi tidak penting selama teks dapat dibaca.",
      "B. Memilih jenis huruf yang tepat dan memperhatikan jarak antar huruf dapat meningkatkan keterbacaan.",
      "C. Semua teks harus menggunakan jenis huruf yang sama.",
      "D. Hanya menggunakan huruf besar untuk menarik perhatian.",
      "E. Tipografi tidak berpengaruh pada desain secara keseluruhan.",
    ],
    correctAnswer: "A. Tipografi tidak penting selama teks dapat dibaca.",
  },
  {
    question:
      "Apa yang dimaksud dengan desain berkelanjutan dan bagaimana prinsip-prinsip ini dapat diterapkan dalam praktik desain sehari-hari? Berikan contoh produk yang telah berhasil menerapkan desain berkelanjutan.",
    options: [
      "A. Desain berkelanjutan tidak relevan dalam industri modern.",
      "B. Menggunakan bahan daur ulang dan mempertimbangkan dampak lingkungan dalam setiap tahap desain.",
      "C. Hanya produk yang menggunakan teknologi terbaru yang penting.",
      "D. Semua desain harus terlihat sama agar berkelanjutan.",
      "E. Hanya desain yang tidak mempengaruhi lingkungan yang dianggap berkelanjutan.",
    ],
    correctAnswer:
      "B. Menggunakan bahan daur ulang dan mempertimbangkan dampak lingkungan dalam setiap tahap desain.",
  },
  {
    question:
      "Jelaskan peran wireframe dalam proses desain UI. Apa manfaat utama dari membuat wireframe sebelum memulai tahap desain visual?",
    options: [
      "A. Wireframe tidak perlu dibuat jika desainer sudah memiliki gambaran yang jelas.",
      "B. Wireframe membantu mengatur elemen dengan baik dan mengkomunikasikan ide kepada pemangku kepentingan.",
      "C. Hanya fokus pada desain visual dari awal tanpa wireframe.",
      "D. Wireframe tidak memberikan manfaat bagi proses desain.",
      "E. Setiap desain harus dimulai dengan wireframe yang rumit.",
    ],
    correctAnswer: "D. Wireframe tidak memberikan manfaat bagi proses desain.",
  },
  {
    question:
      "Bagaimana prinsip gamifikasi dapat diterapkan dalam desain antarmuka untuk meningkatkan keterlibatan pengguna? Diskusikan elemen-elemen gamifikasi yang efektif dan contoh aplikasi yang menggunakan strategi ini.",
    options: [
      "A. Gamifikasi hanya berlaku untuk aplikasi game.",
      "B. Menggunakan poin, lencana, dan tantangan untuk mendorong interaksi pengguna.",
      "C. Gamifikasi tidak berpengaruh pada keterlibatan pengguna.",
      "D. Semua aplikasi harus menggunakan gamifikasi untuk berhasil.",
      "E. Gamifikasi hanya untuk produk yang ditujukan untuk anak-anak.",
    ],
    correctAnswer:
      "E. Gamifikasi hanya untuk produk yang ditujukan untuk anak-anak.",
  },
  {
    question:
      "Jelaskan pentingnya penelitian kompetitor dalam proses desain produk. Bagaimana analisis terhadap produk serupa dapat memberikan wawasan berharga bagi desainer?",
    options: [
      "A. Penelitian kompetitor tidak diperlukan jika desainer sudah berpengalaman.",
      "B. Menganalisis kekuatan dan kelemahan produk kompetitor dapat membantu menemukan peluang desain.",
      "C. Hanya fokus pada desain tanpa mempertimbangkan kompetitor.",
      "D. Semua produk harus selalu mengikuti tren kompetitor.",
      "E. Penelitian kompetitor hanya untuk perusahaan besar.",
    ],
    correctAnswer:
      "B. Menganalisis kekuatan dan kelemahan produk kompetitor dapat membantu menemukan peluang desain.",
  },
  {
    question:
      "Bagaimana dampak penggunaan warna dalam desain terhadap psikologi pengguna? Diskusikan bagaimana warna dapat mempengaruhi emosi dan perilaku pengguna.",
    options: [
      "A. Warna tidak mempengaruhi psikologi pengguna.",
      "B. Memahami makna warna dapat membantu menciptakan respons emosional yang diinginkan.",
      "C. Hanya menggunakan warna yang menarik tanpa mempertimbangkan makna.",
      "D. Semua warna harus digunakan secara acak.",
      "E. Hanya beberapa warna yang penting dalam desain.",
    ],
    correctAnswer:
      "C. Hanya menggunakan warna yang menarik tanpa mempertimbangkan makna.",
  },
];

export default function RewardsPage() {
  const [progress, setProgress] = useState(0);
  const [reward, setReward] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timer, setTimer] = useState(20);
  const [isChallengeComplete, setIsChallengeComplete] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [timerActive, setTimerActive] = useState(false);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hasParticipated, setHasParticipated] = useState(() => {
    // Check localStorage to see if the user has already participated
    // return localStorage.getItem("hasParticipated") === "true";
  });

  useEffect(() => {
    const handleCopyCut = (e) => {
      e.preventDefault();
      alert("Maaf, fitur salin dan tempel tidak diizinkan di sini.");
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("Fitur ini tidak mendukung klik kanan.");
    };

    document.addEventListener("copy", handleCopyCut);
    document.addEventListener("cut", handleCopyCut);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("copy", handleCopyCut);
      document.removeEventListener("cut", handleCopyCut);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    // Mencegah pemilihan teks
    const preventSelect = (e) => {
      e.preventDefault();
    };

    const preventContextMenu = (e) => {
      e.preventDefault(); // Mencegah klik kanan
    };

    const preventCopy = (e) => {
      e.preventDefault(); // Mencegah penyalinan
    };

    // Menambahkan event listener
    document.addEventListener("selectstart", preventSelect);
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("copy", preventCopy);

    return () => {
      // Menghapus event listener saat komponen di-unmount
      document.removeEventListener("selectstart", preventSelect);
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("copy", preventCopy);
    };
  }, []);

  useEffect(() => {
    if (timer > 0 && timerActive) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleChallengeCompletion();
    }
  }, [timer, timerActive]);

  const handleChallengeCompletion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(20);
      setSelectedOption("");
    } else {
      setIsChallengeComplete(true);
      setIsModalOpen(false);
      // alert(
      //   `Tantangan selesai! Nilai Anda: ${progress}/100. ${
      //     reward ? reward : ""
      //   }`,
      // );
    }
  };

  const handleModalOpen = () => {
    if (hasParticipated) {
      alert("Anda sudah mengikuti tantangan ini.");
      return;
    }
    setIsModalOpen(true);
    setTimer(20);
    setTimerActive(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedOption("");
    setValidationError("");
    setTimerActive(false);
  };

  const handleChallengeSubmit = (e) => {
    e.preventDefault();

    if (selectedOption === "") {
      setValidationError("Pilih salah satu opsi.");
      return;
    }

    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
      setProgress((prev) => Math.min(prev + 5, 100));
      if (progress >= 90) {
        setReward("Selamat! Anda telah mendapatkan kupon!");
      }
    }

    setHasParticipated(true);
    localStorage.setItem("hasParticipated", "true"); // Save participation status
    handleChallengeCompletion();
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();

    const pdf = new jsPDF("portrait", "pt", "a4");

    // Set a light lavender background
    pdf.setFillColor(230, 230, 250);
    pdf.rect(
      0,
      0,
      pdf.internal.pageSize.width,
      pdf.internal.pageSize.height,
      "F",
    );

    // Header section
    pdf.setFontSize(26);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(50, 50, 255); // Deep blue
    pdf.text("Hasil Nilai", pdf.internal.pageSize.width / 2, 50, {
      align: "center",
    });

    // Branding
    pdf.setFontSize(16);
    pdf.setTextColor(120);
    pdf.setFont("courier", "normal");
    pdf.text("Di Desain oleh Brivixel", pdf.internal.pageSize.width / 2, 70, {
      align: "center",
    });

    // Logo or placeholder image (optional)
    pdf.addImage("https://via.placeholder.com/150", "JPEG", 40, 40, 100, 100);

    // Custom header background with rounded rectangle
    pdf.setFillColor(100, 100, 250); // Light blue
    pdf.roundedRect(30, 120, pdf.internal.pageSize.width - 60, 40, 10, 10, "F");

    // Contact information section
    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(255, 255, 255); // White text
    pdf.text("Pengiriman data Nilai", 40, 145);

    // User information fields
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(50, 50, 50);
    pdf.text(`Nama: ${name}`, 40, 200);
    pdf.text(`No. Telepon: ${phoneNumber}`, 40, 230);

    // Score section with highlighted box
    const scoreBoxX = 30; // X position for the score box
    const scoreBoxY = 270; // Y position for the score box
    const scoreBoxWidth = pdf.internal.pageSize.width - 60; // Width of the score box
    const scoreBoxHeight = 40; // Height of the score box

    pdf.setFontSize(24); // Font size for better visibility
    pdf.setTextColor(255, 255, 255); // White text for score box
    pdf.setFillColor(0, 100, 255); // Blue background for score box
    pdf.rect(scoreBoxX, scoreBoxY, scoreBoxWidth, scoreBoxHeight, "F"); // Draw a filled rectangle

    // Prepare the text to be centered
    const scoreText = `Hasil Nilai Akhir: ${progress}/100`;
    const textWidth = pdf.getTextWidth(scoreText);
    const textX = scoreBoxX + (scoreBoxWidth - textWidth) / 2; // Center text horizontally
    const textY = scoreBoxY + scoreBoxHeight / 2 + pdf.getFontSize() / 3; // Center text vertically

    pdf.setTextColor(255, 255, 255); // White text
    pdf.text(scoreText, textX, textY); // Draw centered text

    // Reward text
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(reward ? reward : "", 20, 320); // Adjusted Y position to avoid overlap

    // Divider line
    pdf.setDrawColor(150);
    pdf.setLineWidth(1);
    pdf.line(40, 340, pdf.internal.pageSize.width - 40, 340);

    // Footer
    pdf.setFontSize(12);
    pdf.setTextColor(100, 100, 100);
    pdf.setFont("courier", "italic");
    pdf.text(
      "Terima kasih atas kiriman Anda! Kami akan segera menghubungi Anda.",
      40,
      360,
    );

    // Multiple "BRIVIXEL" watermarks with light color
    pdf.setFontSize(40);
    pdf.setTextColor(200, 200, 200); // Light gray for watermark text
    const watermarks = [{ x: 50, y: 400, angle: -45 }];

    pdf.setFontSize(36); // Adjust the font size
    pdf.setTextColor(150); // Set a light grey color for a transparent effect

    watermarks.forEach(({ x, y, angle }) => {
      pdf.saveGraphicsState();
      pdf.text("BRIVIXEL", x, y); // Place text at specified coordinates
      pdf.restoreGraphicsState();
    });

    // Save the PDF
    pdf.save("data-form.pdf");

    alert("Data telah dikirim dan PDF segera diunduh!");
  };

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {/* Sidebar */}
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] mr-1 rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-gray-800">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>
  
            {/* Main Content */}
            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three rounded-sm bg-white px-8 py-11 dark:bg-gray-900 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl lg:text-3xl">
                  Bergabunglah dalam Permainan dan Menangkan Hadiah di BRIVIXEL!
                </h1>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Selamat datang di tantangan kami! Ikuti langkah-langkah
                  berikut untuk menyelesaikan 20 soal dan menangkan hadiah
                  menarik:
                </p>
  
                <div className="text-body-color dark:text-body-color-dark text-base">
                  <ol className="ml-6 list-decimal">
                    <li>
                      <a
                        href="https://www.instagram.com/zizzz.dul_/"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ikuti kami di Instagram
                      </a>{" "}
                      dan raih kesempatan untuk memulai tantangan seru dari
                      kami!
                    </li>
                    <li>
                      <b>🏆 Mulai Tantangan:</b> Siapkan diri Anda untuk
                      menjawab 20 soal dalam waktu 20 detik setiap soal.
                    </li>
                    <li>
                      <b>🚫 Tidak menyediakan Copy-Paste:</b> Fitur Copy-Paste
                      di halaman ini telah dinonaktifkan!
                    </li>
                    <li>
                      <b>🎁 Dapatkan Hadiah:</b> Setelah menyelesaikan semua
                      soal dengan nilai minimum 85, Anda berhak mendapatkan
                      hadiah menarik dari kami!
                    </li>
                  </ol>
  
                  <p>
                    Bagi para pemenang, kami menyediakan hadiah berupa saldo
                    dompet digital, voucher belanja, layanan gratis dan premium,
                    serta akses ke webinar atau kelas online gratis. Tingkatkan
                    keterampilan dan produktivitas desain Anda bersama kami!
                  </p>
                </div>
  
                <h2 className="mb-5 mt-10 text-center text-2xl font-bold text-gray-800">
                  Hadiah Menanti:
                </h2>
                <div className="mt-4 flex flex-col items-center">
                  <div
                    onClick={handleModalOpen}
                    className="transform cursor-pointer rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    Mulai Tantangan
                  </div>
                  {isChallengeComplete && (
                    <p className="mt-4 text-center text-lg font-semibold text-green-600">
                      Tantangan selesai! Terima kasih telah berpartisipasi!
                    </p>
                  )}
                </div>
{/* Enhanced Modal for Challenge */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md transition-opacity duration-300 ease-out">
    <div className="relative rounded-2xl bg-white p-10 dark:bg-gray-900 mt-20 max-h-[80vh] overflow-y-auto shadow-2xl transform transition-transform duration-500 ease-in-out scale-95 hover:scale-100 animate-modalEntrance border border-gray-300 dark:border-gray-700">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleModalClose}
          className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-200"
        >
          ✕
        </button>
      </div>
      <h2 className="text-2xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6 animate-fadeIn tracking-wide drop-shadow-lg">
        {questions[currentQuestionIndex].question}
      </h2>
      <form onSubmit={handleChallengeSubmit}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <div
            key={index}
            className="mt-4 flex items-center p-3 rounded-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            <input
              type="radio"
              id={`option-${index}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              required
              className="h-6 w-6 text-blue-600 focus:ring-blue-500 transition-transform transform hover:scale-110 duration-150"
            />
            <label htmlFor={`option-${index}`} className="ml-4 text-gray-700 dark:text-gray-300 text-lg font-medium">
              {option}
            </label>
          </div>
        ))}
        {validationError && (
          <p className="mt-2 text-red-600 text-sm animate-fadeIn">
            {validationError}
          </p>
        )}
        <button
          type="submit"
          className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-white font-semibold hover:from-blue-700 hover:to-blue-800 shadow-lg transition-transform transform hover:scale-105 duration-200 animate-buttonBounce tracking-wide"
        >
          Kirim Jawaban
        </button>
      </form>

      <div className="mt-8 flex items-center justify-center">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 animate-fadeIn">
          Waktu tersisa:{" "}
          <span className={`font-semibold ${timer < 10 ? "text-red-500 animate-pulse" : "text-green-500"}`}>
            {timer} detik
          </span>
        </p>
      </div>
    </div>
  </div>
)}


        {/* //di atas untuk UI soalnya */}
  
        <form onSubmit={handleFinalSubmit} className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-2xl dark:bg-gray-900 transition-all duration-300">
  <div className="mb-6">
    <label htmlFor="name" className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
      Nama:
    </label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      placeholder="Masukkan nama Anda"
      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="phone" className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
      No. Telepon:
    </label>
    <input
      type="tel"
      id="phone"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      required
      placeholder="Masukkan no. telepon Anda"
      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm"
    />
  </div>

  <div className="mb-4 text-base text-gray-600 dark:text-gray-300">
    <strong className="text-red-600 dark:text-red-500">Harap mengerjakan terlebih dahulu Tantangan Brivixel!</strong>
  </div>

  <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6">
    <button
      type="submit"
      className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
    >
      Unduh Nilai
    </button>
    
    <button
      type="button"
      onClick={() => window.open("https://wa.me/6287782535212", "_blank")}
      className="flex-1 mt-4 sm:mt-0 rounded-full bg-gradient-to-r from-red-400 to-red-500 text-white font-semibold py-3 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
    >
      Kirimkan
    </button>
  </div>
</form>

              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .no-select {
          user-select: none;
        }
      `}</style>
    </>
  );
}  