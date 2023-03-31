import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordionDemo from "./pages/AccordionDemo";
import AlertsDemo from "./pages/AlertsDemo";
import AutocompleteDemo from "./pages/AutocompleteDemo";
import CarouselDemo from "./pages/CarouselDemo";
import CheckboxDemo from "./pages/CheckboxDemo";
import ChipsDemo from "./pages/ChipsDemo";
import CircularMenuDemo from "./pages/CircularMenuDemo";
import CircularRotatingListDemo from "./pages/CircularRotatingListDemo";
import CommandPaletteDemo from "./pages/CommandPaletteDemo";
import DatePickerDemo from "./pages/DatePickerDemo";
import DrawerDemo from "./pages/DrawerDemo";
import DropdownDemo from "./pages/DropdownDemo";
import ImageUploaderDemo from "./pages/ImageUploaderDemo";
import FaqDemo from "./pages/FaqDemo";
import FormDemo from "./pages/FormDemo";
import Home from "./pages/Home";
import ImageHoverDemo from "./pages/ImageHoverDemo";
import ListHoverDemo from "./pages/ListHoverDemo";
import MasonryDemo from "./pages/MasonryDemo";
import MegaMenuDemo from "./pages/MegaMenuDemo";
import ModalDemo from "./pages/ModalDemo";
import MultiselectMenuDemo from "./pages/MultiselectMenuDemo";
import MultistepFormDemo from "./pages/MultistepFormDemo";
import NavbarDemo from "./pages/NavbarDemo";
import NotificationBadgeDemo from "./pages/NotificationBadgeDemo";
import PopconfirmDemo from "./pages/PopconfirmDemo";
import PopoverDemo from "./pages/PopoverDemo";
import ProgressDemo from "./pages/ProgressDemo";
import RatingDemo from "./pages/RatingDemo";
import RippleDemo from "./pages/RippleDemo";
import ScrollIndicatorDemo from "./pages/ScrollIndicatorDemo";
import ScrollspyDemo from "./pages/ScrollspyDemo";
import ScrollToTopDemo from "./pages/ScrollToTopDemo";
import SelectMenuDemo from "./pages/SelectMenuDemo";
import SidebarDemo from "./pages/SidebarDemo";
import SidebarWithSubmenuDemo from "./pages/SidebarWithSubmenuDemo";
import SliderDemo from "./pages/SliderDemo";
import SortableListDemo from "./pages/SortableListDemo";
import SpeedDialDemo from "./pages/SpeedDialDemo";
import SwitchDemo from "./pages/SwitchDemo";
import TableDemo from "./pages/TableDemo";
import TabsDemo from "./pages/TabsDemo";
import TimelineDemo from "./pages/TimelineDemo";
import ToastDemo from "./pages/ToastDemo";
import TooltipDemo from "./pages/TooltipDemo";
import TreeViewDemo from "./pages/TreeViewDemo";
import TypewriterDemo from "./pages/TypewriterDemo";
import PricingDemo from "./pages/PricingDemo";
import FooterDemo from "./pages/FooterDemo";
import BreadcrumbDemo from "./pages/BreadcrumbDemo";
import StatsSectionDemo from "./pages/StatsSectionDemo";
import TestimonialsDemo from "./pages/TestimonialsDemo";
import ContentEditableDemo from "./pages/ContentEditableDemo";
import ResizableDemo from "./pages/ResizableDemo";
import AnimatedMultilevelDropdownDemo from "./pages/AnimatedMultilevelDropdownDemo";
import AnimatedFormDemo from "./pages/AnimatedFormDemo";
import LoaderDemo from "./pages/LoaderDemo";
import RadioBtnDemo from "./pages/RadioBtnDemo";
import RibbonDemo from "./pages/RibbonDemo";
import ScrollAnimationsDemo from "./pages/ScrollAnimationsDemo";

