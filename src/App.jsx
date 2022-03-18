import { BrowserRouter, Routes, Route } from "react-router-dom"
import AccordionDemo from "./pages/AccordionDemo"
import AlertsDemo from "./pages/AlertsDemo"
import CarouselDemo from "./pages/CarouselDemo"
import ChipsDemo from "./pages/ChipsDemo"
import DropdownDemo from "./pages/DropdownDemo"
import Home from "./pages/home"
import MultistepFormDemo from "./pages/MultistepFormDemo"
import NavbarDemo from "./pages/NavbarDemo"
import NotificationBadgeDemo from "./pages/NotificationBadgeDemo"
import PopoverDemo from "./pages/PopoverDemo"
import RatingDemo from "./pages/RatingDemo"
import ScrollspyDemo from "./pages/ScrollspyDemo"
import ScrollToTopDemo from "./pages/ScrollToTopDemo"
import SidebarDemo from "./pages/SidebarDemo"
import TabsDemo from "./pages/TabsDemo"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<AccordionDemo />} />
          <Route path="/alerts" element={<AlertsDemo />} />
          <Route path="/carousel" element={<CarouselDemo />} />
          <Route path="/chips" element={<ChipsDemo />} />
          <Route path="/dropdown" element={<DropdownDemo />} />
          <Route path="/multistepform" element={<MultistepFormDemo />} />
          <Route path="/navbar" element={<NavbarDemo />} />
          <Route path="/notification-badge" element={<NotificationBadgeDemo />} />
          <Route path="/popover" element={<PopoverDemo />} />
          <Route path="/rating" element={<RatingDemo />} />
          <Route path="/scrollspy" element={<ScrollspyDemo />} />
          <Route path="/scroll-back-to-top-btn" element={<ScrollToTopDemo />} />
          <Route path="/sidebar" element={<SidebarDemo />} />
          <Route path="/tabs" element={<TabsDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
