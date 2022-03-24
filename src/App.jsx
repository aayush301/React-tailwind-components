import { BrowserRouter, Routes, Route } from "react-router-dom"
import AccordionDemo from "./pages/AccordionDemo"
import AlertsDemo from "./pages/AlertsDemo"
import CarouselDemo from "./pages/CarouselDemo"
import ChipsDemo from "./pages/ChipsDemo"
import DropdownDemo from "./pages/DropdownDemo"
import FormDemo from "./pages/FormDemo"
import Home from "./pages/home"
import ListHoverDemo from "./pages/ListHoverDemo"
import ModalDemo from "./pages/ModalDemo"
import MultistepFormDemo from "./pages/MultistepFormDemo"
import NavbarDemo from "./pages/NavbarDemo"
import NotificationBadgeDemo from "./pages/NotificationBadgeDemo"
import PopoverDemo from "./pages/PopoverDemo"
import RatingDemo from "./pages/RatingDemo"
import ScrollspyDemo from "./pages/ScrollspyDemo"
import ScrollToTopDemo from "./pages/ScrollToTopDemo"
import SidebarDemo from "./pages/SidebarDemo"
import TableDemo from "./pages/TableDemo"
import TabsDemo from "./pages/TabsDemo"
import TimelineDemo from "./pages/TimelineDemo"
import ToastDemo from "./pages/ToastDemo"
import TooltipDemo from "./pages/TooltipDemo"

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
          <Route path="/form" element={<FormDemo />} />
          <Route path="/list-hover" element={<ListHoverDemo />} />
          <Route path="/modal" element={<ModalDemo />} />
          <Route path="/multistepform" element={<MultistepFormDemo />} />
          <Route path="/navbar" element={<NavbarDemo />} />
          <Route path="/notification-badge" element={<NotificationBadgeDemo />} />
          <Route path="/popover" element={<PopoverDemo />} />
          <Route path="/rating" element={<RatingDemo />} />
          <Route path="/scrollspy" element={<ScrollspyDemo />} />
          <Route path="/scroll-back-to-top-btn" element={<ScrollToTopDemo />} />
          <Route path="/sidebar" element={<SidebarDemo />} />
          <Route path="/table" element={<TableDemo />} />
          <Route path="/tabs" element={<TabsDemo />} />
          <Route path="/timeline" element={<TimelineDemo />} />
          <Route path="/toast" element={<ToastDemo />} />
          <Route path="/tooltip" element={<TooltipDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