function App() {
  return (
    <>
      <BrowserRouter basename="/React-tailwind-components">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<AccordionDemo />} />
          <Route path="/alerts" element={<AlertsDemo />} />
          <Route path="/animated-form" element={<AnimatedFormDemo />} />
          <Route path="/animated-multilevel-dropdown" element={<AnimatedMultilevelDropdownDemo />} />
          <Route path="/autocomplete" element={<AutocompleteDemo />} />
          <Route path="/breadcrumbs" element={<BreadcrumbDemo />} />
          <Route path="/carousel" element={<CarouselDemo />} />
          <Route path="/checkbox" element={<CheckboxDemo />} />
          <Route path="/chips" element={<ChipsDemo />} />
          <Route path="/circular-menu" element={<CircularMenuDemo />} />
          <Route path="/circular-rotating-list" element={<CircularRotatingListDemo />} />
          <Route path="/command-palette" element={<CommandPaletteDemo />} />
          <Route path="/content-editable" element={<ContentEditableDemo />} />
          <Route path="/datepicker" element={<DatePickerDemo />} />
          <Route path="/drawer" element={<DrawerDemo />} />
          <Route path="/dropdown" element={<DropdownDemo />} />
          <Route path="/faq" element={<FaqDemo />} />
          <Route path="/footer" element={<FooterDemo />} />
          <Route path="/form" element={<FormDemo />} />
          <Route path="/image-uploader" element={<ImageUploaderDemo />} />
          <Route path="/image-hover" element={<ImageHoverDemo />} />
          <Route path="/list-hover" element={<ListHoverDemo />} />
          <Route path="/loader" element={<LoaderDemo />} />
          <Route path="/masonry" element={<MasonryDemo />} />
          <Route path="/mega-menu" element={<MegaMenuDemo />} />
          <Route path="/modal" element={<ModalDemo />} />
          <Route path="/multiselect-menu" element={<MultiselectMenuDemo />} />
          <Route path="/multistepform" element={<MultistepFormDemo />} />
          <Route path="/navbar" element={<NavbarDemo />} />
          <Route path="/notification-badge" element={<NotificationBadgeDemo />} />
          <Route path="/popconfirm" element={<PopconfirmDemo />} />
          <Route path="/popover" element={<PopoverDemo />} />
          <Route path="/pricing" element={<PricingDemo />} />
          <Route path="/progress" element={<ProgressDemo />} />
          <Route path="/radio-btn" element={<RadioBtnDemo />} />
          <Route path="/rating" element={<RatingDemo />} />
          <Route path="/resizable" element={<ResizableDemo />} />
          <Route path="/ribbon" element={<RibbonDemo />} />
          <Route path="/ripple" element={<RippleDemo />} />
          <Route path="/scroll-animations" element={<ScrollAnimationsDemo />} />
          <Route path="/scroll-indicator" element={<ScrollIndicatorDemo />} />
          <Route path="/scrollspy" element={<ScrollspyDemo />} />
          <Route path="/scroll-back-to-top-btn" element={<ScrollToTopDemo />} />
          <Route path="/select-menu" element={<SelectMenuDemo />} />
          <Route path="/sidebar" element={<SidebarDemo />} />
          <Route path="/sidebar-with-submenu" element={<SidebarWithSubmenuDemo />} />
          <Route path="/slider" element={<SliderDemo />} />
          <Route path="/sortable-list" element={<SortableListDemo />} />
          <Route path="/speed-dial" element={<SpeedDialDemo />} />
          <Route path="/stats-section" element={<StatsSectionDemo />} />
          <Route path="/switch" element={<SwitchDemo />} />
          <Route path="/table" element={<TableDemo />} />
          <Route path="/tabs" element={<TabsDemo />} />
          <Route path="/testimonials" element={<TestimonialsDemo />} />
          <Route path="/timeline" element={<TimelineDemo />} />
          <Route path="/toast" element={<ToastDemo />} />
          <Route path="/tooltip" element={<TooltipDemo />} />
          <Route path="/tree-view" element={<TreeViewDemo />} />
          <Route path="/typewriter" element={<TypewriterDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
