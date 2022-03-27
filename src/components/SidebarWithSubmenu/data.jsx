import React from "react";

// Modify path,title, icons, subnav according to project
export const sidebarData = [
  {
    title: "Overview",
    path: "#",
    icon: <i className="fa-solid fa-home"></i>,
    subNav: [
      {
        title: "Users",
        path: "#",
        icon: <i className="fa-solid fa-user"></i>
      },
      {
        title: "Revenue",
        path: "#",
        icon: <i className="fa-solid fa-money-bill"></i>,
      },
    ]
  },
  {
    title: "Bookmarks",
    path: "#",
    icon: <i className="fa-solid fa-bookmark"></i>
  },
  {
    title: "Reports",
    path: "#",
    icon: <i className="fa-solid fa-paper-plane"></i>,
    subNav: [
      {
        title: "Type1 Reports",
        path: "#",
        icon: <i className="fa-solid fa-note-sticky"></i>,
        subNav: [
          {
            title: "TypeA Reports",
            path: "#",
            icon: <i className="fa-solid fa-map"></i>
          },
          {
            title: "TypeB Reports",
            path: "#",
            icon: <i className="fa-solid fa-newspaper"></i>
          },
        ]
      },
      {
        title: "Type2 Reports",
        path: "#",
        icon: <i className="fa-solid fa-copy"></i>
      },
      {
        title: "Type3 Reports",
        path: "#",
        icon: <i className="fa-solid fa-square-plus"></i>
      },
    ]
  },
  {
    title: "Products",
    path: "#",
    icon: <i className="fa-solid fa-home"></i>
  },
]