import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-center text-xl shadow-sm p-4">React Tailwind Components</h1>
      <ul className="mt-2 flex flex-col w-screen gap-1 content-evenly sm:flex-wrap bg-gray-100 px-16 sm:px-0 py-8 h-[480px] overflow-auto text-gray-600">
        {[
          { path: "/accordion", label: "Accordion" },
          { path: "/alerts", label: "Alerts" },
          { path: "/autocomplete", label: "Autocomplete" },
          { path: "/breadcrumbs", label: "Breadcrumbs" },
          { path: "/carousel", label: "Carousel" },
          { path: "/checkbox", label: "Checkbox" },
          { path: "/chips", label: "Chips" },
          { path: "/circular-menu", label: "Circular Menu" },
          { path: "/circular-rotating-list", label: "Circular Rotating List" },
          { path: "/command-palette", label: "Command Palette" },
          { path: "/datepicker", label: "Date Picker" },
          { path: "/drawer", label: "Drawer" },
          { path: "/dropdown", label: "Dropdown" },
          { path: "/image-uploader", label: "Image Uploader" },
          { path: "/faq", label: "FAQ" },
          { path: "/footer", label: "Footer" },
          { path: "/form", label: "Form" },
          { path: "/image-hover", label: "Image Hover Effects" },
          { path: "/list-hover", label: "List hover Effects" },
          { path: "/masonry", label: "Masonry" },
          { path: "/mega-menu", label: "Mega menu" },
          { path: "/modal", label: "Modal" },
          { path: "/multiselect-menu", label: "Multiselect Menu" },
          { path: "/multistepform", label: "Multistep form" },
          { path: "/navbar", label: "Navbar" },
          { path: "/notification-badge", label: "Notification Badges" },
          { path: "/popconfirm", label: "Popconfirm" },
          { path: "/popover", label: "Popover" },
          { path: "/pricing", label: "Pricing" },
          { path: "/progress", label: "Progress" },
          { path: "/rating", label: "Rating" },
          { path: "/ripple", label: "Ripple" },
          { path: "/scroll-indicator", label: "Scroll Indicator" },
          { path: "/scrollspy", label: "Scrollspy" },
          { path: "/scroll-back-to-top-btn", label: "Scroll Back To Top Button" },
          { path: "/select-menu", label: "Select Menu" },
          { path: "/sidebar", label: "Sidebar" },
          { path: "/sidebar-with-submenu", label: "Sidebar with sub-menu" },
          { path: "/slider", label: "Slider" },
          { path: "/sortable-list", label: "Sortable List" },
          { path: "/speed-dial", label: "Speed Dial" },
          { path: "/stats-section", label: "Stats Section" },
          { path: "/switch", label: "Switch" },
          { path: "/table", label: "Table" },
          { path: "/tabs", label: "Tabs" },
          { path: "/testimonials", label: "Testimonials" },
          { path: "/timeline", label: "Timeline" },
          { path: "/toast", label: "Toast" },
          { path: "/tooltip", label: "Tooltip" },
          { path: "/tree-view", label: "Tree View" },
          { path: "/typewriter", label: "Typewriter" },
        ].map(({ path, label }) => (
          <Link to={path} key={path} className="self-start transition hover:text-indigo-600">
            {" "}
            {label}{" "}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Home;
