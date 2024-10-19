import { Menu } from "@/types/menu";

const dataMenu: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Keunggulan",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Dokumen",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "Halaman",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Profil",
        newTab: false,
        path: "/akun",
      },
      {
        id: 35,
        title: "Dokumen",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Dukungan",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Dukungan",
    newTab: false,
    path: "/support",
  },
];

export default dataMenu;
