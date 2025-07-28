import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/about",
  },

  {
    id: 22,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Certification",
        newTab: false,
        path: "/certification",
      },
      {
        id: 34,
        title: "Auditing",
        newTab: false,
        path: "/auditing",
      },
      {
        id: 35,
        title: "Outsourcing",
        newTab: false,
        path: "/outsourcing",
      },
      {
        id: 35,
        title: "inspection",
        newTab: false,
        path: "/inspection",
      },
    ],
  },

  {
    id: 2.1,
    title: "Courses",
    newTab: false,
    path: "/courses",
  },


  {
    id: 23,
    title: "Sector",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Energy and Mining",
        newTab: false,
        path: "/energy_and_mining",
      },
      {
        id: 34,
        title: "Food and Agriculture",
        newTab: false,
        path: "/food_and_agriculture",
      },
      {
        id: 35,
        title: "Industrial sector",
        newTab: false,
        path: "/industrial_sector",
      },
      {
        id: 35,
        title: "Governance and Policy",
        newTab: false,
        path: "/government_and_policy",
      },
      {
        id: 35,
        title: "Technology and Media",
        newTab: false,
        path: "/technology_and_media",
      },
    ],
  },


  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
