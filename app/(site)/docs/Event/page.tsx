"use client";

import SidebarLink from "@/components/Docs/SidebarLink";
import { useEffect, useState } from "react";
import { FaCoins } from "react-icons/fa"; // Different coin icon for variety

function DailyReward() {
  const [coins, setCoins] = useState<number>(0);
  const [lastCollectedDate, setLastCollectedDate] = useState<Date | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>(""); 
  const [templateLink, setTemplateLink] = useState<string>("");

  const templates = [
    { name: "Desain Iklan", price: 30, imageUrl: "https://via.placeholder.com/150", link: "https://example.com/template1" },
    { name: "Desain Logo", price: 50, imageUrl: "https://via.placeholder.com/150", link: "https://example.com/template2" },
    { name: "Desain Web", price: 1500, imageUrl: "https://via.placeholder.com/150", link: "https://example.com/template3" },
    { name: "Desain Brosur", price: 75, imageUrl: "https://via.placeholder.com/150", link: "https://example.com/template4" },
    { name: "Desain Media Sosial", price: 100, imageUrl: "https://via.placeholder.com/150", link: "https://example.com/template5" },
    { name: "Desain Poster", price: 120, imageUrl: "https://via.placeholder.com/150", link: "https://example.com/template6" },
    { name: "Desain Kemasan", price: 200, imageUrl: "https://via.placeholder.com/150", link: "https://example.com/template7" },
    { name: "Desain Infografis", price: 150, imageUrl: "https://via.placeholder.com/150", link: "https://example.com/template8" },
  ];

  const saveData = (newCoins: number, newDate: Date) => {
    localStorage.setItem("coins", newCoins.toString());
    localStorage.setItem("lastCollectedDate", newDate.toISOString());
  };

  const collectCoins = () => {
    const currentDate = new Date();
    const lastCollectionTime = lastCollectedDate ? lastCollectedDate.getTime() : 0;

    if (!lastCollectedDate || (currentDate.getTime() - lastCollectionTime >= 86400000)) {
      const specificCoinOptions = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]; 
      const randomIndex = Math.floor(Math.random() * specificCoinOptions.length);
      const dailyCoinsFromSpecific = specificCoinOptions[randomIndex];
      const dailyCoinsFromRandom = Math.floor(Math.random() * 90) + 1;

      const dailyCoins = Math.random() < 0.5 ? dailyCoinsFromSpecific : dailyCoinsFromRandom;

      const newCoins = coins + dailyCoins;
      setCoins(newCoins);
      setPopupMessage(`Anda berhasil mengambil ${dailyCoins} koin!`);
      setShowPopup(true);
      setLastCollectedDate(currentDate);
      saveData(newCoins, currentDate);
    } else {
      const remainingTime = 86400000 - (currentDate.getTime() - lastCollectionTime);
      const remainingHours = Math.floor((remainingTime / 3600000) % 24);
      const remainingMinutes = Math.floor((remainingTime % 3600000) / 60000);
      setPopupMessage(`Anda sudah mengambil koin hari ini. Coba lagi dalam ${remainingHours} jam dan ${remainingMinutes} menit!`);
      setShowPopup(true);
    }
  };

  const redeemTemplate = (template: { price: number, link: string }) => {
    if (coins >= template.price) {
      setCoins(coins - template.price);
      setTemplateLink(template.link);
      saveData(coins - template.price, lastCollectedDate || new Date());
      setPopupMessage(`Template berhasil ditukarkan! Klik tombol di bawah untuk melihat.`);
      setShowPopup(true);
    } else {
      alert("Koin tidak mencukupi untuk menukarkan template ini.");
    }
  };

  useEffect(() => {
    const savedCoins = localStorage.getItem("coins");
    const savedLastCollectedDate = localStorage.getItem("lastCollectedDate");

    if (savedCoins) {
      setCoins(Number(savedCoins));
    }
    if (savedLastCollectedDate) {
      setLastCollectedDate(new Date(savedLastCollectedDate));
    }
  }, []);

  return (
    <div className="relative mt-8 p-6 border rounded-lg bg-white dark:bg-gray-900 dark:text-white shadow-lg transition-all">
      <div className="absolute top-4 right-4 flex items-center">
        <FaCoins className="text-4xl text-yellow-500" />
        <span className="ml-2 text-xl font-bold text-yellow-600 dark:text-yellow-400">{coins}</span>
      </div>

      <h2 className="text-2xl font-extrabold mb-4 text-primary">Mengumpulkan Koin</h2>
      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Kumpulkan koin setiap hari dan tukarkan untuk mendapatkan template desain grafis eksklusif.
      </p>
      
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={collectCoins} 
          className="flex items-center px-6 py-3 bg-yellow-500 rounded-md text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
        >
          Ambil Koin Hari Ini <FaCoins className="ml-2" />
        </button>
        <div className="text-right">
          <p className="text-lg font-semibold">Total Koin: <span className="text-yellow-600 dark:text-yellow-400">{coins}</span></p>
          <p className="text-sm">{lastCollectedDate ? `Terakhir diambil: ${lastCollectedDate.toLocaleString()}` : "Belum diambil."}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Template Desain Tersedia:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <div key={index} className="border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 overflow-hidden transition-transform transform hover:scale-105">
            <img src={template.imageUrl} alt={template.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-lg">{template.name}</h4>
              <p className="text-lg font-semibold">{template.price} Koin</p>
              <button 
                onClick={() => redeemTemplate(template)}
                className={`mt-2 w-full px-4 py-2 rounded-md transition-colors duration-200 ${coins < template.price ? "bg-gray-300 cursor-not-allowed" : "bg-primary text-white hover:bg-yellow-500"}`}
                disabled={coins < template.price}
              >
                Tukarkan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className={`transition-transform transform ${showPopup ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} bg-white dark:bg-gray-900 p-8 rounded-lg shadow-2xl border border-gray-300 dark:border-gray-700`}>
            <p className="text-lg font-semibold flex items-center text-center text-gray-800 dark:text-white mb-4">
              <FaCoins className="mr-2 text-yellow-500" /> {popupMessage}
            </p>
            {templateLink && (
              <a 
                href={templateLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-md transition-all hover:bg-yellow-500"
              >
                Lihat Template
              </a>
            )}
            <button 
              onClick={() => setShowPopup(false)} 
              className="mt-4 inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Main DocsPage component
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
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-4 py-8 lg:p-8">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white">
                  Kumpulkan Koin Harian
                </h1>
                <DailyReward />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
